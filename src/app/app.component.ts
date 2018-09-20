import { Component } from '@angular/core';
import * as $ from 'jquery';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public constructor(private titleService: Title) { }

  ngOnInit() {
    $(document).ready(function() {
      window.addEventListener('offline', function(e) {
        $("#snackbar").removeClass("show");
        $("#snackbar").css("background-color", "var(--danger)");
        $("#snackbar").html("You're offline!");
        $("#snackbar").addClass("perm-show");
      }, false);

      window.addEventListener('online', function(e) {
        $("#snackbar").removeClass("perm-show");
        $("#snackbar").css("background-color", "var(--success)");
        $("#snackbar").html("You're back online!");
        $("#snackbar").addClass("show");
        setTimeout(function(){ $("#snackbar").removeClass("show"); }, 3000);
      }, false);
    });
  }

  public setTitle(newTitle: string) {
    if (newTitle != '') {
      this.titleService.setTitle(newTitle + " | Wen Ting Wang");
    } else {
      this.titleService.setTitle("Wen Ting Wang");
    }
  }
}
