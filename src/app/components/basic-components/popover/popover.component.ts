import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeType, HeaderCellType, NativeOptionState, NativeOptionType, PopoverHeader, PopoverType, TextColor, TextSize, TextWeight } from 'src/app/enums/basic-enum';
import { HeaderCellsComponent } from '../header-cells/header-cells.component';
import { NativeOptionComponent } from '../native-option/native-option.component';
import { BadgeComponent } from '../badge/badge.component';
import { AssigneeComponent } from '../assignee/assignee.component';
import { IconType } from 'src/app/enums/icon-enum';
import { BodyComponent } from '../body/body.component';

@Component({
  selector: 'yv-cluster-popover',
  standalone: true,
  imports: [CommonModule,HeaderCellsComponent,BadgeComponent,AssigneeComponent,NativeOptionComponent,BodyComponent],
  templateUrl: './popover.component.html',
  styleUrl: './popover.component.scss'
})
export class PopoverComponent {
// @Input() header:PopoverHeader;
@Input() type:PopoverType;
@Input() popoverOptions:string[];
// icon:IconType.SQUARE_ARROW_UP_RIGHT_REGULAR;
header:string;
size:TextSize=TextSize.MEDIUM;
weight:TextWeight=TextWeight.BOLD;
color:TextColor=TextColor.SLATE_BLUE;

ngOnInit() {
if(this.type==='status'){
this.header='Status';
// this.popoverOptionsArray=[new NativeOptionComponent(NativeOptionType.STATUS,NativeOptionState.DEFAULT),new];
}
else if(this.type==='assignee'){
this.header='Assignee Responsible';
}
else{
  this.header='Link To CRM';
}
}

headerCellType = HeaderCellType.TEXT;
optionType = NativeOptionType;
optionState = NativeOptionState;
badgeType= BadgeType;
}
