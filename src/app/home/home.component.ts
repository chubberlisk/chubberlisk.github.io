import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

import { TitleService } from '../title.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private titleService: TitleService) { }

  ngOnInit() {
  }

  setTitle(newTitle: string): void {
    this.titleService.setTitle(newTitle);
  }

  changeTheme(): void {
    var snackbarMsg = ""
    if ($("#change-theme-btn").hasClass("theme-multiple")) {
      // Yellow theme
      $(".landing, .a-bit-about-me, .education, .experience, .portfolio").css({"background-color": "var(--w-yellow)", "color": "black"});
      $("a").css("color", "var(--primary)");
      $(".click-me a, #links a, #contact-me a").css("color", "black");
      $("#links a, #contact-me a").css("color", "white");
      $("#change-theme-btn").removeClass("theme-multiple");
      $("#change-theme-btn").addClass("theme-yellow");
      $("#change-theme-btn").html("Blue Theme <i class='fas fa-palette'></i>");
      snackbarMsg = "All sections are yellow."
    } else if ($("#change-theme-btn").hasClass("theme-yellow")) {
      // Blue theme
      $(".landing, .a-bit-about-me, .education, .experience, .portfolio").css({"background-color": "#004385", "color": "white"});
      $("a").css("color", "var(--w-yellow)");
      $(".landing h1, .click-me a, #links a, #contact-me a").css("color", "white");
      $("#change-theme-btn").removeClass("theme-yellow");
      $("#change-theme-btn").addClass("theme-blue");
      $("#change-theme-btn").html("Multiple Colours Theme <i class='fas fa-palette'></i>");
      snackbarMsg = "All sections are blue."
    } else {
      // Multiple colours theme
      $(".landing").css("background-color", "var(--w-yellow)");
      $(".a-bit-about-me").css("background-color", "#004385");
      $(".education").css("background-color", "var(--success)");
      $(".portfolio").css("background-color", "var(--purple)");
      $(".experience").css("background-color", "#D64933");
      $(".landing, .a-bit-about-me, .education, .experience, .contact-me").css("color", "white");
      $(".landing h1, a").css("color", "black");
      $(".click-me a, #links a, #contact-me a").css("color", "white");
      $(".landing.click-me a").css("color", "black");
      $("#change-theme-btn").removeClass("theme-blue");
      $("#change-theme-btn").addClass("theme-multiple");
      $("#change-theme-btn").html("Yellow Theme <i class='fas fa-palette'></i>");
      snackbarMsg = "All sections are different colours."
    }
    $("#snackbar").css("background-color", "var(--success)");
    $("#snackbar").html("Theme changed! " + snackbarMsg);
    $("#snackbar").addClass("show");
    setTimeout(function(){ $("#snackbar").removeClass("show"); }, 3000);
  }
}
