import React, {Component} from 'react'
import Notifications from './Notifications'
import ProjectList from '../projects/ProjectList'
import {connect} from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
// import { firestore } from 'firebase'

class Dashboard extends Component{
    render(){
        const {projects,auth} = this.props
        if(!auth.uid) return<Redirect to='/signin'/>

        return(
                <div className="dashboard container">
                    <div className="row">
                        <div className="col s12 m6">
                            <ProjectList projects={projects}/>
                        </div>
                        <div className="col s12 m5 offset-m1">
                            <Notifications />
                        </div>
                    </div>
                </div>
        )
    }
}

// export default compose(
//     firestoreConnect(() => ['projects']), // or { collection: 'todos' }
//     connect((state, props) => ({
//       project: state.firestore.projects
//     }))
// )(Dashboard)

const mapStateToProps=(state)=>{
    console.log(state,'state')
    return{
        projects:state.firestore.ordered.projects,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ]),
    
)(Dashboard)

// export default connect(mapStateToProps)(Dashboard)