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
      // Dark theme
      $(".landing, .a-bit-about-me, .education, .experience, .portfolio").css({"background-color": "black", "color": "var(--light)"});
      $(".contact-me").css({"background-color": "var(--gray)", "color": "var(--light)"});
      $("a").css("color", "var(--blue)");
      $(".landing a i, .click-me a, #links a, #contact-me a").css("color", "white");
      $("#change-theme-btn").removeClass("theme-multiple");
      $("#change-theme-btn").addClass("theme-dark");
      $("#change-theme-btn").html("Normal Theme <i class='fas fa-sun'></i>");
      snackbarMsg = "Dark theme is enabled."
    } else {
      // Multiple colours theme
      $(".landing").css("background-color", "var(--w-yellow)");
      $(".a-bit-about-me").css("background-color", "#004385");
      $(".education").css("background-color", "var(--success)");
      $(".portfolio").css("background-color", "var(--purple)");
      $(".experience").css("background-color", "#D64933");
      $(".landing, .a-bit-about-me, .education, .experience, .contact-me").css("color", "white");
      $(".contact-me").css({"background-color": "var(--cyan)", "color": "var(--white)"});
      $(".landing, a").css("color", "black");
      $(".click-me a, #links a, #contact-me a").css("color", "white");
      $(".landing.click-me a, .landing.click-me i").css("color", "black");
      $("#change-theme-btn").removeClass("theme-dark");
      $("#change-theme-btn").addClass("theme-multiple");
      $("#change-theme-btn").html("Dark Theme <i class='fas fa-moon'></i>");
      snackbarMsg = "Normal theme is enabled."
    }
    $("#snackbar").css("background-color", "var(--success)");
    $("#snackbar").html("Theme changed! " + snackbarMsg);
    $("#snackbar").addClass("show");
    setTimeout(function(){ $("#snackbar").removeClass("show"); }, 3000);
  }
}
