import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ExCurrency';
  // tslint:disable-next-line:variable-name
  year_of_create = 2021;
  author =  'Patryk Najda';
  value = 0;
  currency = 'PLN';

  fb = () => alert('Redirection to Facebook');

  ig = () => alert('Redirection to Instagram');

  tw = () => alert('Redirection to Twitter');

  in = () => alert('Redirection to Linkedin');

  outcomeDisp(event) {
    this.currency = event;
  }

}
