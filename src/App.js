import React, { useState} from 'react';
import axios from 'axios';
import './App.css';

function App(){
    const [advice,setAdvice]=useState("This is your Day");
    const fetchAdvice=()=>{
        axios.get("https://api.adviceslip.com/advice")
        .then((response)=>{
          const adv=response.data.slip.advice;
          setAdvice(adv);
        })
        .catch((error)=>{
         console.log(error);
       })
};
        return(
             <>
              <div id="card">
                <h1>{advice}</h1>
                <button onClick={fetchAdvice}>Advice</button>
              </div>
            </>
        );
        
}

export default App;