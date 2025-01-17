import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-web';
  isHidden: boolean = true;

  toggleVisibility() {
    this.isHidden = !this.isHidden;
  }  
}
