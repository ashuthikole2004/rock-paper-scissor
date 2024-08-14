import { useCallback, useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(6);
  const [allowNumbers, setallowNumbers] = useState(false);
  const [allowCharacters, setallowCharacters] = useState(false);
  const [password, setPassword] = useState("");
  let pass = "";
  const passwordGenerator = useCallback(() => {
    
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (allowNumbers) {
      str += "0123456789";
    }
    if (allowCharacters) {
      str += "!@#$%^&*()+-_[]{}~`";
    }
    for (let i = 0; i < length; i++) {
      let ch = Math.floor(Math.random() * str.length);
      pass += str.charAt(ch);
    }
    // password=pass;
    setPassword(pass);
  }, [length, allowNumbers, allowCharacters]);

  useEffect(() => {
    passwordGenerator();
  }, [length, allowNumbers, allowCharacters, passwordGenerator]);

  const copyPass=useRef(null);
   function copy(){
    copyPass.current?.select();
    copyPass.current?.setSelectionRange(0,4);
    window.navigator.clipboard.writeText(password);
  }


  return (
    <>
      <div className="bg-slate-500 rounded-lg w-screen p-0 mb-48 font-serif max-w-md">
        <h1 className="text-center text-2xl p-2 mb-2 overflow-hidden mt-4 m-4 text-wrap">
          Password Generator
        </h1>
        <div className="flex h-20 w-full font-serif">
          <input
            type="text"
            value={password}
            className="bg-white text-black w-full h-12 m-3 rounded-xl mb-20 border-none p-3"
            placeholder="Password"
            readOnly
            ref={copyPass}
          />
          <button onClick={copy} className="bg-blue-700 w-28 h-12 mt-3 mr-2">copy</button>
        </div>
        <div className="flex flex-wrap w-full gap-2">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer mb-4 ml-2"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="font-serif mb-4">length:{length}</label>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={allowNumbers}
              onChange={() => {
                setallowNumbers((prev) => !prev); //cannot place it as direct true then it will give us always true value
              }}
            />
            <label>Numbers</label>
          </div>
          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              checked={allowCharacters}
              onChange={() => {
                setallowCharacters((prev) => !prev);
              }}
            />
            <label>Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
