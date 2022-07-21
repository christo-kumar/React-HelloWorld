import React, { useState } from 'react';

 
const HookCounter = () => {

    const [count, setCount] = useState(0);

    const increamentCount = () => {
        setCount(count + 1);
    }

    return(
        <div>
            <button onClick={increamentCount}> Click Me baby {count} </button>
        </div>
    );
}

export default HookCounter;