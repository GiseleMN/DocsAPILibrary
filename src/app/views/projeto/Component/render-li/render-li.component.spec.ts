import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RenderLiComponent } from './render-li.component';

describe('RenderLiComponent', () => {
  let component: RenderLiComponent;
  let fixture: ComponentFixture<RenderLiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RenderLiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RenderLiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
