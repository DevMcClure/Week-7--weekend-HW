import React from 'react'
import styled from 'styled-components';


const Type = styled.h2`
color: blue;
text-align: center

`

const Comment = styled.p`
text-align: center
`



const ListItem = ({cheese}) => {

    return (

        <>
            <Type>Type: {cheese.cheese}</Type>
            <Comment>Why is it so good?: {cheese.text}</Comment> 
        </>
    )
}

export default ListItem;


