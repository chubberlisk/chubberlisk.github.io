import { Component, OnInit } from '@angular/core';

import { TitleService } from '../title.service'

@Component({
  selector: 'app-silly',
  templateUrl: './silly.component.html',
  styleUrls: ['./silly.component.scss']
})
export class SillyComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.setTitle("Silly");
  }
  
  refresh(): void {
    location.reload();
  }
}
