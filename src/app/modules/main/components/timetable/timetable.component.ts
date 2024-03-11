import { Component } from '@angular/core';
import { ScrollService } from 'src/app/modules/core/services/scroll.service';
import { timetable } from 'src/assets/docs/docs';
@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss'],
})
export class TimetableComponent {
  timetable = timetable;
  constructor(private scrollService: ScrollService) {}
  headerHeight!: number;
  ngOnInit(): void {
    setTimeout(() => {
      this.scrollService.scrollToSection();
    }, 200);
  }
}
