import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private swUpdate: SwUpdate) { }

  ngOnInit() {
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
}
