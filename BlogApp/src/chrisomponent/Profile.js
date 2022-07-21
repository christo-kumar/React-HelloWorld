import React, { Component } from 'react';


class Profile extends Component {

    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    onLike = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    onUnlike = () => {
        this.setState({
            count: this.state.count + 1
        });
    }

    render() {
        return (
            <div>
                <h1>Name</h1>
                <h1>Age</h1>
            </div>
        );
    }

}

export default Profile;