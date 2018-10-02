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
      // Yellow theme
      $(".landing, .a-bit-about-me, .education, .experience").css({"background-color": "var(--w-yellow)", "color": "black"});
      $("a").css("color", "var(--primary)");
      $(".click-me a, #links a, #contact-me a").css("color", "white");
      $("#change-theme-btn").removeClass("theme-multiple");
      $("#change-theme-btn").addClass("theme-yellow");
      $("#change-theme-btn").html("Blue Theme <i class='fas fa-palette'></i>");
    } else if ($("#change-theme-btn").hasClass("theme-yellow")) {
      // Blue theme
      $(".landing, .a-bit-about-me, .education, .experience").css({"background-color": "#004385", "color": "white"});
      $("a").css("color", "var(--w-yellow)");
      $(".landing h1, .click-me a, #links a, #contact-me a").css("color", "white");
      $("#change-theme-btn").removeClass("theme-yellow");
      $("#change-theme-btn").addClass("theme-blue");
      $("#change-theme-btn").html("Multiple Colours Theme <i class='fas fa-palette'></i>");
    } else {
      // Multiple colours theme
      $(".landing").css("background-color", "var(--w-yellow)");
      $(".a-bit-about-me").css("background-color", "#004385");
      $(".education").css("background-color", "var(--success)");
      $(".experience").css("background-color", "#D64933");
      $(".landing, .a-bit-about-me, .education, .experience, .contact-me").css("color", "var(--white)");
      $(".landing h1, a").css("color", "black");
      $(".click-me a, #links a, #contact-me a").css("color", "white");
      $("#change-theme-btn").removeClass("theme-blue");
      $("#change-theme-btn").addClass("theme-multiple");
      $("#change-theme-btn").html("Yellow Theme <i class='fas fa-palette'></i>");
    }
    $("#snackbar").css("background-color", "var(--success)");
    $("#snackbar").html("Theme changed!");
    $("#snackbar").addClass("show");
    setTimeout(function(){ $("#snackbar").removeClass("show"); }, 3000);
  }
}
