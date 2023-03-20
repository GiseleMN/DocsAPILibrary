import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardSwaggerComponent } from './card-swagger.component';

describe('CardSwaggerComponent', () => {
  let component: CardSwaggerComponent;
  let fixture: ComponentFixture<CardSwaggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardSwaggerComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSwaggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
