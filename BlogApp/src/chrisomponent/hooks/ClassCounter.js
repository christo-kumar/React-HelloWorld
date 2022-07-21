import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    //binding is not required for this as this is an arrow function.
    increamentCount = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return(
            <div>
                <button onClick={this.increamentCount}> Click Me baby - {this.state.count} </button>
            </div>
        );
    }
}

export default ClassCounter;