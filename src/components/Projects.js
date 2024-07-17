import React from 'react'
import Highlight from './Highlight'
import trackease from "../images/trackease.png"
import rhythm from "../images/rhythm.png"
import weather from "../images/weather.png"
import ikart from "../images/ikart.png"
import imails from "../images/mail.png"
import amazon from "../images/amazon.png"
import ProjectBox from './ProjectBox'

const Projects = () => {

    let projectData = [
        {
            name:"TrackEase",
            link:"https://github.com/CoderVikas21/TrackEase",
            img:trackease,
            tech:["ReactJs | Redux | TailwindCSS"]
        },
        {
            name:"Rhythm",
            link:"https://github.com/CoderVikas21/Rythm-Spotify-Album-Finder",
            img:rhythm,
            tech:["ReactJs | API Integration"]
        },
        {
            name:"Mausam",
            link:"https://github.com/CoderVikas21/Mausam-WeatherApp",
            img:weather,
            tech:["ReactJs | Redux | API Fetching"]
        },
        {
            name:"iKart",
            link:"https://github.com/CoderVikas21/iKart",
            img:ikart,
            tech:["ReactJs | TailwindCSS"]
        },
        {
            name:"Amazon",
            link:"https://github.com/CoderVikas21/Amazon-Clone",
            img:amazon,
            tech:["HTML | CSS | JavaScript"]
        },
        {
            name:"iMails",
            link:"https://github.com/CoderVikas21/iMails",
            img:imails,
            tech:["ReactJs | API | TailwindCSS"]
        }
    ]

  return (
    <div className="sec3" id="sec3_1">
                <div className="project_head">
                    <h1><Highlight>PROjects</Highlight> : What I've built sooo far!</h1>
                </div>
                <div className="project_container">

                    {
                        projectData.map((project)=>(
                            <ProjectBox img={project.img} link={project.link} name={project.name} tech={project.tech}/>
                        ))
                    }

                </div>
                <p> <i className="fa-solid fa-up-long"></i> Scroll for more <i className="fa-solid fa-down-long"></i></p>
            </div>
  )
}

export default Projects
