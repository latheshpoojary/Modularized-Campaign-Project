import { Component, EventEmitter, Inject, OnInit, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { ApiService } from '../../../shared/service/api.service';
import { MatButtonModule } from '@angular/material/button';
import { track } from '@amplitude/analytics-browser';
@Component({
  selector: 'app-campaign-summary',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, FormsModule, MatButtonModule],
  templateUrl: './campaign-summary.component.html',
  styleUrls: ['./campaign-summary.component.scss']
})
export class CampaignSummaryComponent implements OnInit {
  public formData: any;
  @Output() formBack: EventEmitter<void> = new EventEmitter<void>();
  constructor(@Inject('track2') private track: any, private api: ApiService) {
   }

  ngOnInit(): void {
    this.formData = this.api.getForm(); //get Form

    
    

    if(this.api.deleteId){
      this.formData.id =  this.api.deleteId.pop(); 
    }
    this.formData.id =  this.formData.id = this.api.campaignList.length + 1; //create id
    this.formData.start_date = new Date(); //get Date
  }

  // back button pressed
  goBack() {
    this.formBack.emit();
    this.track("goBackPressed");
  }

  // Add the form into Campaign List
  addCampaign() {
    this.api.setCampaignData(this.formData); //push form to the campaign List

  }

}
