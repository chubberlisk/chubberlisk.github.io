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

  ngOnInit(private swUpdate: SwUpdate) {
    if (this.swUpdate.isEnabled) {
      this.swUpdate.available.subscribe(() => {
        if(confirm("New version is available. Load New Version?")) {
          window.location.reload();
        }
      });
    }
    $(document).ready(function() {
      if (!navigator.onLine) {
        showOffline();
      }

      window.addEventListener('offline', function(e) {
        showOffline();
      }, false);

      window.addEventListener('online', function(e) {
        showOnline();
      }, false);

      function showOffline() {
        $("#snackbar").removeClass("show");
        $("#snackbar").css("background-color", "var(--danger)");
        $("#snackbar").html("You're offline, but it's okay! ;)");
        $("#snackbar").addClass("perm-show");
      }

      function showOnline() {
        $("#snackbar").removeClass("perm-show");
        $("#snackbar").css("background-color", "var(--success)");
        $("#snackbar").html("You're back online!");
        $("#snackbar").addClass("show");
        setTimeout(function(){ $("#snackbar").removeClass("show"); }, 3000);
      }
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
