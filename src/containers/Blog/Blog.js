import React, { Component, Fragment } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';

import styles from './Blog.module.css';

class Blog extends Component {

    render () {
        return (
            <Fragment>
                <section className={styles.Posts}>
                    <Post />
                    <Post />
                    <Post />
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