import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classes from './Cockpit.css';

const cockpit = ( props ) => {
    // This effect has no dependency and runs only once
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');

        // Clean up when the component is destroyed by the button in App.js
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        }
    }, []);

    // Run every time
    useEffect(() => {
        console.log('[Cockpit.js] 2nd useEffect');

        // Clean up after each re-render
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        }
    });

    // // This effect has a dependency on persons
    // useEffect(() => {
    //     console.log('[Cockpit.js] 3rd useEffect');

    //     // Clean up after persons is updated
    //     return () => {
    //         console.log('[Cockpit.js] cleanup work in 3nd useEffect');
    //     }
    // } , [props.persons]);

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
            <h1>{props.title}</h1>
            <p className={paragraphClasses.join(' ')}>I am a paragraph.</p>

            <button className={btnClasses}
                onClick={props.click}>
                Toggle persons
            </button>
        </div>
    );
};

cockpit.propTypes = {
    showPersons: PropTypes.bool,
    personsLength: PropTypes.number,
    title: PropTypes.string,
    click: PropTypes.func
}

export default React.memo(cockpit);