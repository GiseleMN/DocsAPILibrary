import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwaggerSeasonsComponent } from './swagger-seasons.component';

describe('SwaggerSeasonsComponent', () => {
  let component: SwaggerSeasonsComponent;
  let fixture: ComponentFixture<SwaggerSeasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SwaggerSeasonsComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwaggerSeasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
