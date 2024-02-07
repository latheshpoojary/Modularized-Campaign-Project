import { Injectable } from '@angular/core';
import * as CampaignData from "../data/data.json";
import {BehaviorSubject, from, of} from 'rxjs';
import { campaign } from './campaign.model';
 
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public editId=null;
  // default form Value
  formData:any;
  //To store edit form Value
  editForm:any[]=[];

  //deleted id
  deleteId:number[] =[];

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
      this.editId=null;
    }
    else{
      console.log(data,"Data Parsed by summary");
      
      this.campaignList.push(data);
    }
    console.log("Campaign List",this.campaignList);
    
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

  deleteCampaign(id:number){
    this.getCampaign().subscribe(res=>{
      
      const deleteIndex = res.indexOf(res.filter((res:any)=>res.id === id)[0]); //get the index of campaign from the list 
      this.campaignList.splice(deleteIndex,1);//delete Campaign
    })
  }
}
