import React, {useState} from 'react';
import styled from 'styled-components'

const Form = styled.button`

   
    
    background: ${props => props.primary ? "#ced7e0" : "#ced7e0"};
    color: ${props => props.primary ? "#ced7e0" : ""};

    

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid blue;
    border-radius: 3px;
   
    
    
    
`;


const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.inputColor || ""};
  background: papayawhip;
  border: none;
  border-radius: 3px;

`;




const CheeseForm = ({onCheeseSubmit}) => {

    const [cheese, setCheese] = useState("");
    const [text, setText] = useState(""); 


    const handleCheese = (event) => {
        setCheese(event.target.value);

    }

    const handleText = (event) => {
        setText(event.target.value);
    }

    

    const handleSubmit = (event) => {
        event.preventDefault();
        const newCheese = cheese.trim()
        const newText = text.trim();
        if (!newCheese || !newText){
            return
        }

        const AddNewCheese = {cheese: newCheese, text:newText, id: Date.now()}
        onCheeseSubmit(AddNewCheese)

        setCheese ("");
        setText ("")

    }

    return ( 
        <Form>
            <form onSubmit={handleSubmit}>
                <label htmlFor ="cheese">Cheese:</label>
                <Input required type ="text" placeholder="Cheese" id= "cheese" value={cheese} onChange={handleCheese}/>
                <label htmlFor="text">Text:</label>
                <Input required type="text" placeholder= "say somehing..." id="text" value={text} onChange={handleText}/>
                 <Input type="submit" value="Add Cheese"/>
            </form>
        </Form>
    )

}

export default CheeseForm;