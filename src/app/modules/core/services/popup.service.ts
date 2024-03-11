import { Injectable } from '@angular/core';
import { Achievement } from '../models/docs.model';
import { achievements } from 'src/assets/docs/docs';
@Injectable({
  providedIn: 'root',
})
export class PopupService {
  constructor() {}
  src:string = '';
  popup: Achievement | undefined;
  openModal(id: number) {
    this.popup = achievements[id - 1];
    this.src = this.popup.src
  }
}
