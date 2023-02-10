import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrissurComponent } from './trissur.component';

describe('TrissurComponent', () => {
  let component: TrissurComponent;
  let fixture: ComponentFixture<TrissurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrissurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrissurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
