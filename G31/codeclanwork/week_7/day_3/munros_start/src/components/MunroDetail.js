import React from 'react';

const MunroDetail = ({munro}) => {

    return(
        <div>
            <h3>{munro.name}</h3>
            <p>Height: {munro.height}</p>
            <p>Region: {munro.reigon}</p>
            <p>Meaning: {munro.meaning}</p>

        </div>

    )
}

export default MunroDetail;