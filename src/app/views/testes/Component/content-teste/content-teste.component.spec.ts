import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentTesteComponent } from './content-teste.component';

describe('ContentTesteComponent', () => {
  let component: ContentTesteComponent;
  let fixture: ComponentFixture<ContentTesteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentTesteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
