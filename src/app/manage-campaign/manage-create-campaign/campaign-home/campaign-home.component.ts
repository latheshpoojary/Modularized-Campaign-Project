import { Component, OnInit, ViewChild ,Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ApiService} from '../../../shared/service/api.service';
import { RouterEvent, RouterModule } from '@angular/router';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepper, MatStepperModule} from '@angular/material/stepper';
import { CampaignBasicInfoComponent } from "../campaign-basic-info/campaign-basic-info.component";
import { CampaignLocationComponent } from "../campaign-location/campaign-location.component";
import { CampaignAudienceComponent } from "../campaign-audience/campaign-audience.component";
import { CampaignSummaryComponent } from "../campaign-summary/campaign-summary.component";
@Component({
    selector: 'app-campaign-home',
    standalone: true,
    templateUrl: './campaign-home.component.html',
    styleUrls: ['./campaign-home.component.scss'],
    imports: [CommonModule, ReactiveFormsModule, RouterModule, MatButtonModule, MatFormFieldModule, MatStepperModule, MatInputModule, CampaignBasicInfoComponent, CampaignLocationComponent, CampaignAudienceComponent, CampaignSummaryComponent]
})
export class CampaignHomeComponent implements OnInit{

  @ViewChild('stepper') stepper!: MatStepper;
  @Input() formSubmitted: any="invalid";
  public activeProgress:any=null;
  public doneProgress:any=null;
  constructor(private api:ApiService){}
 ngOnInit(): void {
   this.api.progressActive.subscribe(res=>{
    this.activeProgress = res;
   })
   this.api.progressDone.subscribe(res=>{
    this.doneProgress = res;
   })
 }

  }


