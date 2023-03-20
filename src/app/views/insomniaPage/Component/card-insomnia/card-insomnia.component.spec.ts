import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardInsomniaComponent } from './card-insomnia.component';

describe('CardInsomniaComponent', () => {
  let component: CardInsomniaComponent;
  let fixture: ComponentFixture<CardInsomniaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardInsomniaComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardInsomniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
