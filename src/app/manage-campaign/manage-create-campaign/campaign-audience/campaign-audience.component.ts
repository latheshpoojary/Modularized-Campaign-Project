import { Component, OnInit } from '@angular/core';
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
export class CampaignAudienceComponent implements OnInit{
   
  public content=false;
  buttonText = "";
  constructor(private api:ApiService){}
  ngOnInit(): void {
    console.log(this.api.getForm());
    
    this.api.progressActive.subscribe(res=>{
      res.audience = true;
    })
  }
  
  
  
  
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
    console.log();
    
  }



  goBack(){
    this.api.progressActive.subscribe(res=>{
      res.audience = false;
      
    })
    this.api.progressDone.subscribe(res=>{
      res.location =false;
    })
    
  }

  goNext(){
    this.api.progressDone.subscribe(res=>{
      res.audience = true;
    })
    
  }
}
