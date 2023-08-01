import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ManageCampaignRoutingModule } from './manage-campaign-routing.module';
import {SHARED} from '../shared/index';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ManageCampaignRoutingModule,
    FormsModule, 
    SHARED
    
  ],
  providers:[NgModule]
})
export class ManageCampaignModule { }
