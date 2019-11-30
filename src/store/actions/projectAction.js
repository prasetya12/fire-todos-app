export const createProject = (project)=>{
    //WITHOUT Thunk
    // return {
    //     type:"ADD_PROJECT",
    //     project:project
    // }


    //WITH THUNK
    //return function
    return (dispatch,getState,{getFirebase,getFirestore})=>{
        dispatch({type:"CREATE_PROJECT_LOADING"})
        const firestore = getFirestore();
        const firebase = getFirebase();
        const state = getState().firebase.profile
        console.log(state,'state')
        firestore.collection('projects').add({
            ...project,
            authorFirstName:state.firstName,
            authorLastName:state.lastName,
            createdAt:new Date(),
            authorId:12345
        })

        .then(()=>{
            dispatch({type:"CREATE_PROJECT",project})

        }).catch((err)=>{
            dispatch({type:"CREATE_PROJECT_ERROR",err})
        })
        //make async call to database
        
    }
} 