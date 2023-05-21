// counter.component.ts
import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { scan, startWith } from 'rxjs/operators';
import { Counter } from './counter.interface';

@Component({
  selector: 'app-counter',
  template: `
    <div>
      <button (click)="increment()">Increment</button>
      <span>{{ (counter$ | async)?.value }}</span>
    </div>
  `,
})
export class CounterComponent implements OnInit {
  private increment$ = new Subject<void>();
  counter$: Observable<Counter>;

  constructor() {
    this.counter$ = this.increment$.pipe(
      startWith(null),
      scan((counter: Counter) => ({ value: counter.value + 1 }), { value: 0 })
    );
  }

  ngOnInit() {}

  increment() {
    this.increment$.next();
  }
}
