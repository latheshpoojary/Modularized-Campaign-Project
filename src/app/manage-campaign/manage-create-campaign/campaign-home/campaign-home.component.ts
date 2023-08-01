import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder,FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ApiService} from '../../../shared/service/api.service';
import { RouterEvent, RouterModule } from '@angular/router';
@Component({
  selector: 'app-campaign-home',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './campaign-home.component.html',
  styleUrls: ['./campaign-home.component.scss']
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


