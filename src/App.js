import './style.css'
import { useState } from 'react';
import DigitButton from './components/DigitButton';
import OperationButton from './components/OperationButton';

function App() {

  const [prevOperand,setPrevOperand] = useState(0)
  const [currOperand,setcurrOperand] = useState(0)
  const [currOperation,setoperation] = useState('')
  const [equalsto, setequalsto] = useState(false)

  function equals(){
    if(currOperation){

      let ans = evaluate(currOperation,currOperand);
      setPrevOperand(0);
      setoperation('')
      setcurrOperand(ans+"")
      setequalsto(true)
    }

  }

  function cllickdAC(){
    setPrevOperand(0);
    setcurrOperand(0);
    setoperation('');
  }

  function digitHandle(digit) {
    
    let current = currOperand+''
    if (current.includes('.') && digit === '.'){
      console.log(currOperand)
      return
    }

    if(currOperand === 0 && digit === 0){
      return
    }
    
    if(equalsto){
      setcurrOperand(digit + "")
      setequalsto(false)
    }
    
    else{

      setcurrOperand(currOperand + digit + "")
    }
  }

  function evaluate(operation,currentOperand){
    let ans;
    if (operation === '/'){
      ans = prevOperand / Number(currentOperand)
    }
    if (operation === 'X'){
      ans = prevOperand * Number(currentOperand)
    }
    if (operation === '+'){
      ans = Number(prevOperand )+ Number(currentOperand )
    }
    if (operation === '-'){
      ans = prevOperand - Number(currentOperand)
    }

    return ans;
  }

  function operationHandle(operation) {
    
      if(operation === "/") {
         
        if (currOperand && currOperation){
          let ans = evaluate(currOperation,currOperand);
          setPrevOperand(ans);
          setoperation(operation)
          setcurrOperand(0)
        }
        
        prevOperand && setoperation("/")

        if(!prevOperand && currOperand){
          setPrevOperand(currOperand); 
          setoperation('/') 
          setcurrOperand(0)
        } 
      }

      if(operation === "X") {
         
        if (currOperand && currOperation){
          let ans = evaluate(currOperation, currOperand);
          setPrevOperand(ans);
          setoperation(operation)
          setcurrOperand(0)
        }
        
        prevOperand && setoperation("X")

        if(!prevOperand && currOperand){
          setPrevOperand(currOperand); 
          setoperation('X') 
          setcurrOperand(0)
        } 
      }


      if(operation === "+") {
         
        if (currOperand && currOperation){
          let ans = evaluate(currOperation, currOperand);
          setPrevOperand(ans);
          setoperation(operation)
          setcurrOperand(0)
        }
        
        prevOperand && setoperation("+")

        if(!prevOperand && currOperand){
          setPrevOperand(currOperand); 
          setoperation('+') 
          setcurrOperand(0)
        } 
      }


      if(operation === "-") {
         
        if (currOperand && currOperation){
          let ans = evaluate(currOperation, currOperand);
          setPrevOperand(ans);
          setoperation(operation)
          setcurrOperand(0)
        }
        
        prevOperand && setoperation("-")

        if(!prevOperand && currOperand){
          setPrevOperand(currOperand); 
          setoperation('-') 
          setcurrOperand(0)
        } 
      }
 
  }


  function del(){
    let deleted = currOperand+''
    if (deleted.length === 1) {
      setcurrOperand(0)
      return
    }

    deleted = deleted.slice(0,deleted.length-1)
    setcurrOperand(deleted)
  }

  function percent(){
    !prevOperand && currOperand && setcurrOperand(currOperand/100)
    if(currOperation && currOperand) {
      if(currOperation === 'X'){
        let ans = evaluate(currOperation,currOperand)
        setcurrOperand(ans/100)
      }
      else{
        let percentage = prevOperand*currOperand/100
        let ans = evaluate(currOperation,percentage)
        setcurrOperand(ans)
        setPrevOperand(0)
        setoperation('')
      }
    }
    
  }

  return (
    
    <div className="calculator-grid">
      <div className='output'>
        <div className='prev-operand'>{prevOperand} {currOperation}</div>
        <div className='curr-operand'>{currOperand}</div>
      </div>
      <button className='ac' onClick={() => cllickdAC()}>AC</button>
      <button className='delete' onClick={() => percent()}>%</button>
      <button className='delete' onClick={() => del()}>DEL</button>
      <OperationButton operation="/" click={() => operationHandle("/")}/>
      <DigitButton digit="1" click={() => digitHandle(1)}/>
      <DigitButton digit="2" click={() => digitHandle(2)}/>
      <DigitButton digit="3" click={() => digitHandle(3)}/>
      <OperationButton operation="X" click={() => operationHandle("X")}/>
      <DigitButton digit="4" click={() => digitHandle(4)}/>
      <DigitButton digit="5" click={() => digitHandle(5)}/>
      <DigitButton digit="6" click={() => digitHandle(6)}/>
      <OperationButton operation="+" click={() => operationHandle("+")}/>
      <DigitButton digit="7" click={() => digitHandle(7)}/>
      <DigitButton digit="8" click={() => digitHandle(8)}/>
      <DigitButton digit="9" click={() => digitHandle(9)}/>
      <OperationButton operation="-" click={() => operationHandle("-")}/>
      <DigitButton digit="." click={() => digitHandle(".")}/>
      <DigitButton digit="0" click={() => digitHandle(0)}/>
      <button className='span-two operation' onClick={() => equals()}>=</button>
    </div>
  );
}

export default App;
