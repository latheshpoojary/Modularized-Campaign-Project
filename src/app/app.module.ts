import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarComponent } from './manage-campaign/sidebar/sidebar.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ApiService } from './shared/service/api.service';
import { init,track } from '@amplitude/analytics-browser';
init("f5cf1714690bc77bbb0994a0bde65c23", {
  defaultTracking:true
});


@NgModule({

  declarations: [
    AppComponent,
    SidebarComponent,
    NavComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    
    

  ],
  providers: [
    ApiService,
    {
      provide: track,
      useValue:track('ButtonClicked')
    }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
