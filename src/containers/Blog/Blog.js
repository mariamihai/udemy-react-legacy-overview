import React, { Component, Fragment } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

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
                            <li><NavLink to="/posts" exact
                                activeClassName='highlight'
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>
                                Posts
                                </NavLink>
                            </li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}
                                activeClassName={styles.active}>
                                New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                <Route path="/posts" component={Posts} />
                <Route path="/new-post" exact component={NewPost} />
            </Fragment>
        );
    }
}

export default Blog;