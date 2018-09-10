import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-silly',
  templateUrl: './silly.component.html',
  styleUrls: ['./silly.component.css']
})
export class SillyComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  
  refresh(): void {
    location.reload();
  }
}
