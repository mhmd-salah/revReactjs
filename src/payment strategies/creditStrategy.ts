import { PaymentStrategy } from "./paymentStrategy";

export class CreditStrategy implements PaymentStrategy {
  pay(amount: number): void {
    console.log(`Paid ${amount} using credit card`);
  }
}
