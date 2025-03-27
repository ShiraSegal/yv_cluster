import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'yv-cluster-create-cluster',
  standalone: true,
  imports: [CommonModule,Validators,FormsModule,FormGroup],
  templateUrl: './create-cluster.component.html',
  styleUrl: './create-cluster.component.scss'
})
export class CreateClusterComponent {

}
