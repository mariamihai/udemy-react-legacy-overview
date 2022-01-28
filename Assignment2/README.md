# React Assignment 2
This is part of the legacy course which has been redone in April 2021.

The current project is part of the "React - The Complete Guide (incl Hooks, React Router, Redux)" [Udemy course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/).

The project is my implementation of the second assignment, **Section 4: Assignment 2 - Lists & Conditionals**.

An overview of all the projects involved can be found [here](https://github.com/mariamihai/udemy-react-overview).

## Implementation
The requirements are:
1. Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph)
2. Create a new Component (=> **Validation**) which receives the text length as a prop
3. Inside the Validation, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
4. Create another component (=> Char) and style it as an inline box (=> *display: 'inline-block', padding: '16px', textAlign: 'center', margin: '16ox', border: '1px solid black'*).
5. Render a list of **Chars** where each **Char** receives a different letter of the entered text (in the initial input field) as a prop.
6. When you click a **Char**, it should be removed from the entered text.

### My updates for the assignment
- I have added another component called **Input** that encapsulates the first requirement.
- I am not removing the non-alphanumeric characters currently.

## Status
**[COMPLETED]** - As I finished the assignment, I am setting a personal status of "Completed" and will probably not update this repository in the near future as this was a learning project.
