import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { ManageCreateCampaignRoutingModule } from './manage-create-campaign-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ManageCreateCampaignRoutingModule,
    ReactiveFormsModule,
    RouterModule
  ]
})
export class ManageCreateCampaignModule { }
