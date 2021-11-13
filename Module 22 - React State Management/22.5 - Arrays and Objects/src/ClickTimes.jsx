import React from 'react'

function ClickTimes({handleClick}) {
    return (
        <button onClick={() => handleClick()}>Add Timestamp</button>
    )
}

export default ClickTimes;
