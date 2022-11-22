import React from 'react'; 

const Secret = (props) => {
    return (
        <div className = "secret">
            <h2>{props.mainHeader}</h2>
            <h3>{props.secondHeader}</h3>
            <p>{props.content}</p>
        </div>
    )
}

export default Secret