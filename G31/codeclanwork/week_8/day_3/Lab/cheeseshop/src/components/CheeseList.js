import React from 'react';
import ListItem from './ListItem'

const CheeseList = ({cheeses}) => {

    const cheeseNodes = cheeses.map((cheese)  => {
        return(
            <ListItem cheese={cheese} key={cheese.id} />
        )
      
    })

    return(
        <>
            {cheeseNodes}
        </>
    )
}

export default CheeseList