import { Component, inject, Input } from '@angular/core';
import { BasicToggleComponent } from '../../basic-components/basic-toggle/basic-toggle.component';
import { CommonModule } from '@angular/common';
import { BehaviorSubject, findIndex, Observable, Subscription } from 'rxjs';
import { ViewerComponent } from '../../basic-components/viewer/viewer.component';
import { RecordDetailsComponent } from '../record-details/record-details.component';
import { CompaereDetailsData } from 'src/app/models/compaereDetailsData.model';
import { ClusterService } from 'src/app/services/cluster.service';
import { ButtonComponent } from '../../basic-components/button/button.component';
import { ButtonType } from 'src/app/enums/basic-enum';
import { IconType } from 'src/app/enums/icon-enum';
import { BasicSimpleSquareIconButtonComponent } from '../../basic-components/basic-simple-square-icon-button/basic-simple-square-icon-button.component';
import { IconButtonLargeComponent } from '../../basic-components/icon-button-large/icon-button-large.component';
import { CloseRecordDetailsComponent } from '../close-record-details/close-record-details.component';
import { log } from 'console';


@Component({
  selector: 'yv-cluster-compare-modal-table',
  standalone: true,
  imports: [CommonModule,CloseRecordDetailsComponent, BasicToggleComponent, ViewerComponent, RecordDetailsComponent, ButtonComponent, BasicSimpleSquareIconButtonComponent],
  templateUrl: './compare-modal-table.component.html',
  styleUrls: ['./compare-modal-table.component.scss']
})
export class CompareModalTableComponent {
  compareData: CompaereDetailsData[] = [];
  // compareData$: Observable<CompaereDetailsData[]>
  #service = inject(ClusterService);

  xmark: IconType = IconType.XMARK
  subscription: Subscription = new Subscription();
  matchIcon: IconType = IconType.REGULAR_CIRCLE_CHECK
  markedButtonType = ButtonType.PRIMARY
  closeButtonType = ButtonType.SECONDARY
  buttonText = "Mark Matches"

  ngOnInit() {
    this.#service.getCompareData()
      .subscribe({
        next: (res: CompaereDetailsData[] | null) => {
          this.compareData = res || [];
          // this.compareData$.next(this.isReadyForCreateInvoice());          
          console.log("getCompareDataInCom", res);

          console.log("compareData", this.compareData);
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

  // handleDetailsModeChange(isActive: boolean, index: number) {
  //   this.compareData[index].detailsOn = isActive; // מעדכן את המצב של details בקומפוננטת האב
  // }

  // handleImageModeChange(isActive: boolean, index: number) {
  //   this.compareData[index].imageOn = isActive; // מעדכן את המצב של details בקומפוננטת האב
  // }
  highlightedWords: Record<string, string[]> = {};


  markedMatches() {
    if (this.markedButtonType == ButtonType.SECONDARY) {
      this.markedButtonType = ButtonType.PRIMARY;
      this.buttonText = "Marked Matches";
  
      this.highlightedWords = this.findMostFrequentWordsByKey();
  
    } else {
      this.markedButtonType = ButtonType.SECONDARY;
      this.buttonText = "Unmarked Matches";
      this.highlightedWords = {};
    }
  }
  private findMostFrequentWordsByKey(): Record<string, string[]> {
    const wordCountByKey: Record<string, Record<string, number>> = {};
  
    for (const item of this.compareData) {
      for (const [key, value] of Object.entries(item.values || {})) {
        const words = value?.toString().split(/\s+/) || [];
        if (!wordCountByKey[key]) wordCountByKey[key] = {};
  
        const uniqueWords = new Set(words);
        for (const word of uniqueWords) {
          const cleaned = word.trim();
          if (!cleaned) continue;
          wordCountByKey[key][cleaned] = (wordCountByKey[key][cleaned] || 0) + 1;
        }
      }
    }
  
    const result: Record<string, string[]> = {};
    for (const [key, wordMap] of Object.entries(wordCountByKey)) {
      const highlights = Object.entries(wordMap)
        .filter(([_, count]) => count >= 2)
        .map(([word]) => word);
      if (highlights.length > 0) {
        result[key] = highlights;
      }
    }
  
    return result;
  }
  
  
  
  closeTable() {

  }
}