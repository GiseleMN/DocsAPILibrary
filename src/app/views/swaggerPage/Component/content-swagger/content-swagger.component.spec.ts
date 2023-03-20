import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSwaggerComponent } from './content-swagger.component';

describe('ContentSwaggerComponent', () => {
  let component: ContentSwaggerComponent;
  let fixture: ComponentFixture<ContentSwaggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentSwaggerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSwaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
