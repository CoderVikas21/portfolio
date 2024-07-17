import React from 'react'

const ProjectBox = ({img,link,name,tech}) => {

  return (
    <div className="projects_box">
            <a href={link} target="_blank"><img src={img}/></a>
            <p>{name}</p>
            <p>{tech}</p>
    </div>
  )
}

export default ProjectBox
