import { CommonModule } from '@angular/common';
import {
  BadgeType,
  NativeOptionState,
  NativeOptionType,
} from 'src/app/enums/basic-enum';
import {
  Component,
  forwardRef,
  inject,
  Inject,
  Optional,
  OnDestroy,
} from '@angular/core'; // ← הוספנו OnDestroy
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ButtonComponent } from '../../basic-components/button/button.component';
import { HeadingComponent } from '../../basic-components/heading/heading.component';
import {
  ButtonType,
  HeaderCellType,
  State,
  TextColor,
  TextSize,
  TextWeight,
} from 'src/app/enums/basic-enum';
import { RadioButtonListComponent } from '../../basic-components/radio-button-list/radio-button-list.component';
import { ClusterApiService } from 'src/app/services/cluster-api.service';
import { elementAt, Observable, Subject, takeUntil, Subscription } from 'rxjs'; // ← הוספנו Subject, takeUntil
import { ClusterService } from 'src/app/services/cluster.service';
import { HeaderCellsComponent } from '../../basic-components/header-cells/header-cells.component';
import { FieldComponent } from '../../basic-components/field/field.component';
import { ToastNotificationComponent } from '../../basic-components/toast-notification/toast-notification.component';
import { SelectComponent } from '../../basic-components/select/select.component';
import { IconType } from 'src/app/enums/icon-enum';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RadioButtonComponent } from '../../basic-components/radio-button/radio-button.component';
import { SapirClusterModel } from 'src/app/models/sapir-cluster-model.model';
import { TableHeaderComponent } from '../../basic-components/table-header/table-header.component';
import { BookIdDetails } from 'src/app/models/book-id-details.model';
// import { sapirClusterModel } from 'src/app/models/sapir-cluster-model.model';

type NativeSelectOption = {
  optionType: NativeOptionType;
  optionState: NativeOptionState;
  displayText?: string;
  property?: BadgeType;
  icon?: string;
  isLink?: boolean;
};

@Component({
  selector: 'yv-cluster-create-cluster',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ButtonComponent,
    HeadingComponent,
    RadioButtonListComponent,
    ButtonComponent,
    HeaderCellsComponent,
    SelectComponent,
  ],
  templateUrl: './create-cluster.component.html',
  styleUrl: './create-cluster.component.scss',
})
export class CreateClusterComponent {
  #dialogRef = inject(MatDialogRef<CreateClusterComponent>, { optional: true });
  #data = inject(MAT_DIALOG_DATA, { optional: true });
  //{ optional: true }- האם צריך את זה?
  #formBuilder = inject(FormBuilder);
  #clusterService = inject(ClusterService);
  #destroy$ = new Subject<void>(); // ← ניהול ביטול האזנות

  createClusterForm: FormGroup = this.#formBuilder.group({
    clusterLevel: ['', Validators.required],
    comments: [''],
  });

  formIsValid!: boolean;
  createClusterFormFields: any = {};
  dataCells: BookIdDetails[];
  bookIdDetails: BookIdDetails[]; // = new BookIdDetails();
  close: boolean = false;

  header: string = 'Create Cluster';
  size: TextSize = TextSize.SMALL;
  weight: TextWeight = TextWeight.BOLD;
  color: TextColor = TextColor.NEUTRAL_GRAY;

  headerCellType = HeaderCellType;
  tableHeader1: string = 'Field';
  size1: TextSize = TextSize.MEDIUM;
  weight1: TextWeight = TextWeight.BOLD;
  tableHeader2: string = 'Text Value';
  color1: TextColor = TextColor.SLATE_BLUE;

  selectLabel: string = 'Cluster Level';
  options: NativeSelectOption[] = [
    {
      optionType: NativeOptionType.TEXT,
      optionState: NativeOptionState.DEFAULT,
      displayText: 'Exact',
      isLink: false,
    },
    {
      optionType: NativeOptionType.TEXT,
      optionState: NativeOptionState.DEFAULT,
      displayText: 'Most Probable',
      isLink: false,
    },
    {
      optionType: NativeOptionType.TEXT,
      optionState: NativeOptionState.DEFAULT,
      displayText: 'Possible',
      isLink: false,
    },
  ];

  comments: string = '';

  button1: string = 'Cancel';
  button2: string = 'Set a cluster';
  btn_size: boolean = false;
  buttomType1: ButtonType = ButtonType.TERTIARY;
  buttomType2: ButtonType = ButtonType.PRIMARY;
  subscription: Subscription = new Subscription();
  iconType = IconType;
  fieldsToDisplayInCreateCluster: string[] = [
    'firstName',
    'lastName',
    'fatherFirstName',
    'motherFirstName',
    'spouseFirstName',
    'dateOfBirth',
    'placeOfBirth',
    'permanentPlace',
    'source',
    'placeOfDeath',
    'authenticDateOfBirth',
    'restoredDateOfBirth',
    'authenticDateOfDeath',
    'restoredDateOfDeath',
    'gender',
    'fate',
  ];

  valuesToDisplayedFields: {
    [key in string]: { key: string; value: string }[];
  } = {};
  ngOnInit() {
    this.createClusterFormData();
    console.log('option', this.options);
  }
  createClusterFormData() {
    // console.log("createClusterFormData called with bookId:", this.#data?.bookId); // ← הוספת לוג
    console.log('this.#data:', this.#data); // ← הוספת לוג

    this.subscription.add(
      this.#clusterService
        .getCreateClusterData(this.#data) // ← הוספת מנוי
        .subscribe({
          next: (res: BookIdDetails[] | null) => {
            if (res) {
              this.dataCells = res;
              this.fieldsToDisplayInCreateCluster.forEach((fieldName) => {
                this.valuesToDisplayedFields[fieldName] = [] as {
                  key: string;
                  value: string;
                }[];
              });
              console.log('getCreateClusterData response:', res);
              this.dataCells.forEach((bookIdDetails: BookIdDetails) => {
                this.#clusterService.dispalayFieldsToCreateClusterForm(
                  bookIdDetails,
                  this.valuesToDisplayedFields
                );
                console.log(
                  'valuesToDisplayedFields:',
                  this.valuesToDisplayedFields
                );
              });
              this.fieldsToDisplayInCreateCluster.forEach((field: any) => {
                if(field!='gender'&& field!='fate'){
                this.valuesToDisplayedFields[field].push({
                  key: 'other',
                  value: 'other',
                });
              }
              });
              this.initializeFormGroup();
            } else {
              console.warn('No data received from getCreateClusterData.');
              this.dataCells = [];
            }
          },
          error: (error) => {
            console.error('getCreateClusterData occurred:', error);
          },
        })
    );
  }

  initializeFormGroup() {
    this.fieldsToDisplayInCreateCluster.forEach((field: string) => {
      this.createClusterForm.addControl(
        field,
        new FormControl('', Validators.required)
      );
    });
  }

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  createCluster() {
    // console.log("createClusterForm", this.createClusterForm.value);

    if (this.createClusterForm.valid) {
      console.log('cluster is valid?', this.createClusterForm.valid);
      console.log('valid check', this.createClusterForm.value);

      this.subscription.add(
        this.#clusterService.createCluster(this.#data).subscribe({
          next: (res) => {
            if (res) {
              console.log('Cluster created successfully:', res);
              this.closeDialogWithData({ bookId: res });
            } else {
              console.warn('Cluster creation failed.');
            }
          },
          error: (err) => {
            console.error('Error occurred while creating cluster:', err);
          },
        })
      );
    }

    //   this.clusterModel.bookIdList.map((field: any) => {
    //     const values = field.values.filter((value: any) => {
    //       return value.nameCode === this.createClusterForm.controls[field.field].value;
    //     });

    //     field.Values = values;
    //   });

    //   this.clusterModel.level = this.createClusterForm.value.clusterLevel;
    //   this.clusterModel.comments = this.createClusterForm.value.comments;

    //  this.subscription.add(this.#clusterService.createCluster(this.clusterModel)
    //     .subscribe({
    //       next: (res) => {
    //         if (res) {
    //           console.log("Cluster created:", res);
    //         } else {
    //           console.warn("Cluster creation failed.");
    //         }
    //       },
    //       error: (err: any) => {
    //         console.error("Error during cluster creation:", err);
    //       }
    //     }));
    // }
    // else {
    //   this.formIsValid = false;
    //   this.closeDialogWithData({ bookId: "formIsNotValid" });
    // }
  }

  closeDialogWithData(data: any): void {
    this.#dialogRef.close(data); // מעבירה את הנתונים לקומפוננטת האבא
  }

  ngOnDestroy(): void {
    // ← פונקציית ניקוי בסיום חיי הקומפוננטה
    this.subscription.unsubscribe(); // מבטלת את כל המנויים שנוצרו
  }
}