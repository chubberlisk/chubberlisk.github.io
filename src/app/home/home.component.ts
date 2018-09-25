import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { AppComponent } from '../app.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private app: AppComponent) { }

  ngOnInit() {
  }

  setTitle(newTitle: string): void {
    this.app.setTitle(newTitle);
  }

  changeTheme(): void {
    if ($("#change-theme-btn").hasClass("theme-multiple")) {
      $(".landing, .a-bit-about-me, .education, .experience").css({"background-color": "var(--w-yellow)", "color": "black"});
      $(".contact-me").css("background-color", "var(--info)");
      $("a").css("color", "var(--primary)");
      $(".click-me a, #links a, #contact-me a").css("color", "white");
      $("#change-theme-btn").removeClass("theme-multiple");
      $("#change-theme-btn").addClass("theme-single");
    } else {
      $(".a-bit-about-me").css("background-color", "#004385");
      $(".education").css("background-color", "var(--success)");
      $(".experience").css("background-color", "#D64933");
      $(".contact-me").css("background-color", "var(--info)");
      $(".landing, .a-bit-about-me, .education, .experience, .contact-me").css("color", "var(--white)");
      $("a").css("color", "black");
      $(".click-me a, #links a, #contact-me a").css("color", "white");
      $("#change-theme-btn").removeClass("theme-single");
      $("#change-theme-btn").addClass("theme-multiple");
    }
    $("#snackbar").css("background-color", "var(--success)");
    $("#snackbar").html("Theme changed!");
    $("#snackbar").addClass("show");
    setTimeout(function(){ $("#snackbar").removeClass("show"); }, 3000);
  }
}
