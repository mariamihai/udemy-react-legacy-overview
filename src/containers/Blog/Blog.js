import React, { Component, Fragment } from 'react';

import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

import styles from './Blog.module.css';

class Blog extends Component {
    state = {
        posts: []
    }

    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(response => {
                this.setState({ posts: response.data });
            });
    }


    render() {
        const posts = this.state.posts.map( post => <Post key={post.id} title={post.title} /> );

        return (
            <Fragment>
                <section className={styles.Posts}>
                    {posts}
                </section>

                <section>
                    <FullPost />
                </section>

                <section>
                    <NewPost />
                </section>
            </Fragment>
        );
    }
}

export default Blog;