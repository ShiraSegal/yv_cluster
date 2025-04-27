import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'yv-cluster-assignee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './assignee.component.html',
  styleUrl: './assignee.component.scss'
})
export class AssigneeComponent {
//variables
  @Input() data: string | undefined;
  assigneeInitials: string = '';
  truncatedName: string = '';
//functions
  ngOnInit(): void {
    if (this.data) {
      const nameParts = this.data.split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts[1];
      this.assigneeInitials = `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();
      this.truncatedName = this.data.length > 17 ? `${this.data.substring(0, 17)}...` : this.data;
    }
  }

}
