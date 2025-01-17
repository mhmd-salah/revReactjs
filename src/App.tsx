import TextEditor from "./components/TextEditor/TextEditor";
import { CreditStrategy } from "./payment strategies/creditStrategy";
import { PaymentContext } from "./payment strategies/paymentContext";

const App = () => {
  const creditStrategy = new CreditStrategy();
  const paymentContext = new PaymentContext(creditStrategy);
  paymentContext.pay(12);
  return (
    <div>
      <TextEditor />
    </div>
  );
};

export default App;
