import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  userList: any[] = [
    { id: 1, name: 'Muhammed' },
    { id: 2, name: 'ALi' },
    { id: 3, name: 'Amal' },
  ]
}
