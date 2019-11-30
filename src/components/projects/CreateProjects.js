import React,{Component} from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/actions/projectAction'
// import { firestoreConnect } from 'react-redux-firebase'
// import { compose } from 'redux'
import {Redirect} from 'react-router-dom'



class CreateProjects extends Component {
    state={
        title:"",
        content:""
    }


    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.cretateProject(this.state)
        // window.location.href="/"
        this.props.history.push('/')
        // console.log(this.state)
        
    }

    render(){
        const {project,auth}=this.props
        console.log(auth,'kuylah')
        if(auth.uid) return <Redirect to='/signin'/>
        
        return(
            <div className="container">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <h5 className="grey-text text-darken-2">Create Project</h5>
                        <div className="input-field">
                            <label htmlFor="title">Title</label>
                            <input id="title" type="text" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Content</label>
                            <textarea id="content" className="materialize-textarea" onChange={this.handleChange}></textarea>
                            
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0" >
                            {project.isLoading?(
                            <div style={{flex:1}}>
                                <div className="preloader-wrapper small active" style={{width:20,height:20, margin: 'auto',top: 5,bottom: 1,left: 0,right: 0}}>
                                    <div className="spinner-layer spinner-blue-only">
                                    <div className="circle-clipper left">
                                        <div className="circle"></div>
                                    </div><div className="gap-patch">
                                        <div className="circle"></div>
                                    </div><div className="circle-clipper right">
                                        <div className="circle"></div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                            ):(
                                <div>Save</div>
                            )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToPros = (state)=>{
    console.log(state,'project')
    return {
        project:state.project,
        auth:state.firebase
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        cretateProject:(project)=>dispatch(createProject(project))
    }
} 

// export default compose(
//     connect(mapDispatchToProps),
//     firestoreConnect([
//         { collection: 'projects' }
//     ])
// )(CreateProjects)


export default connect(mapStateToPros,mapDispatchToProps)(CreateProjects)