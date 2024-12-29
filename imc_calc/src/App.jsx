import { useState } from "react";
import ImcCalc from "./components/imcCalc";
import ImcTable from "./components/imcTable"; // Corrigido para ImcTable
import { data } from "./components/data/data"; // Certifique-se de que o caminho está correto
import "./App.css";

function App() {

  const resetCalc = (e) => {
    e.preventDefault()

    setImc("");
    setInfo("");
    setInfoClass("");
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState(""); // Adicionando estado para info
  const [infoClass, setInfoClass] = useState(""); // Adicionando estado para infoClass

  const calcImc = (e, height, weight) => {
    e.preventDefault();

    if (!weight || !height) return;

    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");

    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    setImc(imcResult); // Atualiza o estado com o resultado do IMC

    // Verificando a classificação do IMC
    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      }
    });
  };

  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc} /> // Passando o data para o ImcTable
      )}
    </div>
  );
}

export default App;