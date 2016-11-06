
const SELECT_HAND = 'SELECT_HAND'
const RESET_HAND = "RESET_HAND"
const ADD_CARD = "ADD_CARD"
const INIT_DATA = "INIT_DATA"

const InitialState = {
    cursor: 0,
    next_available_index: 2,
    hands: [
        [
            {type: "link", title: "Provision", sub: 1},
            {type: "text", title: "Net"},
            {type: "text", title: "Voz"},
            {type: "text", title: "NGTV"}
        ],
        [
            {type: "link", title: "subprov", sub: 0},
            {type: "text", title: "tecnico",desc: "Tecnico no acude a cita. Escalo caso a provisión."},
            {type: "text", title: "retraso",desc: "retraso técnico"},
            {type: "text", title: "voz ko",desc: "Instalación reciente. Teléfono todavía inactivo. En consola aparece pendiente."}
        ]
    ]
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