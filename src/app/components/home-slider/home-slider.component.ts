import { interval, Observable, Subscription } from 'rxjs';
import { sliderData } from './../../api/api-slider';
import { Slide } from './../../models/slide';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css'],
})
export class HomeSliderComponent implements OnInit, OnDestroy {
  slider: Slide[] = sliderData;
  currentSlide: Slide = this.slider[0];

  currentIndex: number = 0;

  indexObs: Observable<number> = interval(3000);
  indexObsSub: Subscription | undefined;

  constructor() {}

  ngOnInit(): void {
    this.indexObsSub = this.indexObs.subscribe({
      next: (value: any) => {
        value = this.handleChangeImages(1);
      },
    });
  }

  ngOnDestroy(): void {
    this.indexObsSub?.unsubscribe();
  }

  handleChangeImages(index: number) {
    let newIndex;
    if (index === -1) {
      //previous
      newIndex = this.currentIndex - 1;
      if (newIndex >= 0) {
        this.currentIndex = newIndex;
      } else {
        this.currentIndex = this.slider.length - 1;
      }
    } else {
      //next
      newIndex = this.currentIndex + 1;
      if (newIndex > this.slider.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex = newIndex;
      }
    }
  }
}
