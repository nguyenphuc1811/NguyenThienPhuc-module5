import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  result: number;

  constructor() {
  }

  ngOnInit(): void {
  }

  calculation(number1: string, number2: string, operator: string) {
    switch (operator) {
      case '+':
        this.result = parseFloat(number1) + parseFloat(number2);
        break;
      case '-':
        this.result = parseFloat(number1) - parseFloat(number2);
        break;
      case '*':
        this.result = parseFloat(number1) * parseFloat(number2);
        break;
      case '/':
        this.result = parseFloat(number1) / parseFloat(number2);
        break;
    }
  }
}
