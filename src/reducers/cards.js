
const SELECT_HAND = 'SELECT_HAND'
const RESET_HAND = "RESET_HAND"
const ADD_CARD = "ADD_CARD"
const REMOVE_CARD = "REMOVE_CARD"
const INIT_DATA = "INIT_DATA"

const InitialState = {
    cursor: 0,
    next_available_index: 2,
    hands: [[]]
}
const cards = (state=InitialState, {type, payload})=>{
    switch(type){
        case SELECT_HAND:
            return Object.assign({},state,{
                hands: state.hands,
                cursor: payload
            })

        case RESET_HAND:
            return Object.assign({}, state, {
                hands: state.hands,
                cursor: 0
            })
        case ADD_CARD:
            var out 
            if (payload.type === "texto")
                out = Object.assign({}, state, {
                    cursor: state.cursor,
                    hands: [...state.hands.slice(0, state.cursor),
                            state.hands[state.cursor].concat(payload),
                            ...state.hands.slice(state.cursor+1)]
                    })
            if (payload.type === "link")
                out = Object.assign({}, state, {
                    cursor: state.cursor,
                    hands: [...state.hands.slice(0, state.cursor),
                            state.hands[state.cursor].concat(
                                Object.assign({},payload, {sub: state.next_available_index++})
                            ),
                            ...state.hands.slice(state.cursor+1),[]]
                    })
            return out
        case REMOVE_CARD:
            return Object.assign({}, state,{
                cursor: state.cursor,
                hands: [
                    ...state.hands.slice(0, state.cursor),
                    state.hands[state.cursor].filter(item=>item.title!==payload.title),
                    ...state.hands.slice(state.cursor+1)
                ]

            })

        case INIT_DATA:
            return Object.assign({}, state, {
                hands: payload.hands,
                cursor: 0,
                next_available_index: payload.next_available_index
            })

        case "TEST":
            console.log("en test")
            return state

        default:
            return state
    }
}
export default cards