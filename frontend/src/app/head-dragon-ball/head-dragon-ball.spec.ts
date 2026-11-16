import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeadDragonBall } from './head-dragon-ball';

describe('HeadDragonBall', () => {
  let component: HeadDragonBall;
  let fixture: ComponentFixture<HeadDragonBall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeadDragonBall],
    }).compileComponents();

    fixture = TestBed.createComponent(HeadDragonBall);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
