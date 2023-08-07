import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCampaignRoutingModule } from './manage-campaign-routing.module';
import {SHARED} from '../shared/index';
import {ApiService} from '../../app/shared/service/api.service';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    ManageCampaignRoutingModule, 
    SHARED
    
  ],
  providers:[NgModule]
})
export class ManageCampaignModule { }
