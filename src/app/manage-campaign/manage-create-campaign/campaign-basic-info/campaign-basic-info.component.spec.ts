import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignBasicInfoComponent } from './campaign-basic-info.component';

describe('CampaignBasicInfoComponent', () => {
  let component: CampaignBasicInfoComponent;
  let fixture: ComponentFixture<CampaignBasicInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CampaignBasicInfoComponent]
    });
    fixture = TestBed.createComponent(CampaignBasicInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
