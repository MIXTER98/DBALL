import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BodyDrgonBallCard } from './body-drgon-ball-card';

describe('BodyDrgonBallCard', () => {
  let component: BodyDrgonBallCard;
  let fixture: ComponentFixture<BodyDrgonBallCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyDrgonBallCard],
    }).compileComponents();

    fixture = TestBed.createComponent(BodyDrgonBallCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
