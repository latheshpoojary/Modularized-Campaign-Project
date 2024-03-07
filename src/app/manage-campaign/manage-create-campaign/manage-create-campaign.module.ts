import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageCreateCampaignRoutingModule } from './manage-create-campaign-routing.module';
import { init,track } from '@amplitude/analytics-browser';
init("f5cf1714690bc77bbb0994a0bde65c23", {
  defaultTracking:true
});

export function trackFactory() {
  return track;
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ManageCreateCampaignRoutingModule,
    
  ],
  providers: [
    {
      provide:'track2',
      useFactory:trackFactory
    }
  ]
})
export class ManageCreateCampaignModule { }
