import { Component, Inject, inject } from '@angular/core';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(@Inject('track1') private track:any) {
    
    console.log(this.track());
    
  }

  callAnalytics() {
  }

}
