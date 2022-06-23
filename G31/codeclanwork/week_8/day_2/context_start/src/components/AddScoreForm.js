import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext';


const AddScoreForm = () => {

  const [inputGame, setInputGame] = useState("");
  const [inputScore, setInputScore] = useState("");

  const {user, setUser} = useContext(UserContext)

  
  const handleInputScore = (event) => {
    setInputScore(event.target.value);

    
  };
  
  const handleInputGame = (event) => {
    setInputGame(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newScore = { [inputGame]: Number(inputScore) }
    const updatedScores = [...user.scores, newScore]
    const updatedUser = {...user, scores: updatedScores}
    setUser(updatedUser);
    setInputGame("")
    setInputScore("");
    };

  


  return (
  <div>
    <form onSubmit={handleFormSubmit} >
        <label htmlFor='game'>Game:</label>
        <input type="text" id="game"  required oncChange={handleInputGame}/>
        <label htmlFor='score'>Score:</label>
        <input type="number" id="score"  required onChange={handleInputScore}/>
        <input type="submit" value="Save" />
    </form>
  </div>
  );
  }   


export default AddScoreForm