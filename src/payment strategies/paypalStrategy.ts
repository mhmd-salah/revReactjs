import { PaymentStrategy } from "./paymentStrategy";

export class PaypalStrategy implements PaymentStrategy{
  pay(amount:number):void{
    console.log(`Paid ${amount} using paypal`);
  }
}