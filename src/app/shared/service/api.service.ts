import { Injectable } from '@angular/core';
import * as CampaignData from "../data/data.json";
import {BehaviorSubject, from, of} from 'rxjs';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public editId :any;
  // default form Value
  formData:any;
  //To store edit form Value
  editForm:any[]=[];

  // get the Json Data(temporary data)
  public campaignList:any[] = JSON.parse(JSON.stringify(CampaignData)).data;

  // setting default Campaign List
  public campaignForm = new BehaviorSubject<any>(this.campaignList);
 

   // receive Campaign form
   getCampaign(){
    return this.campaignForm.asObservable();
  }

  // add form into the table
  setCampaignData(data:any){
    if(this.editId){
      const index = this.campaignList.findIndex((data) => data.id === this.editId);
      this.campaignList[index]= data;
      this.editId='';
    }
    else{
      this.campaignList.push(data);
    }
    this.campaignForm.next(this.campaignList);
  }

  // add values into the forms
  setFormData(data:any): void{
    this.formData = data;   
  }

  // receive form
  getForm(){
    return this.formData;
  }

  //getting data to be edited
  getEditData(data:any,id:any){
    this.editForm = data;
    this.editId = id;   
  }

  //creating  default and editable form data

  createCampaign(){
    
    if(this.editId){
       this.formData = JSON.parse(JSON.stringify(this.editForm)); //for Edition
    }
    else{ 
      this.formData= {
        name:'',
        objective:'',
        comment:'',
        request:'food',
        CTR:"2.5%",
        status:'draft',
        category:'',
        offer_type:'',
        location:[]
      }
    }
  } 
}
