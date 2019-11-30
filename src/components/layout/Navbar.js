import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SignedOutLinks'
import {connect} from 'react-redux'


const Navbar = (props)=>{
    const link = props.firebase.auth.uid ?(
        <SignedInLinks/>
    ):(
        <SignedOutLinks/>

    )
    return (
        <nav className="nav-wrapper blue darken-2">
            <div className="container">
                <Link to="/" className="brand-logo">FirePlanning APP</Link>
                {link}

            </div>
        </nav>
    )
}

const mapStateToProps=(state)=>{
    return{
        auth:state.auth,
        firebase:state.firebase
    }
}

export default connect(mapStateToProps)(Navbar)