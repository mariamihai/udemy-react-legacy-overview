import React, { Component } from 'react';
import axios from 'axios';

import styles from './FullPost.module.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    }

    componentDidMount() {
        this.loadPost();
    }

    componentDidUpdate() {
        this.loadPost();
    }

    loadPost() {
        if (this.props.match.params.postId) {
            if (!this.state.loadedPost ||
                this.state.loadedPost.id !== +this.props.match.params.postId) {
                axios.get('/posts/' + this.props.match.params.postId)
                    .then(response => {
                        this.setState({ loadedPost: response.data });
                    });
            }
        }
    }

    deleteDataHandler = () => {
        axios.delete('/posts/' + this.props.match.params.postId)
            .then(response => {
                console.log(response);
            });
    }

    render() {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post.</p>

        if (this.props.match.params.postId) {
            post = <p style={{ textAlign: 'center' }}>Loading...</p>
        }

        if (this.state.loadedPost) {
            post = (
                <div className={styles.FullPost}>
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className={styles.Edit}>
                        <button className={styles.Delete}
                            onClick={this.deleteDataHandler}>Delete</button>
                    </div>
                </div>
            );
        }

        return post;
    }
}

export default FullPost;