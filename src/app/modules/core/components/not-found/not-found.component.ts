import { Component } from '@angular/core';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  constructor(private scrollService: ScrollService) {}
  headerHeight!: number;
  ngOnInit(): void {
    //  this.headerHeight = this.scrollService.sectionHeight
    //  setTimeout(() => {
    //   window.scrollTo(0,this.headerHeight)
    //  }, 300);

    this.scrollService.scrollToSection();
  }
}
