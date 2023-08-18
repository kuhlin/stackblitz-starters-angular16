import 'zone.js/dist/zone';
import { Component, VERSION, Version } from '@angular/core';
import { CommonModule } from '@angular/common';
import { bootstrapApplication } from '@angular/platform-browser';
import { from, of } from 'rxjs';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello from {{name}}!</h1>
    <a target="_blank" href="https://angular.io/start">
      Learn more about Angular 
    </a>
  `,
})
export class App {
  name = 'Angular: ' + VERSION.major;

  ngOnInit() {
    of(2, 4, 6, 8).subscribe((item) => console.log(item));

    from([20, 15, 10, 5]).subscribe({
      next: (item) => console.log(`resulting item ..` + item),
      error: (err) => console.log(`error ocurred ` + err),
      complete: () => console.log('compete'),
    });
  }
}

bootstrapApplication(App);
