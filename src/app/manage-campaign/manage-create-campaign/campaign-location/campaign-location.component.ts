import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule,FormGroup,FormBuilder,Validators, FormsModule, FormArray } from '@angular/forms';
import {ApiService} from '../../../shared/service/api.service';
import {MatButtonModule} from '@angular/material/button';
import {NgIf} from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-campaign-location',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule,MatFormFieldModule, MatInputModule, FormsModule, NgIf, MatButtonModule, ],
  templateUrl: './campaign-location.component.html',
  styleUrls: ['./campaign-location.component.scss']
})
export class CampaignLocationComponent implements OnInit{
  public location:any;
  public formData:any;
  public editFlag=false;
  public editIndex='';
  public deleteIndex:number | undefined;
  isEmpty:any;
  toDelete:boolean=false;
  deleteFlag:boolean=false;
  public myLocation:any=[];
  formDetails: any;

  @Output() formSubmitted: EventEmitter<void> = new EventEmitter<void>();
  @Output() formBack: EventEmitter<void> = new EventEmitter<void>();
  constructor(readonly api:ApiService,private formBuilder:FormBuilder){}
  ngOnInit(): void { 
    this.formData = this.api.getForm();
    this.formDetails = this.formBuilder.group({
      locationDetails:this.formBuilder.array([],Validators.required)
    })
   
  }
  get form(){
    return this.formDetails.get('locationDetails').value;
  }
  backToCampaign(){
    this.formBack.emit();
    this.api.progressActive.subscribe(res=>{
      res.location = false;   
    })
    this.api.progressDone.subscribe(res=>{
      res.location = false;
      res.camping = false;
    })
  }


  goNext(){
    this.formSubmitted.emit();
    this.api.progressActive.subscribe(res=>{
      res.audience = true;  
    })

    this.api.progressDone.subscribe(res=>{
      res.location = true; 
    })
  }

  get locationDetails(){
    return this.formDetails.get('locationDetails') as FormArray;
  }
  addLocation(){
    if(this.editFlag){
      this.myLocation[this.editIndex]=this.location;
      this.editFlag = false;
    }
    else{
      this.locationDetails.push(this.formBuilder.control(this.location));     
      this.formData.location = this.locationDetails.value;
     
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
