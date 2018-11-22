import { Component, OnInit } from '@angular/core';

import { TitleService } from '../title.service'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit() {
  }

  setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
  }
}
