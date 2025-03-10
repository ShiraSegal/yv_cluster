import { Component, Input } from '@angular/core';

@Component({
  selector: 'yv-cluster-assignee',
  standalone: true,
  imports: [],
  templateUrl: './assignee.component.html',
  styleUrl: './assignee.component.scss'
})
export class AssigneeComponent {
  
 @Input() firstName: string | undefined;
 @Input() lastName: string | undefined;
 assigneeSqureData: string | undefined;
 ngOnInit() {
    if (this.firstName && this.lastName) {
        this.assigneeSqureData = this.firstName.charAt(0) + this.lastName.charAt(0)
    }
 }
}
