import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule,FormGroup,FormBuilder,Validators } from '@angular/forms';
import {ApiService} from '../../../shared/service/api.service';

@Component({
  selector: 'app-campaign-basic-info',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './campaign-basic-info.component.html',
  styleUrls: ['./campaign-basic-info.component.scss']
})
export class CampaignBasicInfoComponent implements OnInit{
  formDetails!: FormGroup;
  formData:any;
  constructor(private formBuilder:FormBuilder,private api:ApiService){  
  }
ngOnInit(): void {
  this.formData=this.api.getForm();
  this.formDetails = this.formBuilder.group({
    name:[this.formData.name,
      Validators.required
    ],
    objective:[this.formData.objective,Validators.required],
    category:[this.formData.category],
    request:['Food'],
    status:[this.formData.status],
    CTR:['2.5%'],
    offer_type:[this.formData.offer_type],
    comment:[this.formData.comment],
    location:this.formBuilder.array([])
  })
  
  

  this.api.progressActive.subscribe(res=>{
    res.camping = true;
  }) 
}

  get form(){
    return this.formDetails.controls;
  }

  sendActivation(){
    console.log(this.formDetails.controls);
    const formData = this.formDetails.value;
    this.api.setFormData(formData);
    this.api.progressDone.subscribe(res=>{
        res.camping=true;  
    }) 
  }    
}
