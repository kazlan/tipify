import React, {Component} from 'react';
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import Paper from 'material-ui/Paper'
class EditBox extends Component {
    constructor(props){
        super(props)
        const kind = "link"
        const label = "Tarjeta de Enlace"
    }

    cambiarTipo(){
        this.kind=this.kind === "link"? "texto":"link"
        console.log(this.kind)
    }
    render() {
        return (
             <Paper style={{padding:10}}>
                <Toggle 
                    label={this.label}
                    onToggle={()=>this.cambiarTipo()}
                />
                {this.tipo === "link"
                ?
                    <TextField hintText="Título" fullWidth={true} />
                :
                    <TextField hintText="Texto" fullWidth={true} />   
                }
            </Paper>
        );
    }
}

export default EditBox;