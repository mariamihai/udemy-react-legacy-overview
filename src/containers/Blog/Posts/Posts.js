import React, { Component } from 'react';

import axios from '../../../axios';

import Post from '../../../components/Post/Post';

import styles from './Posts.module.css';

class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false
    }

    componentDidMount() {
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: post.userId % 2 === 0 ? 'Max' : 'Manu'
                    }
                });

                this.setState({ posts: updatedPosts });
            })
            .catch(error => {
                console.log(error);
            });
    }

    showPostHandler = (postId) => {
        this.setState({ selectedPostId: postId });
    }

    render() {
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>

        if (!this.state.error) {
            posts = this.state.posts.map(post => (
                <Post key={post.id}
                    title={post.title}
                    author={post.author}
                    click={() => this.showPostHandler(post.id)} />
            ));
        }

        return (
            <section className={styles.Posts}>
                {posts}
            </section>
        );
    }
}

export default Posts;