import { useState } from 'react';
import './App.css';


function App() {
const [display , setDisplay]= useState("0");

function handelNum(event){
  const number=event.target.textContent
  if(display==="0"){
    setDisplay(number);
  }
  else{
    setDisplay(display +  number)
  }};
function handeloprator(event){
 const operator=event.target.textContent
setDisplay(display + " " +operator+" ")


};
function handelDecimal(){
  const array= display.split('');
 
 const lastElement=array[array.length-1]
  if(lastElement==="."){
    setDisplay(display)
  }
 else if(array.includes('.')){
  const array1=display.split(/[-,+,*,/]/);
  const lastElement1=array1[array1.length-1]
  if(lastElement1.includes('.')){
    setDisplay(display)
  }else{
    setDisplay(display + '.')
  }
 }

   else{
    setDisplay(display+'.')
  }
 

};
function handelEqual(){
const result=eval(display);
setDisplay(result);
 
    

};

function handelClear(){
  setDisplay('0');
};
  return (
    <div className="App">
      <div id="container">
      <div id="display">{display}</div>

      <button id="clear" onClick={handelClear}>AC</button>
      <button id="divide" onClick={handeloprator}>/</button>
      <button id="multiply" onClick={handeloprator}>*</button>
      <button id="seven" onClick={handelNum}>7</button>
      <button id="eight"onClick={handelNum}>8</button>
      <button id="nine"onClick={handelNum}>9</button>
      <button id="subtract" onClick={handeloprator}>-</button>
      <button id="four"onClick={handelNum}>4</button>
      <button id="five"onClick={handelNum}>5</button>
      <button id="six"onClick={handelNum}>6</button>
      <button id="add" onClick={handeloprator}>+</button>
      <button id="one"onClick={handelNum}>1</button>
      <button id="two" onClick={handelNum}>2</button>
      <button id="three"onClick={handelNum}>3</button>
      <button id="decimal" onClick={handelDecimal}>.</button>
      <button id="zero" onClick={handelNum}>0</button>
      <button id="equals" onClick={handelEqual}>=</button>
    </div>
     
     
      
    </div>
  );
}

export default App;
