import {data} from "./components/data/data";
import { useState } from "react";
import ImcCalc from "./components/imcCalc";
import ImcTable from "./components/imcCalc";
import "./App.css";

function App() {

  const calcImc = (e,height,weight) => {
    e.preventDefault();

    if(!weight || !height) return;

    const weightFloat = +weight.replace(",",".");
    const heightFloat = +height.replace(",",".");

    const imcResult = (weightFloat /(heightFloat * heightFloat)).toFixed(1);

    setImc(imcResult);

  }

  const [imc,setImc] = useState("")
  const [info,setInfo] = useState("")
  const [infoClass,setInfoClass] = useState("")

  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc}/>
      ) : (
        <ImcTable/>
      )}
    </div>
  );
}

export default App;