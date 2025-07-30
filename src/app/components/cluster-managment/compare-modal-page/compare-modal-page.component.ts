import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CompareModalTableComponent } from '../compare-modal-table/compare-modal-table.component';
import { ClusterService } from 'src/app/services/cluster.service';
// import { CompareModalService } from 'src/app/services/compare-modal.service';
import { ButtonComponent } from '../../basic-components/button/button.component';
import { IconType } from 'src/app/enums/icon-enum';
import { ButtonType } from 'src/app/enums/basic-enum';


@Component({
  selector: 'yv-cluster-compare-modal-page',
  standalone: true,
  imports: [CommonModule, CompareModalTableComponent, ButtonComponent],
  templateUrl: './compare-modal-page.component.html',
  styleUrls: ['./compare-modal-page.component.scss']
})
export class CompareModalPageComponent {
  data: any[] = [];
  matchIcon: IconType = IconType.REGULAR_CIRCLE_CHECK
  buttonType = ButtonType.SECONDARY
  buttonText = "Marked Matches"

  markedMatches() {
    if (this.buttonType == ButtonType.SECONDARY) {
      this.buttonType = ButtonType.PRIMARY
      this.buttonText = "Marked Matches"

    } else {
      this.buttonType = ButtonType.SECONDARY
      this.buttonText = "Unarked Matches"
    }

  }
  // constructor(private compareModalService: CompareModalService) { }
  // ngOnInit(){
  //   this.compareModalService.CompareData$.subscribe(data => {
  //     console.log("data",data);
  //     this.data = data;
  //   });
  // }  
}