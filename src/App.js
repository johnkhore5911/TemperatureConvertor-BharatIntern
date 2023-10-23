import { useEffect, useState } from "react";
import "./App.css";
import imge from './backgroundImg.jpg'

function App() {
  
  const [mod,setMod] = useState("");
  const [input, setInput] = useState(0);


  const [degree,setDegree] = useState(0);
  const [fahrenheit,setFahrenheit] = useState(0);
  const [kelvin,setKelvin] = useState(0);
  const [rankin,setRankin] = useState(0);
  // const num = input;

  const inputChange=(event)=>{
    console.log(event.target.value);
    setInput(event.target.value)

  }
  
  const radioHandler=(event)=>{
    setMod(event.target.value);
    console.log(mod);
    
  }

  useEffect(() => {
    if (mod === "C") {
      setDegree(parseFloat(input).toFixed(2));
      setFahrenheit(parseFloat(input * (9 / 5) + 32).toFixed(2));
      setKelvin(parseFloat(parseFloat(input) + 273.15).toFixed(2));
      setRankin(parseFloat((parseFloat(input) + 273.15) * 1.8).toFixed(2));
    }
    else if(mod ==="F") 
    {
      setDegree(parseFloat(parseFloat(input-32).toFixed(2)*5/9).toFixed(2));
      setFahrenheit(parseFloat(input).toFixed(2));
      setKelvin(parseFloat((parseFloat(input-32).toFixed(2)*5/9)+273.15).toFixed(2));
      setRankin(parseFloat(parseFloat(input)+ 459.67).toFixed(2));
    }
    else if(mod ==="K") 
    {
      // R = K × 9/5
      setDegree(parseFloat(parseFloat(input-273.15).toFixed(2)).toFixed(2));
      setFahrenheit(parseFloat(((parseFloat(input-273.15).toFixed(2))*9/5)+32).toFixed(2));
      setKelvin(parseFloat(input).toFixed(2));
      setRankin(parseFloat(parseFloat(input).toFixed(2)*(9/5)).toFixed(2));
    }
    else if(mod ==="R") 
    {
      // 1°R − 459.67 = -458.7°F
      setDegree(parseFloat(((parseFloat(input).toFixed(2))-491.67)*(5/9)).toFixed(2));
      setFahrenheit(parseFloat((parseFloat(input).toFixed(2))-459.67).toFixed(2));
      setKelvin(parseFloat((parseFloat(input).toFixed(2))*5/9).toFixed(2));
      setRankin(parseFloat(input).toFixed(2));
    }
  }, [mod, input]);

  
  

  return (
    <div className="wrapper">
      <img src={imge} className="img" ></img>
      <div className="wrapperInside">
        <div className="content">
          <div className="leftdata">
            <div className="upperdiv">
              <div className="temConv">Temperature Unit Converter</div>
              </div>
            <div className="lowerdiv">
              <div className="inputtem">Input Temperature: <input type="number" onChange={inputChange}  className="inputNum"></input></div>
              
              <div className="radio2">

              <div className="check">
                <input type="radio" name="sym" id="symbols" onChange={radioHandler} value="C"></input>
                <label htmlFor="symbols" >°C</label>
              </div>

              <div className="check">
                <input type="radio" name="sym" id="symbols" onChange={radioHandler} value="F"></input>
                <label htmlFor="symbols">°F</label>
              </div>

              <div className="check">
                <input type="radio" name="sym" id="symbols" onChange={radioHandler} value="K"></input>
                <label htmlFor="symbols">K</label>
              </div>

              <div className="check">
                <input type="radio" name="sym" id="symbols" onChange={radioHandler} value="R"></input>
                <label htmlFor="symbols">°R</label>
              </div>
              </div>
              
              
          </div>
          

          </div>
          <div className="rightdata">
              <div className="temConv">Conversions</div>
              <div className="data">
                <div className="units">
                  <div>Unit</div>
                  <hr/>
                  <div className="line"></div>
                  {/* <br/> */}
                  <div>
                    <div>Celsius °C</div>
                    <div>Fahrenheit °F</div>
                    <div>Kelvin K</div>
                    <div>Rankin °R</div>
                  </div>
                </div>

                <div className="values">
                  <div>Value</div>
                  <hr/>
                  <div>
                    <div>{degree} °C</div>
                    <div>{fahrenheit}°F</div>
                    <div>{kelvin} K</div>
                    <div>{rankin} °R</div>
                  </div>
                </div>

              </div>
          </div>
          

        </div>
      </div>
    </div>
  );
}

export default App;
