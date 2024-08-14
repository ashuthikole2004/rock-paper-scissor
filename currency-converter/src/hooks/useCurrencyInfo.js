import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  let [data, setData] = useState({});

  useEffect(() => {
    const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`;
    const fetchData = async () => {
      let result = await fetch(url);
      let data1 = await result.json();
      setData(data1[currency]);
    };
    fetchData();
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;
