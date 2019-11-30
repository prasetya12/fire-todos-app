import React,{Component} from 'react'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {signUp} from '../../store/actions/authAction'
import M from "materialize-css";

class SignUp extends Component {
    state={
        email:"",
        password:"",
        firstName:"",
        lastName:""
    }


    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        const {signUp} = this.props
        signUp(this.state)
        
        
    }

    render(){
        console.log(this.props.auth,'auth')
        const {authFirebase,auth} = this.props
        if(authFirebase.uid) return <Redirect to='/'/>
        
        return(
            <div className="container">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <h5 className="grey-text text-darken-2">Sign Up</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" className="validate" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" className="validate" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="firstName">First Name</label>
                            <input id="firstName" type="text" className="validate" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="lastName">Last Name</label>
                            <input id="lastName" type="text" className="validate" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <button className="btn pink lighten-1 z-depth-0">
                                {this.props.auth.isLoading?(
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
                                        <div>Sign Up</div>
                                    )}
                            </button>
                            {this.props.auth.isSuccess===false?(
                                <div className="red-text center">
                                    {auth.authError.message}
                                </div>
                            ):null}

                        </div>
                    </div>
                </form>
            </div>
        )
    }
}


const mapStateToProps = (state)=>{
    console.log(state.firebase)
    return{
        authFirebase:state.firebase.auth,
        auth:state.auth
        
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        signUp: (newUser)=>dispatch(signUp(newUser))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignUp)