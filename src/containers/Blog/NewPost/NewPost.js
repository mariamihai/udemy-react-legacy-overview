import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import styles from './NewPost.module.css';
import axios from '../../../axios';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false
    }

    // componentDidMount() {
    //     // Check if user is not authenticated and
    //     this.props.history.replace("/posts");
    // }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        };

        axios.post('/posts/', data)
            .then(response => {
                // Pushing a new page -> you can go back to "New Post"
                // this.props.history.push("/props");

                // Redirect replaces the page, doesn't push a new one -> you can't go back to "New Post"
                // this.props.history.replace("/props"); // or
                this.setState({ submitted: true });
            });
    }

    render() {
        let redirecting = null;
        if(this.state.submitted) {
            redirecting = <Redirect to="/posts" />;
        }

        return (
            <div className={styles.NewPost}>
                {redirecting}

                <h1>Add a Post</h1>

                <label>Title</label>
                <input type="text"
                    value={this.state.title}
                    onChange={(event) => this.setState({ title: event.target.value })} />

                <label>Content</label>
                <textarea rows="4"
                    value={this.state.content}
                    onChange={(event) => this.setState({ content: event.target.value })} />

                <label>Author</label>
                <select value={this.state.author}
                    onChange={(event) => this.setState({ author: event.target.value })} >
                    <option value="Max">Max</option>
                    <option value="Man">Manu</option>
                </select>

                <button onClick={this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;