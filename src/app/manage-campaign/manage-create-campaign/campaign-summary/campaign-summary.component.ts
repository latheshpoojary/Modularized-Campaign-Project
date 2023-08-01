import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule,FormGroup,FormBuilder,Validators, FormsModule } from '@angular/forms';
import {ApiService} from '../../../shared/service/api.service';
@Component({
  selector: 'app-campaign-summary',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './campaign-summary.component.html',
  styleUrls: ['./campaign-summary.component.scss']
})
export class CampaignSummaryComponent implements OnInit{
  public formData :any;
constructor(private api:ApiService){}

ngOnInit(): void {
  this.formData= this.api.getForm();
}
 
goBack(){
  this.api.progressDone.subscribe(res=>{
    res.audience = false;
  })
}

addCampaign(){
  this.formData.id=this.api.campaignList.length+1;
  this.formData.start_date = new Date();
  this.api.campaignList.push(this.formData);
  console.log(this.api.campaignList);
  
}

}
