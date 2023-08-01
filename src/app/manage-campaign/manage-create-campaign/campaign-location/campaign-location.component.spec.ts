import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignLocationComponent } from './campaign-location.component';

describe('CampaignLocationComponent', () => {
  let component: CampaignLocationComponent;
  let fixture: ComponentFixture<CampaignLocationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CampaignLocationComponent]
    });
    fixture = TestBed.createComponent(CampaignLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
