# React - The Complete Guide (incl Hooks, React Router, Redux) - Legacy projects

Overview of the entire course and all the projects from "React - The Complete Guide (incl Hooks, React Router, Redux)" [Udemy course](https://www.udemy.com/course/react-the-complete-guide-incl-redux/).

The course was redone and the next projects are based on the previous course. The new code can be found [here](https://github.com/mariamihai/udemy-react-overview).

## Main projects

### React Complete Guide

My implementation of the initial project related to this course can be found [here](./CompleteGuide/).

### The burger application

My implementation of the main project of the course can be found [here](./BurgerApp/).

### Http related application

My implementation for Section 9 - "Reaching out to the Web (Http / Ajax)" - [here](./Http/).

## Assignments

### Assignment 1

The implementation for **Section 3: Assignment 1 - The Base Syntax** can be found [here](./Assignment1/).

### Assignment 2

The implementation for **Section 4: Assignment 2 - Lists & Conditionals** can be found [here](./Assignment2/).

### Assignment 3

The implementation for **Section 11: Assignment 3 - Routing** can be found [here](./Assignment3/).

## Merging multiple repositories

Start with a repo that has at least one commit (it contains a master / main branch).

For simplicity, make sure the new repo files are in a folder.

Add a remote for the repo to be merged:
> git remote add -f another_repo <Another repo URL>

Merge the files into current repo master branch:
> git merge another_repo/master --allow-unrelated-histories

Remove the remote for the added repo:
> git remote remove another_repo

The history is now concatenated and the second repository can be deleted.

## Status

**[COMPLETED]** - I am setting a personal status of "Completed" and will probably not update this repository in the near future as this was a learning course.
