import React, { useEffect } from 'react';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
    // This effect has no dependency and runs only once
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        setTimeout(() => {
            alert('Hi!');
        }, 1000);
    }, []);

    // This effect has a dependency on persons
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        setTimeout(() => {
            alert('Saved data to the cloud.');
        }, 1000);
    }, [props.persons]);

    // Can have multiple useEffect()

    let btnClasses = '';
    if (props.showPersons) {
        btnClasses = classes.Red;
    }

    const paragraphClasses = [];
    // Paragraph will be red if there are at most 2 persons
    if (props.persons.length <= 2) {
        paragraphClasses.push(classes.red);
    }
    // Paragraph will be bold if there is at most 1 persons
    if (props.persons.length <= 1) {
        paragraphClasses.push(classes.bold);
    }

    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={paragraphClasses.join(' ')}>I am a paragraph.</p>

            <button className={btnClasses}
                onClick={props.click}>
                Toggle persons
            </button>
        </div>
    );
};

export default cockpit;