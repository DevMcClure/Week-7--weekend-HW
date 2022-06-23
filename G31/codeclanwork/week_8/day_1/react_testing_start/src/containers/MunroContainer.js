import React, {useState,useEffect} from 'react';
import MunroSelect from '../components/MunroSelect.js'

const MunroContainer = () => {

    const [munros, setMunros] = useState([]);

    useEffect(() => {
        fetch("https://munroapi.herokuapp.com/munros")
        .then(res => res.json())
        .then(data => setMunros(data));
    },[]);

    return(
        <MunroSelect munros={munros}/>
    )
}

export default MunroContainer;