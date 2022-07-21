import React from 'react';
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    //const [enterTitle, setEnterTitle] = useState(0);

    const onChangeListner = (event) => {
        console.log(event.target.value);
        //setEnterTitle(event.target.value);
    }

    const onSubmitListner = (event) => {
        event.preventDefault();
        /* Create the data from state
        const data = {
            title: enterTitle
        };*/
        props.onSubmit('Passed from Child');
        console.log("Collect state and submit from here");
    }
    //Two way binding with help of state.
    //Event listner listens to the event and handles the control event.
    //Control value is updated with help of state after handling control event
    return (
        <div className='Container'>
            <form onSubmit={onSubmitListner}>
                <label> Title </label>
                <input type='text' /*value={state //this is used for 2 way binding}*/ onChange={onChangeListner} />
                <label> Amount </label>
                <input type='number' min='1' step='1' />
                <label> Date </label>
                <input type='date' min='2019-01-01' max='2022-12-31' />
                <div className='Container'>
                    <button type='submit'> Add Expense </button>
                </div>
            </form>
        </div>
    );
}

export default ExpenseForm;


