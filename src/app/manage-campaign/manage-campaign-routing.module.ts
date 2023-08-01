import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListCampaignComponent } from './list-campaign/list-campaign.component';
import { ViewCampaignComponent } from './view-campaign/view-campaign.component';

const routes: Routes = [
 {path:'list-campaign',component:ListCampaignComponent},
 {path:'userDetails/:id',component:ViewCampaignComponent},
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageCampaignRoutingModule { }
