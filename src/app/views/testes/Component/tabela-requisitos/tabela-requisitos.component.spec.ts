import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaRequisitosComponent } from './tabela-requisitos.component';

describe('TabelaRequisitosComponent', () => {
  let component: TabelaRequisitosComponent;
  let fixture: ComponentFixture<TabelaRequisitosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabelaRequisitosComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaRequisitosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
