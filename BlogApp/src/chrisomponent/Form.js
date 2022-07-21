import React, { Component } from 'react';


class Form extends Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    onUserChangeHandler = (event) => {
        this.setState({
            username: event.target.value
        });
    }

    onPwdChangeHandler = (event) => {
        this.setState({
            password: event.target.value
        });
    }

    handleSubmit = (event) => {
        console.log(this.state.username);
        console.log(this.state.password);
        event.preventDefault();
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label> Username </label>
                    <input type="text" value={this.state.username} onChange = {this.onUserChangeHandler}/>
                    <label> Password </label>
                    <input type="text" value={this.state.password} onChange = {this.onPwdChangeHandler}/>
                </div>
                <button type='submit'> Submit </button> 
            </form>
        );
    }
}

export default Form;