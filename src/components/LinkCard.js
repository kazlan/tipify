import React from 'react';
import ActionLabelOutline from 'material-ui/svg-icons/action/label-outline'
//import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'
import { ListItem } from 'material-ui/List'


const LinkCard=({card,onClick}) => 
    <ListItem
        primaryText={card.title}
        leftIcon={<ActionLabelOutline />}
        onClick={onClick}
        //rightIconButton={<MoreVertIcon color="#999"/>}
    />

export default LinkCard