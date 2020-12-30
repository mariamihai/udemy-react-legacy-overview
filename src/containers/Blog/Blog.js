import React, { Component, Fragment } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

import styles from './Blog.module.css';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: post.userId % 2 === 0 ? 'Max' : 'Manu'
                    }
                });

                this.setState({ posts: updatedPosts });
            });
    }

    showPostHandler = (postId) => {
        this.setState({ selectedPostId: postId });
    }

    render() {
        const posts = this.state.posts.map(post => (
            <Post key={post.id}
                title={post.title}
                author={post.author}
                click={() => this.showPostHandler(post.id)} />
        ));

        return (
            <Fragment>
                <section className={styles.Posts}>
                    {posts}
                </section>

                <section>
                    <FullPost
                        id={this.state.selectedPostId} />
                </section>

                <section>
                    <NewPost />
                </section>
            </Fragment>
        );
    }
}

export default Blog;