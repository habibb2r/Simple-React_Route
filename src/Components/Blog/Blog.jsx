import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <div className='blog'>
                <h2>When Context API use?</h2>
                <p>The Context API in React is typically used when you need to manage global state or share data across multiple components in a React application without passing props down through multiple levels of component hierarchy.If you have a theme or styling configuration that needs to be accessed and used by multiple components throughout your application, you can use the Context API to manage and share that data across components without passing it down explicitly as props.f your application has global settings or configurations that need to be accessed by multiple components, such as API endpoints, server URLs, or other configuration values, the Context API can provide a convenient way to manage and share this data.</p>
            </div>
            <div className='blog'>
                <h2>What is Custom Hook?</h2>
                <p>Custom hooks are typically created using the "use" prefix in their function names, following the convention of other built-in hooks in React, such as useState, useEffect, and useContext. Custom hooks can be defined in your own codebase and can be used just like any other hook in React.Custom hooks allow you to encapsulate reusable logic that can be used across multiple components in your application. This promotes code reusability and can help you avoid duplicating code across different parts of your application</p>
            </div>
            <div className='blog'>
                <h2>What is useRef?</h2>
                <p>useRef is a hook provided by React that allows you to create a mutable reference to a DOM element or any other value that persists across renders in a functional component. It is commonly used to access and interact with DOM elements directly or to store and manage mutable values that should not trigger a component re-render when they change.The useRef hook returns a mutable object with a current property that can be used to store and access the current value.</p>
            </div>
            <div className='blog'>
                <h2>What is useMemo?</h2>
                <p>useMemo is a hook provided by React that allows you to optimize the performance of your functional components by memoizing the result of a computation and only recomputing it when the dependencies change. It helps to prevent unnecessary re-computations of expensive computations or calculations in your components, improving performance by avoiding redundant work.

The useMemo hook takes two arguments: a function that computes a value, and an array of dependencies</p>
            </div>
        </div>
    );
};

export default Blog;