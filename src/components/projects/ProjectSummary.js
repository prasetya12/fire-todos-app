import React from 'react'
import moment from 'moment'


const ProjectSummary = (props)=>{
    const project = props.project
    const time = moment(project.createdAt.toDate()).calendar()
    return(
        <div className="card z-depth-2 project-summary white" style={{borderRadius:8}}>
            <div className="card-content grey-text text-darken-3">
                <span className="card-title" style={{fontWeight:'500'}}>{project.title}</span>
                <p>Posted by {project.authorFirstName} {project.authorLastName}</p>
                <p className="grey-text"> {time}</p>
            </div>
        </div>
    )
}

export default ProjectSummary