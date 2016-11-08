import React from 'react';
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import ActionLabelOutline from 'material-ui/svg-icons/action/label-outline'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { ListItem } from 'material-ui/List'

const iconButtonElement = (
  <IconButton
    touch={true}
  >
    <MoreVertIcon color="#aaa" />
  </IconButton>
)

const handleMenuClick=(item,removeItemFunc)=>{
    switch (item.props.children){
        case "Editar":
            console.log("edit item")
            break
        case "Eliminar":
            removeItemFunc()
            break
        default:
            break
    }
}
const handleRightIconButton = (ev)=>{
    ev.preventDefault()
}

const LinkCard=({card,onClick,onRemove}) => 
    <ListItem
        primaryText={card.title}
        leftIcon={<ActionLabelOutline />}
        onTouchTap={onClick}
        rightIconButton={
            <IconMenu iconButtonElement={iconButtonElement}
                onTouchTap={(ev)=>handleRightIconButton(ev)}
                onItemTouchTap={(_,item)=>handleMenuClick(item,onRemove)}
                useLayerForClickAway={true}
            >
                <MenuItem>Editar</MenuItem>
                <MenuItem>Eliminar</MenuItem>
            </IconMenu>
        }
    />

export default LinkCard