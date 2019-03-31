import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rasp-Ng';
  isCollapsed = true;
  navbarDivWidth = 80;

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    if(this.navbarDivWidth === 80){
      this.navbarDivWidth = 200;
    }
    else{
      this.navbarDivWidth = 80;
    }
  }
}
