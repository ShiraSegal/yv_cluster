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
          this.highlightedWords = this.highlightFrequentWords(); // הפעלה פעם אחת בלבד
          // this.compareData$.next(this.isReadyForCreateInvoice());          
          console.log("getCompareDataInCom", res);

          console.log("compareData", this.compareData);
          console.log("😂😂😂",this.highlightedWords);
          
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

  private highlightFrequentWords(): Record<string, string[]> {
    const keyWordCounts: Record<string, Record<string, number>> = {};

    for (const record of this.compareData) {
      for (const [key, value] of Object.entries(record.values)) {
        const words = value?.toString().split(/\s+/).map(w => w.trim()).filter(Boolean) || [];
        const uniqueWords = new Set(words);

        if (!keyWordCounts[key]) keyWordCounts[key] = {};

        for (const word of uniqueWords) {
          keyWordCounts[key][word] = (keyWordCounts[key][word] || 0) + 1;
        }
      }
    }

    const result: Record<string, string[]> = {};

    for (const [key, wordMap] of Object.entries(keyWordCounts)) {
      const topWords = Object.entries(wordMap)
        .filter(([_, count]) => count >= 2)
        .map(([word]) => word);

      if (topWords.length > 0) {
        result[key] = topWords;
      }
    }

    return result;
  }
}