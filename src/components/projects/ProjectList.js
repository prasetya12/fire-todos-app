import React from 'react'
import {Link} from 'react-router-dom'
import ProjectSummary from './ProjectSummary'

const ProjectList = (props)=>{
    return (
        <div className="project-list section">
            {props.projects && props.projects.map((project,index)=>{
                return(
                    <Link to={'/project/'+project.id}  key={index}>
                        <ProjectSummary project={project}/>
                    </Link>
                    )
            })}
            
        </div>
    )
}




export default ProjectList