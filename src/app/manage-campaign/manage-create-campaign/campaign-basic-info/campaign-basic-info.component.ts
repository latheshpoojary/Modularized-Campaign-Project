import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule,FormGroup,FormBuilder,Validators } from '@angular/forms';
import {ApiService} from '../../../shared/service/api.service';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-campaign-basic-info',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule,MatInputModule,MatFormFieldModule,MatSelectModule,MatButtonModule,MatIconModule],
  templateUrl: './campaign-basic-info.component.html',
  styleUrls: ['./campaign-basic-info.component.scss']
})
export class CampaignBasicInfoComponent implements OnInit{
  formDetails!: FormGroup;
  formData:any;
  @Output() formSubmitted: EventEmitter<void> = new EventEmitter<void>();
  constructor(private formBuilder:FormBuilder,private api:ApiService){  
  }
ngOnInit(): void {
  this.formData=this.api.getForm();
  // this.formDetails = this.formBuilder.group({
  //   name:[this.formData.name,
  //     Validators.required
  //   ],
  //   objective:[this.formData.objective,Validators.required],
  //   category:[this.formData.category],
  //   request:['Food'],
  //   status:[this.formData.status],
  //   CTR:['2.5%'],
  //   offer_type:[this.formData.offer_type],
  //   comment:[this.formData.comment],
  //   location:this.formBuilder.array([])
  // })
  
  this.formDetails = this.formBuilder.group({
    name:['',Validators.required],
    objective:['',Validators.required],
    category:[''],
    offer_type:[''],
    comment:['']
  })

  this.api.progressActive.subscribe(res=>{
    res.camping = true;
  }) 
}

  get form(){
    return this.formDetails.controls;
  }

  sendActivation(){
    this.formSubmitted.emit();
    this.formData.objective = this.formDetails.value.objective;
    this.formData.name = this.formDetails.value.name;
    this.formData.comment = this.formDetails.value.comment;
    this.formData.offer_type = this.formDetails.value.offer_type;
    this.formData.category = this.formDetails.value.category;
    
    
    
    this.api.progressDone.subscribe(res=>{
        res.camping=true;  
    }) 
  }   
  
  
}
