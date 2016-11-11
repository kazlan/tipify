import React from 'react';
import IconButton from 'material-ui/IconButton'
import IconMenu from 'material-ui/IconMenu'
import MenuItem from 'material-ui/MenuItem'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import ActionDescription from 'material-ui/svg-icons/action/description'
//import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import { ListItem } from 'material-ui/List'

const iconButtonElement = (
  <IconButton
    touch={true}
  >
    <MoreVertIcon color="#aaa" />
  </IconButton>
)

const handleMenuClick=(item,removeItemFunc, editItemFunc)=>{
    switch (item.props.children){
        case "Editar":
            editItemFunc()
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
const DataCard=({card, onClick, onRemove, onEdit}) => {
    return (
        <ListItem
            primaryText={card.title}
            secondaryText={card.desc || ""}
            secondaryTextLines={2}
            onTouchTap={onClick}
            leftIcon={<ActionDescription />}
            //rightIconButton={<MoreVertIcon color="#999"/>}
            rightIconButton={
                    <IconMenu iconButtonElement={iconButtonElement}
                        onTouchTap={(ev)=>handleRightIconButton(ev)}
                        onItemTouchTap={(_,item)=>handleMenuClick(item,onRemove, onEdit)}
                        useLayerForClickAway={true}
                    >
                        <MenuItem>Editar</MenuItem>
                        <MenuItem>Eliminar</MenuItem>
                    </IconMenu>
                }
        />
    )
}
export default DataCard