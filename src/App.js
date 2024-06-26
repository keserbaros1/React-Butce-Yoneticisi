import React from "react";
import "./App.css";
import Yenikayit from "./components/Yenikayit";
import Giris from "./components/Giris";


function App() {

  return (
    <div>
      <div>
        <Giris/>
      </div>


      <div>
        <Yenikayit IslenenVeriKayit></Yenikayit>
      </div> 
    </div>
  );
  
}
export default App;