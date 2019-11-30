const initState={
    projects:[],
    isLoading:false,
    isSuccess:null

}

const projectReducers  = (state=initState,action)=>{
    // console.log(action.type)
    switch(action.type){
        case 'CREATE_PROJECT':
            return {
                ...state,
                isLoading:false,
                isSuccess:true
            };
        case 'CREATE_PROJECT_LOADING':
            return{
                ...state,
                isLoading:true,
                isSuccess:null
            }
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error',action.err)
            return {
                ...state,
                isLoading:false,
                isSuccess:false
            };  
        
        default:
    }

    return state
}

export default projectReducers
