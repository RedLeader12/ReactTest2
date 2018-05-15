import React from 'react';

const validation = (props) => {

    let response = null 

    if(props.length < 5){
        response = (
            <p>"text too short"</p> 
        )
    } else {
        response = (
            <p>"text long enough"</p> 
        )
    }
    return (
    <div>
        <p> {props.length}</p> 
        {response}
    </div> 
    )
};

export default validation; 