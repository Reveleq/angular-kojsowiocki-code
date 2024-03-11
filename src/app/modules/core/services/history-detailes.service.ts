import { Injectable } from '@angular/core';
import { Timeline } from '../models/docs.model';
import { timeline } from 'src/assets/docs/docs';

@Injectable({
  providedIn: 'root',
})
export class HistoryDetailesService {
  constructor() {}
  src: string = '';
  text: string = '';
  timeline: Timeline | undefined;
  clickLink(id: number) {
    this.timeline = timeline[id];
    this.src = this.timeline.src;
    this.text = this.timeline.text;
  }
}
