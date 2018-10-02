import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitleService {

  constructor(private title: Title) { }

  setTitle(newTitle: string): void {
    if (newTitle != '') {
      this.title.setTitle(newTitle + " | Wen Ting Wang");
    } else {
      this.title.setTitle("Wen Ting Wang");
    }
  }
}
