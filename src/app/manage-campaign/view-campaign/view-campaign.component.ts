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
  
    userDetails: any | null = null;
    userID: any | null = null;
    index!:number;
    toDelete=false;
    showEdit=false;
    constructor(private api: ApiService, private route: ActivatedRoute) {}
    
    ngOnInit(): void {
      this.userID = this.route.snapshot.paramMap.get('id');
      console.log(this.userID);
      this.userDetails = this.api.getUser().find((item:any)=>item.id.toString()===this.userID);
      };
      onEdit(id:any){
        this.showEdit= true;  
      }
      onDelete(id:any){
        this.index = id-1;
        console.log(this.index);  
        this.toDelete = true;
      }
      deleteConfirmed(){   
        this.api.getUser().splice(this.index,1);
      }
}

