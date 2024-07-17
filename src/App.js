import Navbar from "../src/components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home"
import Projects from "./components/Projects";
import Tech from "./components/Tech";
import Contact_Profile from "./components/Contact&profile";
import { useEffect, useState } from "react";
function App() {

  const [show,setShow] = useState(false);
  useEffect(()=>{
    console.log(window.scrollY)
    if(window.scrollY > 100){
      setShow(true);
    }
    else{
      setShow(false);
    }
  },window.scrollY)
  function to_top(){
    window.scroll({
        top:0,
        behaviour:"smooth"
    })
}
  return (
    <div className="bg ">
      <div className="top">
        <button class="button" onClick={to_top}>
    <svg class="svgIcon" viewBox="0 0 384 512">
      <path
        d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
      ></path>
    </svg>
        </button>
      </div>
      <Navbar/>
      <Home/>
      <Projects/>
      <Tech/>
      <Contact_Profile/>
      <Footer/>
      
    </div>
  );
}

export default App;
