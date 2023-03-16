import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoSeasonComponent } from './projeto-season.component';

describe('ProjetoSeasonComponent', () => {
  let component: ProjetoSeasonComponent;
  let fixture: ComponentFixture<ProjetoSeasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProjetoSeasonComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoSeasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
