import React from 'react';

const MunroSelect = ({munros, onMunroSelect}) => {

    const munroOptions = munros.map((munro, index) => {
        return <option selected value={index} key={index}>{munro.name}</option>
    })

    const handleChange = (event) => {
        const chosenMunro = munros[event.target.value];
        onMunroSelect(chosenMunro);
    };

    return (
        <select defaultValue="" onChange={handleChange}>
            <option value="" selected>Choose a Munro</option>
            {munroOptions}
        </select>
    )

};

export default MunroSelect;