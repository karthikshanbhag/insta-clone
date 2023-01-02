export const initialState = null //initial value for the user is null

export const reducer = (state,action)=>{
    if(action.type === "USER"){
        return action.payload;
    }
    return state
}