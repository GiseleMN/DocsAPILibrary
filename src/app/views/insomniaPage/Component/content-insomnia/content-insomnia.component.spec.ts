import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentInsomniaComponent } from './content-insomnia.component';

describe('ContentInsomniaComponent', () => {
  let component: ContentInsomniaComponent;
  let fixture: ComponentFixture<ContentInsomniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentInsomniaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentInsomniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
