import { Component } from '@angular/core';
import { BodyDrgonBallCard } from './body-drgon-ball-card/body-drgon-ball-card';


@Component({
  imports: [BodyDrgonBallCard],
  standalone:true,
  selector: 'app-body-dragon-ball',
  styleUrl: './body-dragon-ball.css',
  templateUrl: './body-dragon-ball.html',
})
export class BodyDragonBall {}
