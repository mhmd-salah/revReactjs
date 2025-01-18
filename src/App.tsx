import CalcComponent from "./calculatorWithCommandPattern/CalcComponent";
import { CreditStrategy } from "./payment strategies/creditStrategy";
import { PaymentContext } from "./payment strategies/paymentContext";

const App = () => {
  const creditStrategy = new CreditStrategy();
  const paymentContext = new PaymentContext(creditStrategy);
  paymentContext.pay(12);
  return (
    <div>
      {/* <TextEditor /> */}
      <CalcComponent />
    </div>
  );
};

export default App;
