import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ApiService} from '../../../shared/service/api.service';
import { RouterEvent, RouterModule } from '@angular/router';
import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatStepperModule} from '@angular/material/stepper';
import { CampaignBasicInfoComponent } from "../campaign-basic-info/campaign-basic-info.component";
import { CampaignLocationComponent } from "../campaign-location/campaign-location.component";
@Component({
    selector: 'app-campaign-home',
    standalone: true,
    templateUrl: './campaign-home.component.html',
    styleUrls: ['./campaign-home.component.scss'],
    imports: [CommonModule, ReactiveFormsModule, RouterModule, MatButtonModule, MatFormFieldModule, MatStepperModule, MatInputModule, CampaignBasicInfoComponent, CampaignLocationComponent]
})
export class CampaignHomeComponent implements OnInit{
 
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


