import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'campaign',loadChildren:()=>import('./manage-campaign/manage-campaign.module').then(m=>m.ManageCampaignModule)},
  {path:'create',loadChildren:()=>import('././manage-campaign/manage-create-campaign/manage-create-campaign.module').then(m=>m.ManageCreateCampaignModule)}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
