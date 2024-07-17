import React from 'react'
import vslogo from "../images/vs.webp"

const Navbar = () => {

    function to_profile(){
        window.scroll({
            top:500,
            behaviour:"smooth"
        })
    }
    function to_tech(){
        window.scroll({
            top:850,
            behaviour:"smooth"
        })
    }
    function to_contact(){
        window.scroll({
            top:1300,
            behaviour:"smooth"
        })
    }


  return (
    <div className="navbar" >
    <div className="navleft" id="navleft">
        <img src={vslogo}/>
        <button class="btn">Home</button>
        <button class="btn" onClick={to_profile}>Projects</button>
        <button class="btn" onClick={to_tech}>TechStack</button>
        <button class="btn" onClick={to_contact}>Contact</button>
    </div>
    <div className="navright">
        <div className="navright_cont">
            <div className="navright_box">
                <i className="fa-brands fa-instagram"></i>
                <a href="#" target="_blank"><span className="highlight">Instagram</span></a>
            </div>
            <div className="navright_box">
                <i className="fa-brands fa-github"></i>
                <a href="https://github.com/CoderVikas21" target="_blank"><span className="highlight">GitHub</span></a>
            </div>
            <div className="navright_box">
                <i className="fa-brands fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/vikas-sani-599754289/" target="_blank"><span className="highlight">LinkedIn</span></a>
            </div>
            <div className="navright_box">
                <i className="fa-brands fa-twitter"></i>
                <a href="#" target="_blank"><span className="highlight">Twitter</span></a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Navbar
