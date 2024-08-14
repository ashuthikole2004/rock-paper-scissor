import { useEffect,useState } from "react";

function useCurrencyHook(currency){
    const [data, setData] = useState({});
  useEffect(() => {
    const fetchData=async()=>{
    let url=`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`
    let result=await fetch(url)
    const data1=await result.json()
    setData(data1[currency])
    console.log(data);
    }
    fetchData()
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyHook;
