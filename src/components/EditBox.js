import React, {Component} from 'react'
import { connect } from 'react-redux'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import RaisedButton from 'material-ui/RaisedButton'
import Paper from 'material-ui/Paper'
class EditBox extends Component {
    opciones = {
        link: {kind: "link", label: "Tarjeta de Enlace"},
        texto: {kind: "texto", label: "Tarjeta de Texto"}
    }
    temp_item = {type: "link", title: "", desc: ""}

    constructor(props){
        super(props)
        this.state = {
            opcion: this.opciones.link,
            disabled: true
        }
    }
    submit(){
        this.props.dispatch({type:"ADD_CARD",
                payload: {
                    type: this.state.opcion.kind,
                    title: this.temp_item.title,
                    desc: this.temp_item.desc
                }})
        this.props.dispatch({type: "SAVE_DATA"})
        this.cancel()
    }
    cancel(){
        this.props.onCancel()
    }
    cambiarTipo(){
        this.setState({opcion: this.state.opcion.kind === "link"? this.opciones.texto:this.opciones.link})
    }
    checkValidity(){
        if (this.state.opcion.kind === "link"){
            this.setState({disabled: this.temp_item.title === ""})
        }else if (this.state.opcion.kind === "texto"){
            this.setState({disabled: (this.temp_item.title === "" || this.temp_item.desc === "")})
        }
    }
    render() {
        return (
             <Paper style={{padding:10}} 
                onKeyUp={(event)=>{if (event.key==="Escape") this.cancel()}}>
                <Toggle 
                    label={this.state.opcion.label}
                    onToggle={()=>this.cambiarTipo()}
                />
                <TextField 
                    hintText="Título" 
                    fullWidth={true} 
                    onChange={(e)=>{this.temp_item.title = e.target.value;this.checkValidity()}}
                />
                <TextField 
                    hintText="Descripción"
                    fullWidth={true} 
                    onChange={(e)=>{this.temp_item.desc = e.target.value;this.checkValidity()}}
                />
                <RaisedButton 
                    label="Añadir"
                    fullWidth={true}
                    onClick={()=>this.submit()}
                    disabled={this.state.disabled}
                />
            </Paper>
        );
    }
}

export default connect()(EditBox)