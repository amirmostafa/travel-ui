import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TourDetailOneComponent } from './tour-detail-one.component';

describe('TourDetailOneComponent', () => {
  let component: TourDetailOneComponent;
  let fixture: ComponentFixture<TourDetailOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TourDetailOneComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TourDetailOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
