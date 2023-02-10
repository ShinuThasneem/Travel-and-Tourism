import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KasargodComponent } from './kasargod.component';

describe('KasargodComponent', () => {
  let component: KasargodComponent;
  let fixture: ComponentFixture<KasargodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KasargodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KasargodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
