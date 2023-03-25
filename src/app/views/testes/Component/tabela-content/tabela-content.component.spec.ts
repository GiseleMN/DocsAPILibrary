import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaContentComponent } from './tabela-content.component';

describe('TabelaContentComponent', () => {
  let component: TabelaContentComponent;
  let fixture: ComponentFixture<TabelaContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TabelaContentComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TabelaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
