import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalicutComponent } from './calicut.component';

describe('CalicutComponent', () => {
  let component: CalicutComponent;
  let fixture: ComponentFixture<CalicutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalicutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalicutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
