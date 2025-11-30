import {Component} from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  template: `username: {{username}}<br/>`,
})
export class User {
  username = 'youngTech';
}

@Component({
  selector: 'app-root',
  standalone: true,
  template: `<app-user></app-user>`,
  imports: [User],
})
export class App {}
