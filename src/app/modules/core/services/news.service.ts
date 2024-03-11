import { Injectable } from '@angular/core';
import { News, NewsPopup } from '../models/docs.model';
import { news } from 'src/assets/docs/docs';

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor() {}
  src!: string;
  id!: number;
  imgId!: number;
  popup: NewsPopup | undefined;
  openModal(id: number, imgId: number) {
    this.id = id;
    this.imgId = imgId;
    this.popup = news[id - 1].srcDetails[imgId - 1];
    this.src = this.popup.src;
  }
}
