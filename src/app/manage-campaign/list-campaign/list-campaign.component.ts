import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../shared/service/api.service';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SHARED } from '../../shared/index';
import { MatSort, Sort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';



@Component({
  selector: 'app-list-campaign',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, SHARED, MatTableModule, MatSortModule, MatButtonModule, MatFormFieldModule, MatSelectModule, MatInputModule, MatIconModule],
  templateUrl: './list-campaign.component.html',
  styleUrls: ['./list-campaign.component.scss']
})
export class ListCampaignComponent implements OnInit, AfterViewInit {
  public campaignList = [{}];
  public formData: any;
  public dataSource: any;
  displayedColumns = ['Program_ID', 'name', 'status', 'CTR', 'start_date'];  //Table Header  
  @ViewChild(MatSort) sort !: MatSort;
  constructor(private api: ApiService) { }

  ngOnInit(): void {
    // getting Campaign Data from service
    this.api.getCampaign().subscribe(res => {
      this.campaignList = res;
      console.log("Observer response -> ", this.campaignList);
    });
    // Storing Campaign Data 
    this.dataSource = new MatTableDataSource(this.campaignList);
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  // clear the Form Data
  clearForm() {
    this.api.setFormData({
      name: '',
      objective: '',
      category: 'Option1',
      offer_type: 'Option1',
      status: 'Draft',
      location: [],
      comment: ''

    })
  }
}

