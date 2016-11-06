import React from 'react';
import ActionDescription from 'material-ui/svg-icons/action/description'
//import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert'

import { ListItem } from 'material-ui/List'


const DataCard=({card, onClick}) => {
    return (
        <ListItem
            primaryText={card.title}
            secondaryText={card.desc || ""}
            secondaryTextLines={2}
            onClick={onClick}
            leftIcon={<ActionDescription />}
            //rightIconButton={<MoreVertIcon color="#999"/>}
        />
    )
}
export default DataCard