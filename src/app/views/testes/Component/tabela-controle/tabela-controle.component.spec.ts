import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaControleComponent } from './tabela-controle.component';

describe('TabelaControleComponent', () => {
  let component: TabelaControleComponent;
  let fixture: ComponentFixture<TabelaControleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TabelaControleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaControleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
