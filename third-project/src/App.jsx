import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card.jsx";

function App() {
  let name = "NO.1";
  const Obj = {
    name: "Ashwini",
    age: "19",
  };
  const Arr = (1, 2, 3);
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">
        Tailwind test
      </h1>
      <Card
        // username="Ashwini Thikole"
        work="Employee at Open Interface"
        info="Tailwind CSS is the only framework that I've seen scale on large
            teams. It's easy to customize, adapts to any design, and the build
            size is tiny."
      />
      <br />
      <Card
        username="Ashwini"
        work="L&T"
        info="Tailwind CSS is the only framework that I've seen scale on large teams. It's easy to customize, adapts to any design, and the build
            size is tiny."
      />
    </>
  );
}

export default App;
