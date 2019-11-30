import React from 'react'
import {firestoreConnect } from 'react-redux-firebase'
import {connect} from 'react-redux'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

const ProjectDetails =(props)=>{
    const project = props.project
    const auth = props.auth
    console.log(auth,'detail')
    if(!auth.uid) return <Redirect to ='/signin'/>
    if(project){
        return(
            <div className="container section project-details">
                <div className="card  z-depth-2 project-summary white">
                    <div className="card-content">
                        <span className="card-title" style={{fontWeight:'500'}}>
                            {project.title}
                        </span>
                        <p>{project.content}</p>
                    </div>
                    <div className="card-action grey lighten-4 grey-text">
                        <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                        <div>2nd September 2am</div>
                    </div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="container center">
                <p>Loading Project...</p>

            </div>
            )
    }

    
}


const mapStateToPros=(state,props)=>{
    const id=props.match.params.id;
    const projects = state.firestore.data.projects
    const project = projects?projects[id]:null;

    return{
        project:project,
        auth:state.firebase.auth        
    }
}



export default compose(
    connect(mapStateToPros),
    firestoreConnect([{
        collection:'projects'
    }])
)(ProjectDetails)