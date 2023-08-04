import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { ReactiveFormsModule,FormGroup,FormBuilder,Validators, FormsModule } from '@angular/forms';
import {ApiService} from '../../../shared/service/api.service';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-campaign-audience',
  standalone: true,
  imports: [CommonModule,RouterModule,ReactiveFormsModule,FormsModule,MatButtonModule,MatMenuModule],
  templateUrl: './campaign-audience.component.html',
  styleUrls: ['./campaign-audience.component.scss']
})
export class CampaignAudienceComponent{
   
  public content=false;
  buttonText = "";
  @Output() formSubmitted: EventEmitter<void> = new EventEmitter<void>();
  @Output() formBack: EventEmitter<void> = new EventEmitter<void>();
  constructor(private api:ApiService){}

  // change the icon sign
  showDetails(btn:any){
    this.buttonText = btn.textContent;
    let withoutIcon = this.buttonText.substring(0,this.buttonText.length-1);
    if(this.content){
      withoutIcon+='▲'; 
    }
    else{
      withoutIcon+='▼';  
    }
    btn.textContent= withoutIcon;
    this.content = !this.content;  
  }

  // back button is clicked
  goBack(){
    this.formBack.emit();
    
  }

  // next button is clicked
  goNext(){
    this.formSubmitted.emit();
    
  }
}
