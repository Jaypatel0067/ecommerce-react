const INITIAL_STATE = {
    setUsers:null
}
const userReducer =(state=INITIAL_STATE,action)=>{

    switch(action.type){
        case 'SET_CURRENT_USER':
            return{
                ...state,
                setUsers:action.payload
            }

        default:
            return state;
    }
}
export default userReducer