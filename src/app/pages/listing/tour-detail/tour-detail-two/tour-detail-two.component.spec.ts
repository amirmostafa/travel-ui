import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailTwoComponent } from './tour-detail-two.component';

describe('TourDetailTwoComponent', () => {
  let component: TourDetailTwoComponent;
  let fixture: ComponentFixture<TourDetailTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourDetailTwoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourDetailTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
