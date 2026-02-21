import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Output from './components/Output';
import { useState } from 'react';


function App() {
  let [input,setInput] = useState("0");
  let [output,setOutput] = useState("0");

  let clickHandler = (value) => {

    switch(value){
      case 'C':
        setInput("0");
        setOutput("0");
        break;

      case 'Back':
        if(input.length > 1){
          setInput(input.slice(0,-1));
        }else{
          setInput("0");
        }
        break;

      case '=':
        try{
          setOutput(eval(input));
          setInput("0");
        }catch{
          setOutput("Error");
        }
        break;

      default:
          if (input === "0" && (value === "0" || value === "00")) {
    return;
  }
        input === "0"
          ? setInput(value)
          : setInput(input + value);
    }
  }
  return (
    <div className="container">
      <div className="calculator_frame">
      <Output output={output} />
      <Input input={input} />
      <Button clickHandler={clickHandler}/> 
      </div> 
    </div>
  );
}
export default App;
