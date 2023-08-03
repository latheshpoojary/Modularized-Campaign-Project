import { Component,OnInit, ViewChild,AfterViewInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ApiService} from '../../shared/service/api.service';
import {FormsModule} from '@angular/forms';
import { RouterLink } from '@angular/router';
import {SHARED} from '../../shared/index';
import {MatSort, Sort, MatSortModule} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';


 

@Component({
  selector: 'app-list-campaign',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterLink,SHARED,MatTableModule,MatSortModule],
  templateUrl: './list-campaign.component.html',
  styleUrls: ['./list-campaign.component.scss']
})
export class ListCampaignComponent implements OnInit,AfterViewInit{
  
    public current = true;
    public sortString!:string;
    public sortOrder = 'desc';
    public campaignList=[{}];
    public formData:any;
    public dataSource :any;
    displayedColumns = ['Program_ID', 'name', 'status', 'CTR','start_date'];
    
    @ViewChild(MatSort) sort !: MatSort;
    constructor(private api:ApiService){}
   
  ngOnInit(): void {
    this.campaignList =this.api.getUser();
    console.log(this.campaignList);
    
    this.dataSource = new MatTableDataSource(this.campaignList);
    console.log(this.dataSource);
    
    this.api.progressActive.subscribe(res=>{
      res.camaping=false,
      res.location=false,
      res.audience=false
    })
    this.api.progressDone.subscribe(res=>{
      res.camaping=false,
      res.location=false,
      res.audience=false
    })
   
  }
 

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  //   sortOnDirection(){
  //     if(this.sortOrder=='asc'){
  //       this.sortOrder= 'desc';
  //     }
  //     else{
  //       this.sortOrder='asc';
  //     }
  //   }
   clearForm(){
    // this.formData = this.api.getForm();
    this.api.setFormData({
      name:'',
      objective:'',
      category:'Option1',
      offer_type:'Option1',
      status:'Draft',
      location:[],
      comment:''
  
    })
   }
  }

