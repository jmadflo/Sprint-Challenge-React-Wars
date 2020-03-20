# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

React solves the problem of having the application update as a result of a change of state (defined below). The ease with which it allows you to build an app that successfully responds to these changes is a big feature. Another is that it allows us to build reusable components in seperate files, which is a good way to work on large applications with many people working on them.

1. What does it mean to think in react?

To think in react is to think of the app that you are trying to contain as a series of nested components in a Virtual DOM in which the App.js container file is at the top, and the smallest components are at the bottom receiving information from previous generations.

1. Describe state.

State is the aspects of the app that will change over time or as the result of interaction from the user. When state is changed, the components that use the piece of state that changed are rerendered with the updated piece of state.

1. Describe props.

Props are information that is passed down from a parent component to a child component and that the child component will need in order to render as desired. Props is an object in which that information is stored in the form of key-value pairs.

1. What are side effects, and how do you sync effects in a React component to state or prop changes?

Side effects are changes to a particular component that we make inside of a useEffect method. We can link these effects to changes in props or state by making dependencies the parts of state or props that we are 'listening' for changes. To make them dependencies we pass them inside of an array as a second argument to the useEffect method.
