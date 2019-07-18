import { Component, Input, OnDestroy } from '@angular/core';

import { mapTo, scan, startWith, switchMap, takeUntil, takeWhile } from 'rxjs/operators';
import { Subject, timer } from 'rxjs';

@Component({
  selector: 'app-number-tracker',
  template: `
    <h3> {{ currentNumber }}</h3>
  `
})
export class NumberTrackerComponent implements OnDestroy {
  @Input()
  set end(endRange: number) {
    this.counterSub$.next(endRange);
  }

  @Input() countInterval = 20;
  public currentNumber = 0;
  private counterSub$ = new Subject();
  private onDestroy$ = new Subject();

  constructor() {
    this.counterSub$
      .pipe(
        switchMap(endRange => {
          return timer(0, this.countInterval).pipe(
            mapTo(this.positiveOrNegative(endRange, this.currentNumber)),
            startWith(this.currentNumber),
            scan((acc: number, curr: number) => acc + curr),
            takeWhile(this.isApproachingRange(endRange, this.currentNumber))
          );
        }),
        takeUntil(this.onDestroy$)
      )
      .subscribe((val: number) => this.currentNumber = val);
  }

  private positiveOrNegative(endRange, currentNumber) {
    return endRange > currentNumber ? 1 : -1;
  }

  private isApproachingRange(endRange, currentNumber) {
    return endRange > currentNumber
      ? val => val <= endRange
      : val => val >= endRange;
  }

  ngOnDestroy() {
    this.onDestroy$.next();
    this.onDestroy$.complete();
  }
}
