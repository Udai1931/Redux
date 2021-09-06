const initialState = {
    balls : 30
}

const BallReducer = (state=initialState,action) => {
    switch(action.type){
        case "BUY_BALL" : 
            return {...state,balls:state.balls-action.payload}
        case "SELL_BALL" :
            return {...state,balls:Number(state.balls)+Number(action.payload)}
        default : 
            return state
    }
}

export default BallReducer