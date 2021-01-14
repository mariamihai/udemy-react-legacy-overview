import React, { Component, Fragment } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';

import styles from './Blog.module.css';

class Blog extends Component {
    state = {
        auth: false
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
                                pathname: '/new-post'
                            }}
                                activeClassName={styles.active}>
                                New Post
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                <Switch>
                    <Route path="/posts" component={Posts} />
                    {this.state.auth ? <Route path="/new-post" exact component={NewPost} /> : null}

                    <Redirect from="/" to="/posts" />
                </Switch>
            </Fragment>
        );
    }
}

export default Blog;