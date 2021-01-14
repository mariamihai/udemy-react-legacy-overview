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

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        };

        axios.post('/posts/', data)
            .then(response => {
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