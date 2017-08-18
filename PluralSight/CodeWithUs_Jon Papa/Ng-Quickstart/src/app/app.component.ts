import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>Hello {{name}}</h1>
    <fieldset>
      <img src={{image}} />  
      <img [src]="image" />
    </fieldset>
    <label [style.color]="color"> Favorite Color: </label> {{color}}
    <button (click)="changeColor()">Toggle Color!</button>
  `,
})
export class AppComponent  { 
  name = 'Gustav'; 
  image = '../favicon.ico';
  color = 'red';

  changeColor() {
    this.color = this.color === 'red' ? 'blue' : 'red';
  }
}
