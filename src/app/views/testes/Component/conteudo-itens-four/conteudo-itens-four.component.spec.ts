import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoItensFourComponent } from './conteudo-itens-four.component';

describe('ConteudoItensFourComponent', () => {
  let component: ConteudoItensFourComponent;
  let fixture: ComponentFixture<ConteudoItensFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoItensFourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoItensFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
