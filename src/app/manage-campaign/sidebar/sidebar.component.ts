import { track } from '@amplitude/analytics-browser';
import { Component, Inject, inject } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(@Inject(track) private track:any) {
    
     
  }

  callAnalytics() {
    console.log(this.track());
  }

}
