import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  template:`
  <div><h1>{{title}}</h1>
    <div> the component is now ready </div>
  
  </div>
   `
})
export class AppComponent {
  title = 'Angular shuru hua ';
}
