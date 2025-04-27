import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CompareModalTableComponent } from '../compare-modal-table/compare-modal-table.component';
import { CompareModalButtonComponent } from '../../basic-components/compare-modal-button/compare-modal-button.component';
import { ClusterService } from 'src/app/services/cluster.service';
import { CompareModalService } from 'src/app/services/compare-modal.service';


@Component({
  selector: 'yv-cluster-compare-modal-page',
  standalone: true,
  imports: [CommonModule, CompareModalTableComponent, CompareModalButtonComponent],
  templateUrl: './compare-modal-page.component.html',
  styleUrls: ['./compare-modal-page.component.scss']
})
export class CompareModalPageComponent {
  data: any[] = []; 
    constructor(private compareModalService: CompareModalService) { }
    ngOnInit(){
      this.compareModalService.CompareData$.subscribe(data => {
        console.log("data",data);
        this.data = data;
      });

    }  
  records: Array<{ name: string, status: 'details' | 'image', image: string }> = [
    { name: 'Rec1', status: 'details', image: 'path_to_image.jpg' },
    { name: 'Rec2', status: 'details', image: 'path_to_image.jpg' },
    { name: 'Rec3', status: 'details', image: 'path_to_image.jpg' },
    { name: 'Rec4', status: 'details', image: 'path_to_image.jpg' },
    { name: 'Rec5', status: 'details', image: 'path_to_image.jpg' },
    { name: 'Rec6', status: 'details', image: 'path_to_image.jpg' }
  ];

  handleViewModeChange(event: { index: number, mode: 'details' | 'image' }) {
    this.records[event.index].status = event.mode;
  }
  // ngOnInit() {
  //   this.#service.ClusterData$.subscribe(data => {
  //     console.log('SapirClusterDetails:', data); // כאן תקבל את הנתונים עצמם
  //      this.dataCells = data; // שמירת הנתונים במשתנה
  //      this.dataCells.forEach((d:any) => {
  //       let values:any=[];
  //         d.Values.forEach((v:any) => {
  //           values.push(v.Value);
  //         });
  //         this.radioControl.setValue(values[0].selectedOption);
  //         console.log("rrrrrrrrrr",this.radioControl);
          
  //         // values[0].selectedOption=true;
  //         console.log("element",d);
  //         if(d.HasOtherOption)
  //           values.push("other");
  //          d.RadioOptions=values;
  //     });
  //     //  this.options.push("other"); 
  //      console.log("222222222222222222",this.dataCells);
  //   });
  //   }
}