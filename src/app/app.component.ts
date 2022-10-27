import { Component } from '@angular/core';
import { faker } from '@faker-js/faker';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';

  onInput(event: any) {
    this.enteredText = event.target.value;
  }

  compare(letter: string, enteredTextAtI: string) {
    if (!enteredTextAtI) {
      return 'pending';
    } else if (letter === enteredTextAtI) {
      return 'correct';
    } else {
      return 'incorrect';
    }
  }
}
