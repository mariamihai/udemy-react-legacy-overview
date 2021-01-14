import React, { Component, Fragment } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import styles from './Blog.module.css';

import Posts from './Posts/Posts';
// import NewPost from './NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent/asyncComponent';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});


class Blog extends Component {

    state = {
        auth: true
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
                    {/* <Route path="/new-post" exact component={NewPost} /> */}
                    {/* {this.state.auth ? <Route path="/new-post" exact component={NewPost} /> : null} */}
                    {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} /> : null}

                    <Route render={() => <h1>Page not found</h1>} />
                </Switch>
            </Fragment>
        );
    }
}

export default Blog;