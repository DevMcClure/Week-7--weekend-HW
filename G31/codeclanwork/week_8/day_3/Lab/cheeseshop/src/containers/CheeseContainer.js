import React, {useState, useEffect} from "react";
import CheeseList from "../components/CheeseList";
import CheeseForm from '../components/CheeseForm'
import styled from 'styled-components';


const Title = styled.h1`
text-align: center;
font-size: 2.5em;
background-color: #ced7e0
`

const Wrapper = styled.section`
padding: 4em;
bacground: papayawhip;
`

const SubTitle = styled.h2`
margin: 0;
padding: 1em;
background-color: #ced7e0;
color: #062c43;
text-align: center;
`






const CheeseContainer = () => {

    
    const [cheeses, setCheeses] = useState([

        {
            id: 1,
            cheese: "Chedder",
            text: "Goes with anything"
        },
        {
            id: 2,
            cheese: "Brie",
            text: "Its the creamiest/ most potent cheese out there"

        },
        {
            id: 3,
            cheese: "Burrata",
            text: "Its just a ball of cheesy delight"
            
        }
    ])

    const saveNewCheese = (newCheese) => {
        const cheesesCopy = [...cheeses, newCheese]
        setCheeses(cheesesCopy)
    }




    return(
        <>
            <Wrapper>
            <Title>Cheese List</Title>
            <CheeseList cheeses={cheeses}/>
            <SubTitle> Add Your Cheese Favourtie Cheese:</SubTitle>
            <CheeseForm onCheeseSubmit={saveNewCheese}/>
            </Wrapper>

        </>
    )
  
}

export default CheeseContainer;


