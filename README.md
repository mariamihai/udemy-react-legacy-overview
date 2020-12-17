# React Assignment 2

The current project is part of the "React - The Complete Guide (incl Hooks, React Router, Redux)" [Udemy course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/).

The project is my implementation of the second assignment, **Section 4: Assignment 2 - Lists & Conditionals**.

An overview of all the projects involved can be found [here](https://github.com/mariamihai/udemy-react-overview).

## Implementation
The requirements are:
1. Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph)
2. Create a new Component (=> **ValidationComponent**__**) which receives the text length as a prop
3. Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)
4. Create another component (=> CharComponent) and style it as an inline box (=> *display: 'inline-block', padding: '16px', textAlign: 'center', margin: '16ox', border: '1px solid black'*).
5. Render a list of **CharComponents** where each **CharComponent** receives a different letter of the entered text (in the initial input field) as a prop.
6. When you click a CharComponent, it should be removed from the entered text.

### My updates to the assignment
- I have added another component called **InputComponent** which encapsulates the first requirement.
- I am not removing the non-alphanumeric characters currently.