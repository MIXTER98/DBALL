import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PowerLevelCard } from './power-level-card';

describe('PowerLevelCard', () => {
  let component: PowerLevelCard;
  let fixture: ComponentFixture<PowerLevelCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PowerLevelCard],
    }).compileComponents();

    fixture = TestBed.createComponent(PowerLevelCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
