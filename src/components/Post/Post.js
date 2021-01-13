import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from './Post.module.css';

const post = (props) => {

    // Can use history, location and match here

    return (
        <article className={styles.Post}
            onClick={props.click}>
            <h1>{props.title}</h1>

            <div className={styles.Info}>
                <div className={styles.Author}>{props.author}</div>
            </div>
        </article>
    );
};

export default withRouter(post);