export const signIn = (credentials)=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase()


        dispatch({type:"LOGIN_LOADING"})
        firebase.auth().signInWithEmailAndPassword(credentials.email, credentials.password)
        .then(()=>{
            dispatch({type:"LOGIN_SUCCESS"})
        })
        .catch((err)=>{
            dispatch({type:"LOGIN_ERROR",err})
        })
    }
}

export const signOut = ()=>{
    return(dispatch,getState,{getFirebase})=>{
        const firebase = getFirebase()
        firebase.auth().signOut().then(()=>{
            dispatch({type:"SIGNOUT_SUCCESS"})
        })
    }
}

export const signUp = (newUser)=>{
    return(dispatch,getState,{getFirebase,getFirestore})=>{
        const firebase = getFirebase()
        const firestore = getFirestore()

        dispatch({type:"SIGNUP_LOADING"})

        firebase.auth().createUserWithEmailAndPassword(newUser.email, newUser.password).then((res)=>{
            console.log(res.user.uid)
            if(res.user.uid){
                return firestore.collection('users').doc(res.user.uid).set({
                    firstName:newUser.firstName,
                    lastName:newUser.lastName,
                    initialName : newUser.firstName[0] + newUser.lastName[0]
                })
            }
        
        }).then(()=>{
            dispatch({type:"SIGNUP_SUCCESS"})
        }).catch((err)=>{
            dispatch({type:"SIGNUP_ERROR",err})
            
        })
    }
}