import React, { Component } from 'react';

class RefsDemo extends Component {
    constructor(props) {
        super(props);
        //same can be acchieved with useRef() hook in functional component
        this.inputRef = React.createRef();
    }

    componentDidMount() {
        this.inputRef.current.focus();
    }

    onClick = () => {
        alert(this.inputRef.current.value);
    }

    render() {
        return(
            <div>
                <input type='text' ref={this.inputRef} />
                <button onClick={this.onClick}>Click</button>
            </div>
        );
    }
}

export default RefsDemo;