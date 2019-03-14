import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewChild,
  ElementRef
} from "@angular/core";

@Component({
  selector: "app-game-control",
  templateUrl: "./game-control.component.html",
  styleUrls: ["./game-control.component.css"]
})
export class GameControlComponent implements OnInit {
  @Output() intervalFired = new EventEmitter<number>();
  interval;
  currentTime = 0;

  constructor() {}

  ngOnInit() {}

  @Output() gameStart = new EventEmitter<{
    gameTimer: number;
  }>();

  startGame() {
    this.interval = setInterval(() => {
      this.intervalFired.emit(this.currentTime + 1);
      this.currentTime++;
    }, 1000);
  }

  stopGame() {
    clearInterval(this.interval)
  }
}
