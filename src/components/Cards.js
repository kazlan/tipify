import React, {Component} from 'react'
import { connect } from 'react-redux'
import {List } from 'material-ui/List'
import LinkCard from './LinkCard'
import DataCard from './DataCard'

class Cards extends Component {

    followLink(id){
        this.props.dispatch({type: "SELECT_HAND", payload: id})
    }
    removeCard(card){
        this.props.dispatch({type: "REMOVE_CARD", payload: card})
        this.props.dispatch({type: "SAVE_DATA"})

    }
    editCard(card, idx){
        this.props.dispatch({type: "EDIT_CARD", payload: {card, idx}})
        this.props.dispatch({type: "SAVE_DATA"})
    }
    showData(text){
        prompt("Texto a copiar",text)
    }
    checkKeyPress(event){
        switch (event.key){
            case "Escape":
                this.props.dispatch({type: 'RESET_HAND'})
                break
            default:
                break
        }
    }
    render() {
        const {cards} = this.props
        console.log(cards)
        let hand = cards.hands[cards.cursor]
        console.log(hand)
        return (
            <List onKeyUp={this.checkKeyPress.bind(this)} >
                {
                hand.map((card,idx)=>{
                    return card.sub !== undefined
                    ? 
                        <LinkCard 
                            card={card} 
                            key={idx} 
                            onClick={()=>this.followLink(card.sub)} 
                            onRemove={()=>this.removeCard(card)}
                            onEdit={()=>this.editCard(card,idx)}
                        />                    
                    :
                        <DataCard 
                            card={card}
                            key={idx}
                            onClick={()=>this.showData(card.desc|| card.title)}
                            onRemove={()=>this.removeCard(card)}
                            onEdit={()=>this.editCard(card,idx)}
                        />
                }
                    
                )}
            </List>
        )
    }
}
function mapStateToProps(state){
    return { cards: state}
}
export default connect(mapStateToProps)(Cards)