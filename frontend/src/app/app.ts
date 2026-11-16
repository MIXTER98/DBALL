import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeadDragonBall } from './head-dragon-ball/head-dragon-ball';
import { BodyDragonBall } from './body-dragon-ball/body-dragon-ball';
import { BodyDrgonBallCard } from './body-dragon-ball/body-drgon-ball-card/body-drgon-ball-card';

@Component({
  imports: [RouterOutlet, HeadDragonBall, BodyDragonBall],
  standalone: true,
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('frontend');
}
