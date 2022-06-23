import React from 'react'

const MunroSelect = ({munros}) => {

    const options = munros.map((munro,index) => {
        return <option data-testid="munro-option" key={index} value ={index}>{munro.name}</option>

    })

    return (
        <select data-testid="munro-select">
            {options}
        </select>
    )

}

export default MunroSelect;