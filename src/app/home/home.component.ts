import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private titleService: Title) { }

  ngOnInit() {
  }

  public setTitle(newTitle: string) {
    if (newTitle != '') {
      this.titleService.setTitle(newTitle + " | Wen Ting Wang");
    } else {
      this.titleService.setTitle("Wen Ting Wang");
    }
  }
}
