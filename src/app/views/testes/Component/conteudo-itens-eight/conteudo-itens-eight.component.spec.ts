import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConteudoItensEightComponent } from './conteudo-itens-eight.component';

describe('ConteudoItensEightComponent', () => {
  let component: ConteudoItensEightComponent;
  let fixture: ComponentFixture<ConteudoItensEightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConteudoItensEightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConteudoItensEightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
