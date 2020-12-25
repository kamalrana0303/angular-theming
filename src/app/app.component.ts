import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkMode:boolean=false;
  @HostBinding('class')
  get themeMode(){
    return this.darkMode?'theme-dark':'theme-light'
  }
  toggleMode(val){
    console.log(this.darkMode);
    this.darkMode=val;
  }
}
