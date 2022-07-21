import React from 'react';


const ExpenseItem = (props) => {

    //const [first, setFirst] = useState(props.first);

    const clickHandler = () => {
        //console.log(first);
        // setFirst("Updated..");
        console.log("Button is clicked");
    }

    const styleCondition = true
    return (
        <div>
            <div> 2nd May </div>
            <div>
                <h2 style={{ color: styleCondition ? 'blue' : 'red' }}> Hello World - {props.first} </h2>
                <div> $100 </div>
            </div>
            <button onClick={clickHandler}>Change Title </button>
        </div>
    );
}

export default ExpenseItem;