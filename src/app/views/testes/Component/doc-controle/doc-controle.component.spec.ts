import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocControleComponent } from './doc-controle.component';

describe('DocControleComponent', () => {
  let component: DocControleComponent;
  let fixture: ComponentFixture<DocControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocControleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DocControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
