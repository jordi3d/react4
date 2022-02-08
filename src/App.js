import "./styles.css";
import Garage from "./Garage"
import {useState} from "react";

export default function App() {
let cotxes1 = ["VW Golf GTI", "Toyota iQ"];
let cotxes2 = ["Tesla Model 3", "Ferrari Modena F1", "Nissan 200SX"];
let cotxes = cotxes1;
let usSetmana = "diari";
const [ buttonText, setButtonText] = useState("DIARI");
const [ estilGaratge, setEstilGaratge] = useState("diari");
const [ cotxesActuals,setCotxesActuals] = useState(cotxes1);
const changeText = () => {
  buttonText === "DIARI"
  ? 
    ( setButtonText("FINDE"),
    setEstilGaratge("finde"),
    setCotxesActuals(cotxes2))
  : 
    ( setButtonText("DIARI"),
    setEstilGaratge("diari"),
    setCotxesActuals(cotxes1)) 
}
return (
    <div className="App">
      <div className={estilGaratge}>
      <button onClick={changeText}>{buttonText}</button>
      <Garage cars={cotxesActuals} />
      </div>
    </div>
  );
}
