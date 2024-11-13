import './App.css';
import { useState } from 'react'
import Navbar from './components/Navbar';
import Textarea from './components/Textarea';
import Alert from './components/Alert';
import Services from './components/Services';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {

  const [alrt,setalrt]= useState(null)
  
  const [btn,btntext]= useState("Dark Mode")

  const[styling,setstyle]= useState({
   
  })

  function showalert(message){
    setalrt(message);
    setTimeout(()=>{
      setalrt(null)
    },1500)
  }
  

  function darkmodeactivation(){
    if(styling.color ==="black"){
      btntext("Light Mode")
      setstyle({
        color: "white",
        backgroundColor: "darkgrey"
      })
      showalert("dark mode activated")
    }
    else{
      btntext("Dark Mode")
      setstyle({
        color: "black",
        backgroundColor: "white"
      })
    }
  }

  function modechange(rendercolor){
    if(rendercolor==="black"){
      setstyle({
        color: "white",
        backgroundColor: rendercolor,
      })
    }

    else{
      setstyle({
        color: "white",
        backgroundColor: rendercolor
      })
    }
  }


  return (
   <>
   <body style={styling}>
   <Router>
      <Navbar btn={btntext} />
      <Alert alertmessage={alrt} />
    <Routes>
      <Route path="/services" element={<Services />} />
      <Route
       path="/"
        element={<Textarea alertmessage={showalert} label="Please enter your text here to analyze" style={styling} />}
      />
    </Routes>
    </Router>
   

      <button id='darkbtn' onClick={darkmodeactivation} >{btn}</button>
      <div id="colorbtn">
        <button id='darkgreen' className='colormode' onClick={()=> modechange('rgb(1, 83, 1)')}> </button>
        <button id='darkred' className='colormode' onClick={()=> modechange('#4F0000')}> </button>
        <button id='darkblack' className='colormode' onClick={()=> modechange('rgb(2, 94, 119)')}> </button>
        <button id='darkblue' className='colormode' onClick={()=> modechange('rgb(1, 1, 82)')}> </button>
      </div>
   </body>
 
   </>
  );
}

export default App;
