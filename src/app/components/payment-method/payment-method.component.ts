import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.css']
})
export class PaymentMethodComponent implements OnInit {

          selected: number = 0;

          constructor () {}

          ngOnInit() {}


          onCardClicked (index: number)  {
                this.selected = index;
          }

}
