import React from 'react';

const char = (props) => {

    return (
    <div>
        <p onClick={props.click}> {props.letter}</p> 
    </div> 
    )
};

export default char; 