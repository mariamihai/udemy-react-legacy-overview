import React from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    let btnClasses = '';
    if (props.showPersons) {
        btnClasses = classes.Red;
    }

    const paragraphClasses = [];
    // Paragraph will be red if there are at most 2 persons
    if (props.personsLength <= 2) {
        paragraphClasses.push(classes.red);
    }
    // Paragraph will be bold if there is at most 1 persons
    if (props.personsLength <= 1) {
        paragraphClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi, I'm a React App.</h1>
            <p className={paragraphClasses.join(' ')}>I am a paragraph.</p>

            <button className={btnClasses}
                onClick={props.click}>
                Toggle persons
            </button>
        </div>
    );
};

export default cockpit;