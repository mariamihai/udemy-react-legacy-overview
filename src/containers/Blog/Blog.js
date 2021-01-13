import React, { Component, Fragment } from 'react';

import { Route, Link } from 'react-router-dom';
import NewPost from './NewPost/NewPost';

import Posts from './Posts/Posts';
// TODO - will be refactored
// import Post from '../../components/Post/Post';
// import FullPost from './FullPost/FullPost';


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
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>

                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />


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