import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentProjetoComponent } from './content-projeto.component';

describe('ContentProjetoComponent', () => {
  let component: ContentProjetoComponent;
  let fixture: ComponentFixture<ContentProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ContentProjetoComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
