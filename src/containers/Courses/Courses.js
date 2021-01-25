import React, { Component } from 'react';

import { Route, Link } from 'react-router-dom';

import Course from '../Course/Course';

import './Courses.css';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    showCourseHandler = (courseId) => {
        this.props.history.push('/courses/' + courseId);
    }

    render() {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map(course => {
                            return <Link
                                to={{
                                    search: '?title=' + course.title
                                }}
                                key={course.id}>
                                <article className="Course"
                                    onClick={() => this.showCourseHandler(course.id)}>{course.title}</article>
                            </Link>;
                        })
                    }
                </section>


                <Route path={this.props.match.url + "/:courseId"} exact component={Course} />
            </div>
        );
    }
}

export default Courses;