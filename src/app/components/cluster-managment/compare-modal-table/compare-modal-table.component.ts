import { Component, Input } from '@angular/core';
import { BasicToggleComponent } from '../../basic-components/basic-toggle/basic-toggle.component';
import { CommonModule } from '@angular/common';
import { CompareModalButtonComponent } from '../../basic-components/compare-modal-button/compare-modal-button.component';
import { Subscription } from 'rxjs';
import { CompareModalService } from 'src/app/services/compare-modal.service';
import { ViewerComponent } from '../../basic-components/viewer/viewer.component';
import { RecordDetailsComponent } from '../record-details/record-details.component';

@Component({
  selector: 'yv-cluster-compare-modal-table',
  standalone: true,
  imports: [CommonModule, BasicToggleComponent, CompareModalButtonComponent, ViewerComponent, RecordDetailsComponent],
  templateUrl: './compare-modal-table.component.html',
  styleUrls: ['./compare-modal-table.component.scss']
})
export class CompareModalTableComponent {
  records = [
    {
      name: "Rec1",
      detailsOn: true,
      imageOn: false,
      image: "path_to_image.jpg",
      details: [
        { key: "CLUSTER_ID", value: "16229261, Reinisch, Pozes, Matilda" },
        { key: "FIRST_NAME", value: "Matilda" },
        { key: "LAST_NAME", value: "Reinish Pozes" },
        { key: "MAIDEN_NAME", value: "" },
        { key: "TITLE", value: "" },
        { key: "GENDER", value: "Female" },
        { key: "FATHER_FIRST_NAME", value: "Shlomo Zalman" },
        { key: "MOTHER_FIRST_NAME", value: "Miriam" },
        { key: "PERMANENT_PLACE", value: "Sniatin,Sniatyn,Stanislawow,Poland" },
        { key: "STATUS", value: "alive post war" },
        { key: "SOURCE", value: "Page of Testimony" },
        { key: "BOOK_ID", value: "15898758" },
        { key: "BELONGS_TO", value: "Yad Vashem - Pages of Testimony Names Memorial Collection" },
        // Duplicate
        { key: "CLUSTER_ID", value: "16229261, Reinisch, Pozes, Matilda" },
        { key: "FIRST_NAME", value: "Matilda" },
        { key: "LAST_NAME", value: "Reinish Pozes" },
        { key: "MAIDEN_NAME", value: "" },
        { key: "TITLE", value: "" },
        { key: "GENDER", value: "Female" },
        { key: "FATHER_FIRST_NAME", value: "Shlomo Zalman" },
        { key: "MOTHER_FIRST_NAME", value: "Miriam" },
        { key: "PERMANENT_PLACE", value: "Sniatin,Sniatyn,Stanislawow,Poland" },
        { key: "STATUS", value: "alive post war" },
        { key: "SOURCE", value: "Page of Testimony" },
        { key: "BOOK_ID", value: "15898758" },
        { key: "BELONGS_TO", value: "Yad Vashem - Pages of Testimony Names Memorial Collection" }
      ]
    },
    {
      name: "Rec2",
      detailsOn: true,
      imageOn: false,
      image: "path_to_image2.jpg",
      details: [
        { key: "CLUSTER_ID", value: "16229261, Reinisch, Pozes, Matilda" },
        { key: "FIRST_NAME", value: "Matilda" },
        { key: "LAST_NAME", value: "Reinish Pozes" },
        { key: "MAIDEN_NAME", value: "" },
        { key: "TITLE", value: "" },
        { key: "GENDER", value: "Female" },
        { key: "FATHER_FIRST_NAME", value: "Shlomo Zalman" },
        { key: "MOTHER_FIRST_NAME", value: "Miriam" },
        { key: "PERMANENT_PLACE", value: "Sniatin,Sniatyn,Stanislawow,Poland" },
        { key: "STATUS", value: "alive post war" },
        { key: "SOURCE", value: "Page of Testimony" },
        { key: "BOOK_ID", value: "15900653" },
        { key: "BELONGS_TO", value: "Yad Vashem - Pages of Testimony Names Memorial Collection" },
        // Duplicate
        { key: "CLUSTER_ID", value: "16229261, Reinisch, Pozes, Matilda" },
        { key: "FIRST_NAME", value: "Matilda" },
        { key: "LAST_NAME", value: "Reinish Pozes" },
        { key: "MAIDEN_NAME", value: "" },
        { key: "TITLE", value: "" },
        { key: "GENDER", value: "Female" },
        { key: "FATHER_FIRST_NAME", value: "Shlomo Zalman" },
        { key: "MOTHER_FIRST_NAME", value: "Miriam" },
        { key: "PERMANENT_PLACE", value: "Sniatin,Sniatyn,Stanislawow,Poland" },
        { key: "STATUS", value: "alive post war" },
        { key: "SOURCE", value: "Page of Testimony" },
        { key: "BOOK_ID", value: "15900653" },
        { key: "BELONGS_TO", value: "Yad Vashem - Pages of Testimony Names Memorial Collection" }
      ]
    },
    {
      name: "Rec3",
      detailsOn: true,
      imageOn: false,
      image: "path_to_image3.jpg",
      details: [
        { key: "CLUSTER_ID", value: "16229261, Reinisch, Pozes, Matilda" },
        { key: "FIRST_NAME", value: "Matilda Matia" },
        { key: "LAST_NAME", value: "Reinisch Reinish Pozes" },
        { key: "MAIDEN_NAME", value: "" },
        { key: "TITLE", value: "" },
        { key: "GENDER", value: "Female" },
        { key: "FATHER_FIRST_NAME", value: "Shlomo Zalman" },
        { key: "MOTHER_FIRST_NAME", value: "Miriam" },
        { key: "PERMANENT_PLACE", value: "Sniatin,Sniatyn,Stanislawow,Poland" },
        { key: "STATUS", value: "alive post war" },
        { key: "SOURCE", value: "Page of Testimony" },
        { key: "BOOK_ID", value: "15900842" },
        { key: "BELONGS_TO", value: "Yad Vashem - Pages of Testimony Names Memorial Collection" },
        // Duplicate
        { key: "CLUSTER_ID", value: "16229261, Reinisch, Pozes, Matilda" },
        { key: "FIRST_NAME", value: "Matilda Matia" },
        { key: "LAST_NAME", value: "Reinisch Reinish Pozes" },
        { key: "MAIDEN_NAME", value: "" },
        { key: "TITLE", value: "" },
        { key: "GENDER", value: "Female" },
        { key: "FATHER_FIRST_NAME", value: "Shlomo Zalman" },
        { key: "MOTHER_FIRST_NAME", value: "Miriam" },
        { key: "PERMANENT_PLACE", value: "Sniatin,Sniatyn,Stanislawow,Poland" },
        { key: "STATUS", value: "alive post war" },
        { key: "SOURCE", value: "Page of Testimony" },
        { key: "BOOK_ID", value: "15900842" },
        { key: "BELONGS_TO", value: "Yad Vashem - Pages of Testimony Names Memorial Collection" }
      ]
    },
    {
      name: "Rec4",
      detailsOn: true,
      imageOn: false,
      image: "path_to_image4.jpg",
      details: [
        { key: "CLUSTER_ID", value: "16229261, Reinisch, Pozes, Matilda" },
        { key: "FIRST_NAME", value: "Matilda" },
        { key: "LAST_NAME", value: "Reinisch Reinish Pozes" },
        { key: "MAIDEN_NAME", value: "" },
        { key: "TITLE", value: "" },
        { key: "GENDER", value: "Female" },
        { key: "FATHER_FIRST_NAME", value: "Shlomo Zalman" },
        { key: "MOTHER_FIRST_NAME", value: "Miriam" },
        { key: "PERMANENT_PLACE", value: "Sniatin,Sniatyn,Stanislawow,Poland" },
        { key: "STATUS", value: "alive post war" },
        { key: "SOURCE", value: "Page of Testimony" },
        { key: "BOOK_ID", value: "15900962" },
        { key: "BELONGS_TO", value: "Yad Vashem - Pages of Testimony Names Memorial Collection" },
        // Duplicate
        { key: "CLUSTER_ID", value: "16229261, Reinisch, Pozes, Matilda" },
        { key: "FIRST_NAME", value: "Matilda" },
        { key: "LAST_NAME", value: "Reinisch Reinish Pozes" },
        { key: "MAIDEN_NAME", value: "" },
        { key: "TITLE", value: "" },
        { key: "GENDER", value: "Female" },
        { key: "FATHER_FIRST_NAME", value: "Shlomo Zalman" },
        { key: "MOTHER_FIRST_NAME", value: "Miriam" },
        { key: "PERMANENT_PLACE", value: "Sniatin,Sniatyn,Stanislawow,Poland" },
        { key: "STATUS", value: "alive post war" },
        { key: "SOURCE", value: "Page of Testimony" },
        { key: "BOOK_ID", value: "15900962" },
        { key: "BELONGS_TO", value: "Yad Vashem - Pages of Testimony Names Memorial Collection" }
      ]
    },
    {
      name: "Rec5",
      detailsOn: true,
      imageOn: false,
      image: "path_to_image5.jpg",
      details: [
        { key: "CLUSTER_ID", value: "" },
        { key: "FIRST_NAME", value: "Matilda" },
        { key: "LAST_NAME", value: "Reinisch Reinish Pozes" },
        { key: "MAIDEN_NAME", value: "" },
        { key: "TITLE", value: "" },
        { key: "GENDER", value: "Female" },
        { key: "FATHER_FIRST_NAME", value: "" },
        { key: "MOTHER_FIRST_NAME", value: "Miriam" },
        { key: "PERMANENT_PLACE", value: "Sniatin,Sniatyn,Stanislawow,Poland" },
        { key: "STATUS", value: "alive post war" },
        { key: "SOURCE", value: "Page of Testimony" },
        { key: "BOOK_ID", value: "15901353" },
        { key: "BELONGS_TO", value: "Yad Vashem - Pages of Testimony Names Memorial Collection" },
        // Duplicate
        { key: "CLUSTER_ID", value: "" },
        { key: "FIRST_NAME", value: "Matilda" },
        { key: "LAST_NAME", value: "Reinisch Reinish Pozes" },
        { key: "MAIDEN_NAME", value: "" },
        { key: "TITLE", value: "" },
        { key: "GENDER", value: "Female" },
        { key: "FATHER_FIRST_NAME", value: "" },
        { key: "MOTHER_FIRST_NAME", value: "Miriam" },
        { key: "PERMANENT_PLACE", value: "Sniatin,Sniatyn,Stanislawow,Poland" },
        { key: "STATUS", value: "alive post war" },
        { key: "SOURCE", value: "Page of Testimony" },
        { key: "BOOK_ID", value: "15901353" },
        { key: "BELONGS_TO", value: "Yad Vashem - Pages of Testimony Names Memorial Collection" }
      ]
    },
    {
      name: "Rec6",
      detailsOn: true,
      imageOn: false,
      image: "path_to_image6.jpg",
      details: [
        { key: "CLUSTER_ID", value: "" },
        { key: "FIRST_NAME", value: "Adler" },
        { key: "LAST_NAME", value: "Adler" },
        { key: "MAIDEN_NAME", value: "" },
        { key: "TITLE", value: "" },
        { key: "GENDER", value: "Male" },
        { key: "FATHER_FIRST_NAME", value: "" },
        { key: "MOTHER_FIRST_NAME", value: "" },
        { key: "PERMANENT_PLACE", value: "" },
        { key: "STATUS", value: "murdered" },
        { key: "SOURCE", value: "List of murdered persons" },
        { key: "BOOK_ID", value: "7029235" },
        { key: "BELONGS_TO", value: "Card file of Jews from Hungary who perished, prepared by the Hungarian branch of the World Jewish Congress, 1945-1946" },
        // Duplicate
        { key: "CLUSTER_ID", value: "" },
        { key: "FIRST_NAME", value: "Adler" },
        { key: "LAST_NAME", value: "Adler" },
        { key: "MAIDEN_NAME", value: "" },
        { key: "TITLE", value: "" },
        { key: "GENDER", value: "Male" },
        { key: "FATHER_FIRST_NAME", value: "" },
        { key: "MOTHER_FIRST_NAME", value: "" },
        { key: "PERMANENT_PLACE", value: "" },
        { key: "STATUS", value: "murdered" },
        { key: "SOURCE", value: "List of murdered persons" },
        { key: "BOOK_ID", value: "7029235" },
        { key: "BELONGS_TO", value: "Card file of Jews from Hungary who perished, prepared by the Hungarian branch of the World Jewish Congress, 1945-1946" }
      ]
    }
  ];
  handleDetailsModeChange(isActive: boolean,index:number) {
    this.records[index].detailsOn= isActive; // מעדכן את המצב של details בקומפוננטת האב
  }

  handleImageModeChange(isActive: boolean ,index:number) {
    this.records[index].imageOn= isActive; // מעדכן את המצב של details בקומפוננטת האב
  }
}