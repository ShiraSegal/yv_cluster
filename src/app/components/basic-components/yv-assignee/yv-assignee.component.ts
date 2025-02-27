import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-yv-assignee',
  standalone: true,
  imports: [],
  templateUrl: './yv-assignee.component.html',
  styleUrl: './yv-assignee.component.css'
})
export class YvAssigneeComponent {
 @Input() firstName: string | undefined;
 @Input() lastName: string | undefined;
 assigneeSqureData: string | undefined;
 ngOnInit() {
    if (this.firstName && this.lastName) {
        this.assigneeSqureData = this.firstName.charAt(0) + this.lastName.charAt(0)
    }
 }
}

