import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators, FormsModule, FormArray } from '@angular/forms';
import { ApiService } from '../../../shared/service/api.service';
import { MatButtonModule } from '@angular/material/button';
import { NgIf } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-campaign-location',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, FormsModule, NgIf, MatButtonModule,],
  templateUrl: './campaign-location.component.html',
  styleUrls: ['./campaign-location.component.scss']
})
export class CampaignLocationComponent implements OnInit {
  public location: any;
  public formData: any;
  public editFlag = false;
  public editIndex: any;
  public deleteIndex: any;
  isEmpty: any;
  toDelete: boolean = false;
  deleteFlag: boolean = false;
  public myLocation: any = [];
  formDetails: any;

  @Output() formSubmitted: EventEmitter<void> = new EventEmitter<void>(); //send message to parent about submission
  @Output() formBack: EventEmitter<void> = new EventEmitter<void>(); //sending message for previous section
  constructor(private api: ApiService, private formBuilder: FormBuilder) { }
  ngOnInit(): void {
    this.formData = this.api.getForm(); //get the form Data
    // creating formBuilder
    this.formDetails = this.formBuilder.group({
      locationDetails: this.formBuilder.array([], Validators.required)
    })

  }
  // provide this form value to the template
  get form() {
    return this.formDetails.get('locationDetails').value;
  }
  // back button is clicked
  backToCampaign() {
    this.formBack.emit();
  }

  // next button is clicked
  goNext() {
    this.formData.location = this.locationDetails.value;  //storing location value to the form
    this.formSubmitted.emit();
  }

  // getter method
  get locationDetails() {
    return this.formDetails.get('locationDetails') as FormArray;
  }

  // Add or Edit Form
  addLocation() {
    // for Editing
    if (this.editFlag) {
      const locationControl = this.locationDetails.at(this.editIndex);
      locationControl.setValue(this.location);
      this.editFlag = false;
    }
    // For Addition
    else {
      this.locationDetails.push(this.formBuilder.control(this.location));
    }
    //  clear input field data
    this.location = '';
  }

  // show delete pop up
  deleteLocation(index: any) {
    this.deleteIndex = index;
    this.toDelete = true;
  }
  // confirm delete
  deleteConfirmed() {
    // remove location
    if (this.deleteIndex !== undefined) {
      this.locationDetails.removeAt(this.deleteIndex)
    }
    this.toDelete = false;
  }
  // set the input field value for Edit
  onEdit(search: HTMLInputElement, index: any) {
    const locationArray = this.locationDetails;
    const locationControl = locationArray.at(index);
    const locationValue = locationControl?.value as string;
    search.value = locationValue;
    this.editFlag = true;
    this.editIndex = index;
  }
}
