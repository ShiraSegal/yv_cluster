import { Component, inject } from '@angular/core';
import { BasicToggleComponent } from '../../basic-components/basic-toggle/basic-toggle.component';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { ViewerComponent } from '../../basic-components/viewer/viewer.component';
import { RecordDetailsComponent } from '../record-details/record-details.component';
import { CompaereDetailsData } from 'src/app/models/compaereDetailsData.model';
import { ClusterService } from 'src/app/services/cluster.service';
import { ButtonComponent } from '../../basic-components/button/button.component';
import { ButtonType } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { BasicSimpleSquareIconButtonComponent } from '../../basic-components/basic-simple-square-icon-button/basic-simple-square-icon-button.component';
import { CloseRecordDetailsComponent } from '../close-record-details/close-record-details.component';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'yv-cluster-compare-modal-table',
  standalone: true,
  imports: [CommonModule,CloseRecordDetailsComponent, BasicToggleComponent, ViewerComponent, RecordDetailsComponent, ButtonComponent, BasicSimpleSquareIconButtonComponent],
  templateUrl: './compare-modal-table.component.html',
  styleUrls: ['./compare-modal-table.component.scss']
})
export class CompareModalTableComponent {
  compareData: CompaereDetailsData[] = [];
  #service = inject(ClusterService);
  xmark: IconType = IconType.XMARK
  subscription: Subscription = new Subscription();
  matchIcon: IconType = IconType.REGULAR_CIRCLE_CHECK
  markedButtonType = ButtonType.PRIMARY
  closeButtonType = ButtonType.SECONDARY
  buttonText = "Mark Matches"
  highlightedWords: Record<string, string[]> = {};

  showHighlights = false; // שליטה על הצגת הדגשות

  ngOnInit() {
    this.#service.getCompareData()
      .subscribe({
        next: (res: CompaereDetailsData[] | null) => {
          this.compareData = res || [];
          this.highlightedWords = this.highlightFrequentWords(this.compareData);
          // הפעלה פעם אחת בלבד
          // this.compareData$.next(this.isReadyForCreateInvoice());          
          console.log("getCompareDataInCom", res);

          console.log("compareData", this.compareData);
          console.log("Highlight Map:", JSON.stringify(this.highlightedWords, null, 2));

        },
        error: (err) => {
          console.log("Error fetching compare data", err);
        },
        complete: () => {
          console.log("Observable completed");
        }
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

    
  private dialogRef = inject(MatDialogRef<CompareModalTableComponent>);

  closeTable() {
    this.dialogRef.close(); // סגירת הדיאלוג
  }
 

  markedMatches() {
    this.showHighlights = !this.showHighlights;
    this.markedButtonType = this.showHighlights ? ButtonType.PRIMARY : ButtonType.SECONDARY;
    this.buttonText = this.showHighlights ? "Marked Matches" : "Unmarked Matches";
  }

  private highlightFrequentWords(data: CompaereDetailsData[]): Record<string, string[]> {
    const valuesByKey: Record<string, string[]> = {};
  
    // שלב 1: ארגון ערכים לפי key
    data.forEach(record => {
      record.values.forEach(({ key, value }) => {
        if (!valuesByKey[key]) valuesByKey[key] = [];
        if (value) valuesByKey[key].push(value);
      });
    });
  
    const result: Record<string, string[]> = {};
  
    // שלב 2: עבור כל key, נזהה את המילה הכי שכיחה
    Object.entries(valuesByKey).forEach(([key, values]) => {
      const wordFrequency: Record<string, number> = {};
  
      // פיצול כל ערך למילים והוספה למילון שכיחויות
      values.forEach(value => {
        const words = value.split(/\s+/).map(w => w.trim()).filter(Boolean);
        words.forEach(word => {
          wordFrequency[word] = (wordFrequency[word] || 0) + 1;
        });
      });
  
      // מציאת המילה הכי שכיחה
      const [mostFrequentWord, freq] = Object.entries(wordFrequency)
        .reduce((a, b) => (a[1] >= b[1] ? a : b), ["", 0]);
  
      if (freq >= 2 && mostFrequentWord) {
        // שלב 3: מציאת כל הערכים שמכילים את המילה הזו – בלי כפילויות
        const matchedValues = values.filter(val =>
          val.split(/\s+/).some(word => word === mostFrequentWord)
        );
  
        // סינון כפילויות עם Set
        result[key] = [...new Set(matchedValues)];
      } else {
        result[key] = [];
      }
    });
  
    return result;
  }  
}

  