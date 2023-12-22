import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
})
export class FormsComponent {
  userName = '';
  userRole = '';
  iframeSrc = '';
  
  users = [];

  onUpdateUserName(event: any) {
    this.userName = event;
    console.log(this.userName);
  }

  onUpdateUserRole(event: any) {
    this.userRole = event;
    console.log(this.userRole);
  }
}
