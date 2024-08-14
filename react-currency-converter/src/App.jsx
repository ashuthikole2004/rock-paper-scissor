import { useState } from "react";
import "./App.css";
import { Input } from "./Components";
import useCurrencyHook from "./hooks/useCurrencyHook";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("inr");
  const [to, setTo] = useState("usd");
  const [convertedAmount, setconvertedAmount] = useState(0);
  const currencyInfo = useCurrencyHook(from); //Hook is used here and we require a parameter for it as currency,so we have passed here from(from which we have to convert the currency).
  const option = Object.keys(currencyInfo);//We have access all the keys here to use them appropriately
// console.log(option)
  const swap = () => {
    setFrom(to);
    setTo(from);
    setconvertedAmount(amount);
    setAmount(convertedAmount);
  };

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://media.cntraveler.com/photos/591f1c7d1f187a2af3dedef0/16:9/w_2580,c_limit/barcelona-park-guell-GettyImages-512152500.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          {/* <form
            onSubmit={(e) => {
              e.preventDefault();//we have given this because when the user clicks on the submit button it goes to next page so if we want to prevent this then we can use this method
              convert()
            }}
          > */}
            <div className="w-full mb-1">
              <Input label="From"
              amount={amount}
              currencyOptions={option}
              onCurrencyChange={(currency)=>setFrom(currency)
              }
              onAmountChange={(amount)=>setAmount(amount)}
              selectCurrency={from}
               />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input label="To"
              amount={convertedAmount}
              convertedAmount={convertedAmount}
              currencyOptions={option}
              onCurrencyChange={(currency)=>setTo(currency)
              }
              selectCurrency={to}
              // onAmountChange={(convertedAmount)=>setconvertedAmount(convertedAmount)}
              amountDisabled
               />
            </div>
            <button
              type="submit" onClick={convert}
              className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          {/* </form> */}
        </div>
      </div>
    </div>
  );
}

export default App;
