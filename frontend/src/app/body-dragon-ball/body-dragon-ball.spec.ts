import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BodyDragonBall } from './body-dragon-ball';

describe('BodyDragonBall', () => {
  let component: BodyDragonBall;
  let fixture: ComponentFixture<BodyDragonBall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyDragonBall],
    }).compileComponents();

    fixture = TestBed.createComponent(BodyDragonBall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
