import React, { Component, Fragment } from 'react';

import { Route } from 'react-router-dom';

import Posts from './Posts/Posts';
// TODO - will be refactored
// import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';
// import NewPost from './NewPost/NewPost';

import styles from './Blog.module.css';

class Blog extends Component {
    state = {
        posts: []
    }

    render() {
        return (
            <Fragment>
                <header className={styles.BlogNav}>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li>
                        </ul>
                    </nav>
                </header>

                <Route path="/" exact component={ Posts } />


                {/* <section>
                    <FullPost
                        id={this.state.selectedPostId} />
                </section>

                <section>
                    <NewPost />
                </section> */}
            </Fragment>
        );
    }
}

export default Blog;