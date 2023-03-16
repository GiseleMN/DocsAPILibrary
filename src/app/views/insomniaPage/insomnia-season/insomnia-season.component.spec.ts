import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsomniaSeasonComponent } from './insomnia-season.component';

describe('InsomniaSeasonComponent', () => {
  let component: InsomniaSeasonComponent;
  let fixture: ComponentFixture<InsomniaSeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InsomniaSeasonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InsomniaSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
