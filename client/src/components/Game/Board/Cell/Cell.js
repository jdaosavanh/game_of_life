import React from 'react';

const cell = (props) => {

    return(
        <div className={props.cellClass} onClick={props.cellToggle}/>
    );
};

export default cell