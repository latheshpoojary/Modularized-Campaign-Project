import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule,FormGroup,FormBuilder,Validators, FormsModule } from '@angular/forms';
import {ApiService} from '../../../shared/service/api.service';
@Component({
  selector: 'app-campaign-location',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule,FormsModule],
  templateUrl: './campaign-location.component.html',
  styleUrls: ['./campaign-location.component.scss']
})
export class CampaignLocationComponent implements OnInit{
  public location:string='';
  public formData:any;
  public editFlag=false;
  public editIndex='';
  public deleteIndex:number | undefined;
  isEmpty:any;
  toDelete:boolean=false;
  deleteFlag:boolean=false;
  public myLocation:any=[];
  constructor(readonly api:ApiService){}
  ngOnInit(): void { 
    this.formData = this.api.getForm();
    this.api.progressActive.subscribe(res=>
      res.location=true
      );
  }

  backToCampaign(){
    this.api.progressActive.subscribe(res=>{
      res.location = false;   
    })
    this.api.progressDone.subscribe(res=>{
      res.location = false;
      res.camping = false;
    })
  }


  goNext(){
    this.api.progressActive.subscribe(res=>{
      res.audience = true;  
    })

    this.api.progressDone.subscribe(res=>{
      res.location = true; 
    })
  }


  addLocation(){
    if(this.editFlag){
      this.myLocation[this.editIndex]=this.location;
      this.editFlag = false;
    }
    else{
      this.myLocation.unshift(this.location); 
      this.formData.location = this.myLocation;
     
    }  
      this.location ='';
  }

  deleteLocation(index:any){
    this.deleteIndex = index;
    this.toDelete = true;
  }

  deleteConfirmed(){
    if(this.deleteIndex!==undefined){  
      this.formData.location.splice(this.deleteIndex,1); 
    }
    this.toDelete = false;
  }

  onEdit(search:HTMLInputElement,index:any){
    search.value = this.myLocation[index];
    this.editFlag=true;
    this.editIndex=index;
  }
}
