import React, { useId } from "react";

function Input({
  //from user what you are going to take will be taken here.
  //Means you can declare the variables here which you are going to use while you are taking the input from the user.
  label, //Lable is taken to understand that you are taking from or to
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [], //This empty array is given because if user does not given any input so our app will be crash
  selectCurrency = "usd", //it is given usd because if we do nott selected any currency then usd will be always selected.
  amountDisabled = false,
  className = "",
}) {
  // const amountInputId = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label
          // htmlFor={amountInputId}
          className="text-black/40 mb-2 inline-block"
        >
          {label}
        </label>
        <input
          // id={amountInputId}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          } //It has given as type number beacause it can be a input as a string so it will give us a problem
          //Our application may be crash if user does not passed any value so we do this which checks only if it is available  then only use onAmountChange
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer 
        outline-none"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)} //We does not have any need of converting it to Number becaue currencies are already a string
        >
          {
            //remember the loops in react
            currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency.toUpperCase()}
              </option>//Here we have used map() for mapping or looping the currencies
            ))
          }
        </select>
      </div>
    </div>
  );
}

export default Input;
