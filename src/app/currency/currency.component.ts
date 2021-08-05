import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ExchangeService } from '../exchange.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {

  theForm = new FormGroup({
    initialCurrency: new FormControl(''),
    value: new FormControl(''),
    currency: new FormControl(''),
  });
  value = 0; //initial value
  currency = this.theForm.value.currency;

  constructor(private es:ExchangeService) { }

  clear() {
    this.es.getInitialCurrency(this.theForm.value.initialCurrency, this.theForm.value.currency).subscribe(data => {
      this.theForm.value.initialCurrency = ''; //cleaning initialCurrency
      this.value = 0;
      this.theForm.value.currency = ''; //cleaning currency
    })
  }

  eqReq() {
    this.es.getInitialCurrency(this.theForm.value.initialCurrency, this.theForm.value.currency).subscribe(data => {
      this.value = this.theForm.value.value * Number(Object.values(data));
   });
  }

  ngOnInit(): void {
  }

}
