import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpcenterGuidesComponent } from './helpcenter-guides.component';

describe('HelpcenterGuidesComponent', () => {
  let component: HelpcenterGuidesComponent;
  let fixture: ComponentFixture<HelpcenterGuidesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HelpcenterGuidesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HelpcenterGuidesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
