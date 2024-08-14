import { useState } from 'react'//Hook invocation use to propogate the changes in UI

function App() {

  let [cnt1,setCount1]=useState(0);
  let [cnt2,setCount2]=useState(20);

  const count1=()=>{
    cnt1=cnt1+1;
    if(cnt1>20){
      btn1.disabled='true';
    }
    setCount1(cnt1)
  }
  const count2=()=>{
    cnt2=cnt2-1;
    if(cnt2<0){
      btn2.disabled='true';
    }
    setCount2(cnt2);
  }
  return (
    <>
      <h1>Welcome to React</h1>
      <h1>Let's Create a Counter</h1>
      <button class="btn2" onClick={count1}>Counter1 is:{cnt1}</button> &nbsp;
      <button class="btn2" onClick={count2}>Counter2 is:{cnt2}</button>
    </>
  )
}

export default App
