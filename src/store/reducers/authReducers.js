const initState={
    isSuccess:null,
    isLoading:false,
    isLogout:null,
    authError:{}
}

const authReducers  = (state=initState,action)=>{
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return {
                ...state,
                isSuccess:true,
                isLoading:false

            };
        case 'LOGIN_LOADING':
            return{
                ...state,
                isSuccess:null,
                isLoading:true,
                isLogout:false


            }
        case 'LOGIN_ERROR':
            return {
                ...state,
                isSuccess:false,
                isLoading:false

            }
        case 'SIGNOUT_SUCCESS':
            return {
                ...state,
                isLogout:true
            }
        case 'SIGNUP_LOADING':
            return{
                ...state,
                isLoading:true
            }
        case 'SIGNUP_ERROR':
            return{
                ...state,
                isLoading:false,
                isSuccess:false,
                authError:action.err
            }
        case 'SIGNUP_SUCCESS':
            return{
                ...state,
                isLoading:false,
                isSuccess:true,
            }
        
            default:
                return state
        }   
    
    
}

export default authReducers
