import React, { useState, useEffect } from 'react';
import MunroSelect from '../components/MunroSelect';
import MunroDetail from '../components/MunroDetail';
import './MunroContainer.css';

const MunroContainer = () => {
    const [munros, setMunros] = useState([]);
    const [selectedMunro, setSelectedMunro] = useState(null);

    useEffect(() => {
      getMunros();
    }, [])

    // const onMunroClick = (munro) => {
    //     setSelectedMunro(munro)
    // }

    const getMunros = function(){
        fetch('https://munroapi.herokuapp.com/munros')
        .then(res => res.json())
        .then(munros => setMunros(munros))
    }

    const onMunroSelect= (munro) => {
        setSelectedMunro(munro);
    }

    return (
        <div className="main-container">
           
            <MunroSelect munros={munros} onMunroSelect={onMunroSelect} />
            {selectedMunro ?<MunroDetail munro={selectedMunro}/> : null }
        </div>
    )
}

export default MunroContainer;
