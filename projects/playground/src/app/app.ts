import { Component, signal } from '@angular/core';
import { DiogogcDesignSystemLib } from '../../../diogogc-design-system-lib/src/lib/diogogc-design-system-lib';

@Component({
  selector: 'app-root',
  imports: [DiogogcDesignSystemLib],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('playground');
}
