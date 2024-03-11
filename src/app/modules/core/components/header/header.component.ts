import { Component, OnInit } from '@angular/core';
import { NavService } from '../../services/nav.service';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // resetUrl() {
  // setTimeout(() => {
  //   let pasturl = this.url
  //   this.url = ''
  //   this.url = pasturl
  // }, 500);
  // }
  scroll() {
    window.scrollTo(0, window.innerHeight);
  }
  constructor(
    private navService: NavService,
    private scrollService: ScrollService
  ) {
    // window.addEventListener('resize', this.changePageHeight);
  }

  opacityNav = this.navService.opacity;
  darkNav = this.navService.dark;
  // scroll() {
  //   window.scrollTo(0, 100);
  // }
  // clg() {
  //   this.pageHeight = window.innerHeight;
  //   window.scrollTo(0, this.pageHeight);
  // }
  // url = '';
  // secondUrl = '';
  // sub = new Subscription();
  // actualSrc = '';
  // pageHeight = window.innerHeight;

  // addHeight() {
  //   this.scrollService.sectionHeight = window.innerHeight;
  //   console.log(this.scrollService.sectionHeight);
  // }
  // // assignSrc(value: string) {
  //   this.scrollService.src.next(value);
  //   console.log(this.scrollService.src);
  // }
  // mainPage: boolean = true;
  // changePageHeight() {
  //   const height = window.innerHeight;
  //   this.scrollService.pageHeight.next(height);
  // }
  ngOnInit(): void {
    window.addEventListener('click', () => {
      const pageHeight = window.innerHeight;
      this.scrollService.sectionHeight = pageHeight;
    });
  }
}
//   this.sub = this.scrollService.src.subscribe({
//     next: (value) => {
//       this.url = value;
//     },
//   });

//   this.scrollService.pageHeight.subscribe({
//     next: (value) => {
//       this.pageHeight = value;
//       console.log(value);
//     },
//   });
// console.log(this.router.url);
// this.router.events
//   .pipe(filter((event) => event instanceof NavigationEnd))
//   .subscribe((event) => {
//     this.secondUrl = event;
//     console.log(this.url);
//   });
// this.route.url.subscribe(([url]) => {
//   const { path } = url;
//   console.log(path); // e.g. /products
// });
// this.router.events
//   .pipe(filter((event: any) => event instanceof NavigationEnd))
//   .subscribe((event: any) => {
//     this.actualSrc = event.url;
//     console.log(this.actualSrc);
//     if (this.actualSrc === '/') {
//       this.mainPage = true;
//       console.log(this.mainPage);
//     } else {
//       this.mainPage = false;
//       console.log(this.mainPage);
//     }
//   });
// ngOnDestroy(): void {
//   //   this.sub.unsubscribe();
//   // }
// }
