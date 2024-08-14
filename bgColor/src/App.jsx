import { useState } from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("red");
  // let blue=()=>{
  //   color='blue';
  //   setColor(document.body.style.backgroundColor=color);
  // }
  return (
    <div
      className="body fixed flex flex-wrap justify-center bottom-12 inset-x-0"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center shadow-lg bg-white rounded-full m-8 mt-[550px]">
        <button
          onClick={() => setColor("blue")}
          className="btns-1 m-2 font-size:1rem text-center rounded-full bg-blue-600"
        >
          blue
        </button>
        <button onClick={() => setColor("red")} className="btns-2 m-2 font-size:1rem text-center rounded-full bg-red-600">
          red
        </button>
        <button onClick={()=> setColor("green")} className="btns-3 m-2 font-size:1rem text-center rounded-full bg-green-600">
          green
        </button>
        <button onClick={()=> setColor("white")} className="btns-4 m-2 font-size:1rem text-center rounded-full bg-white text-black shadow-[0_1px_80px_-12px_rgba(0,0,0,0.9)]">
          white
        </button>
        <button onClick={()=> setColor("yellow")} className="btns-5 m-2 font-size:1rem text-center rounded-full bg-yellow-400">
          yellow
        </button>
        <button onClick={()=> setColor("black")} className="btns-6 m-2 font-size:1rem text-center rounded-full">
          black
        </button>
        <button onClick={()=> setColor("pink")} className="btns-7 m-2 font-size:1rem text-center rounded-full bg-pink-500">
          pink
        </button>
        <button onClick={()=>setColor("orange")} className="btns-8 m-2 font-size:1rem text-center rounded-full bg-orange-600">
          orange
        </button>
        <button onClick={()=> setColor("lime")} className="btns-9 m-2 font-size:1rem text-center rounded-full bg-lime-500">
          lime
        </button>
        <button onClick={()=> setColor("#64748b")} className="btns-10 m-2 font-size:1rem text-center rounded-full bg-[#64748b]">
          grey
        </button>
      </div>
    </div>
  );
}

export default App;
