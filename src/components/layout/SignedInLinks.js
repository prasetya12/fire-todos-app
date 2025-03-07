import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authAction'


const SignedInLinks = (props)=>{
    return (
        <ul className="right">
            <li>
                <NavLink to="/create">New Project</NavLink>
            </li>
            <li>
                <a href="#" onClick={props.signOut}>Log Out</a>
            </li>
            <li>
                <NavLink to="/" className='btn btn-floating pink lighten-1'>{props.authFirebase.profile.initialName}</NavLink>
            </li>
        </ul>
    )
}

const mapStateToProps = (state)=>{
    console.log(state.firebase,'firebase')
    return{
        auth:state.auth,
        authFirebase:state.firebase
    }
}

const mapDispatchToProps = (dispatch)=>{
    return{
        signOut : ()=>dispatch(signOut())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(SignedInLinks)