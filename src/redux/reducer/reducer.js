let initialState = {
    count: 0,
    name: ""
}

function reducer(state = initialState, action) {
    console.log("action은 ", action)

    switch (action.type) {
        case "INCREMENT":
            return { ...state, count: state.count + action.payload.step }; /// ...state 해주는 이유? 만약 state가 여러개이면 다른 state 값은 유지하되 count만 바꿈
        case "DECREMENT":
            return { ...state, count: state.count - action.payload.step };
        case "RESET":
            return { ...state, count: 0 };
        case "LOGIN":
            return { ...state, name: action.payload.name };
        default:
            return { ...state };
    }
}

export default reducer