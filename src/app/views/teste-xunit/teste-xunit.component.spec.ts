import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TesteXUnitComponent } from './teste-xunit.component';

describe('TesteXUnitComponent', () => {
  let component: TesteXUnitComponent;
  let fixture: ComponentFixture<TesteXUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TesteXUnitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TesteXUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
