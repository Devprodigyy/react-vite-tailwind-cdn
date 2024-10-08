import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
<main>       
        <h1 className="text-3xl bg-red-300">React-Vite-Tailwind-CDN <i class="ri-arrow-right-s-line"></i></h1>
        <section className="h-screen bg-black "></section>
        <section className="h-screen bg-slate-200 "></section>
        <section className="h-screen bg-black "></section>
</main>
  
  );
}

export default App;



// code to edit CDN 
// const scroll = new LocomotiveScroll({
//   el: document.querySelector("main"),
//   smooth: true,
// });
