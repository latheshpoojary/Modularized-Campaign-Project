import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignAudienceComponent } from './campaign-audience.component';

describe('CampaignAudienceComponent', () => {
  let component: CampaignAudienceComponent;
  let fixture: ComponentFixture<CampaignAudienceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CampaignAudienceComponent]
    });
    fixture = TestBed.createComponent(CampaignAudienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
