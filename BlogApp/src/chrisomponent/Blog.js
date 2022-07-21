import React, { Component } from 'react';

/*
getDerivedStateFromProps()
shouldComponentUpdate()
render()
getSnapshotBeforeUpdate()
componentDidUpdate()
 */

/*
componentWillUnmount()
 */

/*
componentDidCatch 
 */
class Blog extends Component {
    //Life Cycle During Mounting
    //1.
    constructor() {
        console.log("Component Constructor is called.")
        super()
        this.state = {
            showAuthor: false,
            data: [],
            isLoading: false,
            error: null
        }
    }

    //2. getDerivedStateFromProps
    static getDerivedStateFromProps(props, state) {
        console.log('getDerivedStateFromProps');
        //return {userName: props.name}
        return null;
    }

    //3. render
    render() {
        console.log("Component is rendered");
        console.log(this.state.data);
        return (
            <div>
                {this.state.isLoading ? this.showLoading() : this.showBlogs()}
            </div>
        );
    }

    //4. ComponentDidMount
    componentDidMount() {
        console.log("Component is mounted")
        //this.fetchMoviesWithPromise();
        this.fetchMoviesWithAsyncAwait();
        if (this.props.name.length === 0) {
            throw new Error('No name provided');
        }
    }

    //Last.
    componentWillUnmount() {
        console.log("Component will unmount")
    }


    async addMovie(movie) {
        const response = await fetch("https://swapi.dev/api/films/", {
            method: 'POST',
            body: JSON.stringify(movie),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const data = await response.json();
        console.log(data);

    }
    async fetchMoviesWithAsyncAwait() {
        this.setState({ isLoading: true });
        try {
            const response = await fetch('https://swapi.dev/api/films/');
            if (!response.ok) {
                throw new Error('Something went wrong.');
            }
            const data = await response.json();
            const transformed = data.results.map(movie => {
                return {
                    id: movie.episode_id,
                    title: movie.title
                }
            });
            this.setState({ data: transformed });
            this.setState({ isLoading: false });
        } catch (error) {
            this.setState({ error: error });
        }
    }

    fetchMoviesWithPromise() {
        fetch('https://swapi.dev/api/films/').then((response) => {
            console.log(response);
            return response.json();
        }).then((data) => {
            //console.log(data.results);
            //optional step to match keys
            const transformed = data.results.map(movie => {
                return {
                    id: movie.episode_id,
                    title: movie.title
                }
            });

            this.setState(() => { return { data: transformed }; })


        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.key !== this.state.key) {

        }
        console.log("Component did update");
    }

    someFunction = () => {
        //update state
        this.setState(() => { return { showAuthor: true }; })
    }

    showBlogs() {
        return (
            <div>
                <h3>{this.props.name}</h3>
                <p>Content of the Blog</p>
            </div>
        );
    }

    showLoading() {
        return (
            <div>
                <h3> Data is Loading... </h3>

            </div>
        );
    }


}

export default Blog;