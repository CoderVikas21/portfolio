import React from 'react'
import mypic from "../images/mypic.jpg"
import { Typewriter } from 'react-simple-typewriter'
import Highlight from './Highlight'
const Home = () => {
    
 const link = "https://drive.google.com/file/d/1wMSdgGsrnCcQfqyInPiVGMk17Ej6M6A-/view?usp=sharing";

  return (
    <div className="sec1_cont">
                <div className="sec1_left">
                    <div className="animated_text">
                        I'm VIKAS SANI, a  <br /><Typewriter
                    words={['Aspiring SDE', 'Frontend Dev', 'Coder', 'Footballer']}
                    loop={100}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
          />
            </div>
                    <p>
                        <Highlight>Frontend enthusiast</Highlight> with a passion for crafting seamless user experiences. Proficient in <Highlight>ReactJs</Highlight> and frontend development, with a keen interest in solving complex <Highlight>data structures and algorithms</Highlight> problems. As an undergrad, I am eager to apply my skills and learn from experienced professionals while contributing to the success of a <Highlight>forward-thinking company</Highlight>.
                    </p>
                    <div className="sec1_btn">

                    <div class="tooltip-container" id='download_btn'>
                    <span class="tooltip"><a href={link} target='blank'>Resume</a></span>
                    <span class="text">
                        <div class="borde-back">
                        <div class="icon">
                            <i class="fa-solid fa-file"></i>
                        </div>
                        </div>
                    </span>
                    </div>
                    </div>
                </div>
                <div className="sec1_right">
                    <div className="my_img">
                        <img src={mypic} id="sec1_img"/>
                    </div>
                </div>
    </div>
  )
}

export default Home
