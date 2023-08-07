import { Injectable } from '@angular/core';
import * as CampaignData from "../data/data.json";
import {BehaviorSubject, from, of} from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // default form Value
  formData:any={
    dieses:'food',
    CTR:"2.5%",
    status:'draft',
    category:'Option1',
    offer_type:'Option2'
  };
  //To store edit form Value
  editForm:any[]=[];
  // get the Json Data
  public campaignList:any[] = JSON.parse(JSON.stringify(CampaignData)).data;
  // setting default Campaign List
  public campaignForm = new BehaviorSubject<any>(this.campaignList);
 
  // add form into the table
  setCampaignData(data:any){
    console.log("received ->", data); 
    this.campaignList.push(data);
    this.campaignForm.next(this.campaignList);
    console.log("service list-> ", this.campaignList);
    console.log("service form-> ", this.campaignForm);
  }

  // add values into the forms
  setFormData(data:any): void{
    this.formData = data;   
  }

  // receive form
  getForm(){
    return this.formData;
  }

  // receive Campaign List
  getCampaign(){
    console.log("Sending -> ",this.campaignForm);
    return this.campaignForm.asObservable();
  }

  
}
