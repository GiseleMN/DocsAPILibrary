import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoItensFiveComponent } from './conteudo-itens-five.component';

describe('ConteudoItensFiveComponent', () => {
  let component: ConteudoItensFiveComponent;
  let fixture: ComponentFixture<ConteudoItensFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ConteudoItensFiveComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoItensFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
