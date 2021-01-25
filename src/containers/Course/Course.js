import React, { Component } from 'react';

class Course extends Component {
    render() {
        const query = new URLSearchParams(this.props.location.search);
        let title = '_COURSE_TITLE_';

        for (let param of query.entries()) {
            if(param[0] === 'title') {
                title = param[1];
            }
        }

        return (
            <div>
                <h1>{title}</h1>
                <p>You selected the Course with ID: {this.props.match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;