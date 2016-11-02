import React, {Component} from 'react'
import {List,ListItem} from 'material-ui/List'

class Deck extends Component {
    constructor(props){
        super(props)
        this.sub1 = [{type: "text", title: "item1"},{type: "text", title: "item2"},{type: "text", title: "item3"}]
        this.cards = [
            {type: "link", title: "Provision", sub: this.sub1},
            {type: "text", title: "Internet"},
            {type: "text", title: "Voz"},
            {type: "text", title: "NGTV"}
            ]
        this.state = { hand: this.cards, stack: [] }
        this.deck = {
                provision: {type: "link", title: "Provision", sub: this.sub1},
                internet: {type: "text", title: "Internet"},
                voz: {type: "text", title: "Voz"},
                ngtv: {type: "text", title: "NGTV"}
        }
    }
    onCardClick(card){
        switch (card.type){
            case "link":
                this.setState({
                    stack: this.state.stack.concat([this.state.hand]),
                    hand: card.sub})
                break
            default:
                //prompt('Caso',card.title)
        }
    }
    onBackClick(){
        console.log('back')
        this.setState({
            //hand: this.state.stack[this.state.stack.lenght-1],
                hand: this.state.stack.slice(-1)[0],
            stack: this.state.stack.slice(0,-1)
        })
    }
    render() {
        console.log('hand',this.state.hand)
        console.log('stack', this.state.stack)
        return (
            <List>
                {
                    this.state.stack.length?
                        <ListItem primaryText="Back" key="back" onClick={()=>this.onBackClick()}/>
                        :null
                }
                {
                    this.state.hand.map((item)=> 
                        <ListItem 
                            primaryText={item.title} 
                            key={item.title} 
                            onClick={()=>this.onCardClick(item)}
                        />)
                }
            </List>
        )
    }
}

export default Deck