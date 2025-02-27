import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'yv-cluster-basic-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-card.component.html',
  styleUrl: './basic-card.component.scss'
})
export class BasicCardComponent {
  @Input() text!: string;
  // @Input() TheClassOfTheIcon!: string;
  // @Input() iconColor!: string;
  // @Input() iconCircleBackgroundColor!: string;
   @Input() iconName!: string;
   iconClass!:string;
   ngOnInit(): void{
    this.setIconClass()
   }
   setIconClass(){
     if(this.iconName==='hourglass-clock')
       this.iconClass='fa-solid fa-hourglass-clock';
     else if(this.iconName==='clock-five')
       this.iconClass='fa-solid fa-clock-five';
     else if(this.iconName==='circle-check')
       this.iconClass='fa-solid fa-circle-check';
     else if(this.iconName==='edit')
       this.iconClass='fa-solid fa-pen-to-square';
     else if(this.iconName==='home')
       this.iconClass='fa-light fa-house';
   }
}
