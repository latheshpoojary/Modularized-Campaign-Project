import { Component ,OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from '../../shared/service/api.service';
import {ActivatedRoute,RouterModule} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-view-campaign',
  standalone: true,
  imports: [CommonModule,RouterModule,MatButtonModule],
  templateUrl: './view-campaign.component.html',
  styleUrls: ['./view-campaign.component.scss']
})
export class ViewCampaignComponent implements OnInit{
  
    campaignDetails: any | null = null;
    campaignID: any | null = null;
    id:any;
    toDelete=false;
    showEdit=false;
    constructor(private api: ApiService, private route: ActivatedRoute) {}  
    ngOnInit(): void {
      // getting Id from the URL
      this.campaignID = this.route.snapshot.paramMap.get('id');
      //Getting Campaign using userId
      this.api.getCampaign().subscribe(res=>{
        this.campaignDetails= res.find((item:any)=>item.id.toString()===this.campaignID);
      })
      };
      //getting campaignId for Edit
      onEdit(id:any){
        this.showEdit= true;  //show edit pop up
      }
      //getting CampaignId for delete
      onDelete(id:any){
        this.id = id;
        this.toDelete = true; //show Delete Pop Up
      }
      //delete the Campaign
      deleteConfirmed(){   
        this.api.getCampaign().subscribe(res=>{
          const deleteIndex = res.indexOf(res.filter((res:any)=>res.id === this.id)[0]); //get the index of campaign from the list 
          res.splice(deleteIndex,1); //delete Campaign
        })
      }
}

