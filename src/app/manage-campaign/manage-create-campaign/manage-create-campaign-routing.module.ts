import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampaignHomeComponent } from './campaign-home/campaign-home.component';
import { CampaignBasicInfoComponent } from './campaign-basic-info/campaign-basic-info.component';
import { CampaignLocationComponent } from './campaign-location/campaign-location.component';
import { CampaignAudienceComponent } from './campaign-audience/campaign-audience.component';
import { CampaignSummaryComponent } from './campaign-summary/campaign-summary.component';

const routes: Routes = [
  {path:'home',component:CampaignHomeComponent,children:[
    {path:'',redirectTo:'basic',pathMatch:"full"},
    {path:'basic',component:CampaignBasicInfoComponent},
    {path:'location',component:CampaignLocationComponent},
    {path:'audience',component:CampaignAudienceComponent},
    {path:'summary',component:CampaignSummaryComponent}
  ]},
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCreateCampaignRoutingModule { }
