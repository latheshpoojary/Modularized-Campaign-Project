import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormsModule } from '@angular/forms';
import { ApiService } from '../../../shared/service/api.service';
import { MatButtonModule } from '@angular/material/button';
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
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.formData = this.api.getForm(); //get Form
    this.formData.id =  this.formData.id = this.api.campaignList.length + 1; //create id
    this.formData.start_date = new Date(); //get Date
  }

  // back button pressed
  goBack() {
    this.formBack.emit();
  }

  // Add the form into Campaign List
  addCampaign() {
    console.log(this.formData);
    this.api.setCampaignData(this.formData); //push form to the campaign List

  }

}
