import React from 'react';
import ActionLabelOutline from 'material-ui/svg-icons/action/label-outline'
import { ListItem } from 'material-ui/List'


const LinkCard=({card,onClick}) => 
    <ListItem
        primaryText={card.title}
        leftIcon={<ActionLabelOutline />}
        onClick={onClick}
    />

export default LinkCard