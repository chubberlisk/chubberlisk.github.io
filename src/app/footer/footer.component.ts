import { Component, OnInit } from '@angular/core';

import { AppComponent } from '../app.component'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private app: AppComponent) { }

  ngOnInit() {
  }

  setTitle(newTitle: string): void {
    this.app.setTitle(newTitle);
  }
}
