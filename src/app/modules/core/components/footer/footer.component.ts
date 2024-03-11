import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  year: number = new Date().getFullYear();
  redColor() {
  // this.ColorHeaderSection = 'red'
  }
  whiteColor() {
//  this.ColorHeaderSection = 'white'
  }
}
