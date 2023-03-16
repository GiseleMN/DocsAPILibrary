import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsomniaComponent } from './insomnia.component';

describe('InsomniaComponent', () => {
  let component: InsomniaComponent;
  let fixture: ComponentFixture<InsomniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InsomniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsomniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
