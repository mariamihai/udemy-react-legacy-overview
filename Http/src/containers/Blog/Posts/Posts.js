import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom';
import axios from '../../../axios';

import Post from '../../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

import styles from './Posts.module.css';

class Posts extends Component {
    state = {
        posts: [],
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
        // this.props.history.push({pathname: '/posts/' + postId});
        this.props.history.push('/posts/' + postId);
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
            <Fragment>
                <section className={styles.Posts}>
                    {posts}
                </section>
                <Route path={this.props.match.url + "/:postId"} exact component={FullPost} />
            </Fragment>
        );
    }
}

export default Posts;