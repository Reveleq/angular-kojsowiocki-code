import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NavService } from '../../services/nav.service';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent {
  @Output() redColor = new EventEmitter<string>();
  @Output() whiteColor = new EventEmitter<string>();
  @Output() dark = new EventEmitter<{}>();
  @Output() opacity = new EventEmitter<{}>();
  constructor(
    private navService: NavService,
  ) {}
  activeMobileNav: boolean = false;
  slide = {};
  slideNav() {}
  hideNavBrand() {
    this.activeMobileNav = false;
    this.slide = {
      slide: false,
    };
    this.navService.hideNav()
  }
  hideNav() {
    this.activeMobileNav = !this.activeMobileNav;
    this.slide = {
      slide: false,
    };
    this.navService.hideNav()
    // this.navService.dark = false;
    // this.navService.opacity = false;
    // this.dark.emit({
    //   dark: false,
    // });
    // this.opacity.emit({
    //   opacity: false,
    // });
  }
  activeNav() {
    this.activeMobileNav = !this.activeMobileNav;
    this.slide = {
      slide: true,
    };
    this.navService.activeNav()
 
    // this.dark.emit({
    //   dark: true,
    // });
    // this.opacity.emit({
    //   opacity: true,
    // });
  }
}
