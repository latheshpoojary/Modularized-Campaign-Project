import { Component,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from '../../shared/service/api.service';
import {FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import {SHARED} from '../../shared/index';
 

@Component({
  selector: 'app-list-campaign',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,SHARED],
  templateUrl: './list-campaign.component.html',
  styleUrls: ['./list-campaign.component.scss']
})
export class ListCampaignComponent implements OnInit{
  
    public current = true;
    public sortString!:string;
    public sortOrder = 'desc';
    public campaignList=[{}];
    public formData:any;
    constructor(private api:ApiService){}
   
  ngOnInit(): void {
    this.campaignList =this.api.getUser();
    this.api.progressActive.subscribe(res=>{
      res.camaping=false,
      res.location=false,
      res.audience=false
    })
    this.api.progressDone.subscribe(res=>{
      res.camaping=false,
      res.location=false,
      res.audience=false
    })
   
  }
    sortOnDirection(){
      if(this.sortOrder=='asc'){
        this.sortOrder= 'desc';
      }
      else{
        this.sortOrder='asc';
      }
    }
   clearForm(){
    // this.formData = this.api.getForm();
    this.api.setFormData({
      name:'',
      objective:'',
      category:'Option1',
      offer_type:'Option1',
      status:'Draft',
      location:[],
      comment:''
  
    })
   }
  }

