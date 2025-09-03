import { Component, ChangeDetectionStrategy } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
    selector: 'eva-example-debugging',
    templateUrl: './example-debugging.component.html',
    styleUrls: ['./example-debugging.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgFor]
})
export default class ExampleDebuggingComponent {

  labels: string[] = [];

  constructor() {
    for (let i = 1; i < 10; i++) {
      this.labels.push(`${i}`);
    }
  }
}
