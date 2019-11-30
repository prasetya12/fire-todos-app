import React,{Component} from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authAction'
import {Redirect} from 'react-router-dom'

class SignIn extends Component {
    state={
        email:"",
        password:""
    }


    handleChange=(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.signIn(this.state)
        
    }

    render(){
        console.log(this.props.authFirebase,'console')
        const {authFirebase} = this.props
        if(authFirebase.uid) return <Redirect to='/' />

        return(
            <div className="container">
                <form className="col s12" onSubmit={this.handleSubmit}>
                    <div className="row">
                        <h5 className="grey-text text-darken-2">Sign In</h5>
                        <div className="input-field">
                            <label htmlFor="email">Email</label>
                            <input id="email" type="email" className="validate" onChange={this.handleChange}/>
                        </div>
                        <div className="input-field">
                            <label htmlFor="password">Password</label>
                            <input id="password" type="password" className="validate" onChange={this.handleChange}/>
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
                                    <div>Login</div>
                                )}
                            </button>
                            {this.props.auth.isSuccess===false?(
                                <div className="red-text center">
                                    Login Failed
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
    return{
        auth:state.auth,
        authFirebase:state.firebase.auth
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        signIn: (creds)=>dispatch(signIn(creds))
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(SignIn)