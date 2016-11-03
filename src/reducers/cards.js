
const SELECT_HAND = 'SELECT_HAND'
const RESET_HAND = "RESET_HAND"
const InitialState = {
    cursor: 0,
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

        default:
            return state
    }
}
export default cards