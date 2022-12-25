import { Box, Heading, ListItem, OrderedList, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const ReactJs = () => {
    return (
        <Box w="90%" mx="auto" mt="16">
            <Stack spacing={5} w='90%' mx={'auto'}>
                <OrderedList>
                    <Heading as='h2' size='xl' fontWeight='semibold' textAlign='center' my='12' color='purple' >React</Heading>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is React?</Text>
                        <Text fontSize='md' my='3'>Answer: React is an open-source front-end JavaScript library that is used for building
                            user interfaces, especially for single-page applications. It is used for handling view layer
                            for web and mobile apps.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is JSX?</Text>
                        <Text fontSize='md' my='3'>Answer: JSX is an XML-like syntax extension to ECMAScript. Basically, it just provides
                            syntactic sugar for React.createElement() function, giving us the expressiveness of
                            JavaScript along with HTML-like template syntax.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is the difference between an Element and a Component?</Text>
                        <Text fontSize='md' my='3'>Answer: An Element is a plain object describing what you want to appear on the screen
                            in terms of the DOM nodes or other components. Elements can contain other Elements
                            in their props. Creating a React element is cheap. Once an element is created, it is never
                            Mutated.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is the difference between state and props?</Text>
                        <Text fontSize='md' my='3'>Answer: Both props and states are plain JavaScript objects. While both of them hold
                            information that influences the output of render, they are different in their functionality
                            with respect to components. Props get passed to the component similar to function
                            parameters whereas the state is managed within the component similar to variables
                            declared within a function.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What are synthetic events in React?</Text>
                        <Text fontSize='md' my='3'>Answer: SyntheticEvent is a cross-browser wrapper around the browser's native event.
                            Its API is the same as the browser's native event, including stopPropagation() and
                            preventDefault(), except the events work identically across all browsers.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What are inline conditional expressions?</Text>
                        <Text fontSize='md' my='3'>Answer: You can use either if statements or ternary expressions which are available
                            from JS to conditionally render expressions. Apart from these approaches, you can also
                            embed any expressions in JSX by wrapping them in curly braces and then followed by
                            JS logical operator &&.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is the use of refs?</Text>
                        <Text fontSize='md' my='3'>Answer: The ref is used to return a reference to the element. They should be avoided in
                            most cases, however, they can be useful when you need direct access to the DOM
                            element or an instance of a component.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is Virtual DOM?</Text>
                        <Text fontSize='md' my='3'>Answer: The Virtual DOM (VDOM) is an in-memory representation of the Real DOM.
                            The representation of a UI is kept in memory and synced with the "real" DOM. It's a step
                            that happens between the render function being called and the displaying of elements on
                            the screen. This entire process is called reconciliation.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is the difference between Shadow DOM and Virtual DOM?</Text>
                        <Text fontSize='md' my='3'>Answer: The Shadow DOM is a browser technology designed primarily for scoping
                            variables and CSS in web components. The Virtual DOM is a concept implemented by
                            libraries in JavaScript on top of browser APIs.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is the difference between createElement and cloneElement?</Text>
                        <Text fontSize='md' my='3'>Answer: JSX elements will be transpired to React.createElement() functions to create
                            React elements which are going to be used for the object representation of UI. Whereas
                            cloneElement is used to clone an element and pass it new props.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is Lifting State Up in React?</Text>
                        <Text fontSize='md' my='3'>Answer: When several components need to share the same changing data then it is
                            recommended to lift the shared state up to their closest common ancestor. That means if
                            two child components share the same data from their parent, then move the state to
                            parent instead of maintaining the local state in both of the child components.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is reconciliation?</Text>
                        <Text fontSize='md' my='3'>Answer: When a component's props or state changes, React decides whether an actual
                            DOM update is necessary by comparing the newly returned element with the previously
                            rendered one. When they are not equal, React will update the DOM. This process is
                            called reconciliation.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What will happen if you use setState() in the constructor?</Text>
                        <Text fontSize='md' my='3'>Answer: When you use setState(), then apart from assigning to the object state React
                            also re-renders the component and all its children. You would get an error like this: Can
                            only update a mounted or mounting component. So we need to use this.state to initialize
                            variables inside the constructor.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Do Hooks replace render props and higher-order components?</Text>
                        <Text fontSize='md' my='3'>Answer: Both render props and higher-order components render only a single child but
                            in most cases, Hooks are a simpler way to serve this by reducing nesting in your tree.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is React Router?</Text>
                        <Text fontSize='md' my='3'>Answer: React Router is a powerful routing library built on top of React that helps you
                            add new screens and flows to your application incredibly quickly, all while keeping the
                            URL in sync with what's being displayed on the page.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is Redux?</Text>
                        <Text fontSize='md' my='3'>Answer: Redux is a predictable state container for JavaScript apps based on the Flux design pattern. Redux can be used together with React, or with any other view library. It is tiny (about 2kB) and has no dependencies.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Can I dispatch an action in reducer?</Text>
                        <Text fontSize='md' my='3'>Answer: Dispatching an action within a reducer is an anti-pattern. Your reducer should be without side effects, simply digesting the action payload and returning a new state object. Adding listeners and dispatching actions within the reducer can lead to chained actions and other side effects.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Are there any similarities between Redux and RxJS?</Text>
                        <Text fontSize='md' my='3'>Answer: These libraries are very different for very different purposes, but there are some vague similarities.</Text>
                        <Text fontSize='md' my='3'>Redux is a tool for managing state throughout the application. It is usually used as an architecture for UIs. Think of it as an alternative to (half of) Angular. RxJS is a reactive programming library. It is usually used as a tool to accomplish asynchronous tasks in JavaScript. Think of it as an alternative to Promises. Redux uses the Reactive paradigm because the Store is reactive. The Store observes actions from a distance, and changes itself. RxJS also uses the Reactive paradigm, but instead of being an architecture, it gives you basic building blocks, Observables, to accomplish this pattern.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is the difference between React context and React Redux?</Text>
                        <Text fontSize='md' my='3'>Answer: You can use Context in your application directly and is going to be great for passing down data to deeply nested components which what it was designed for.</Text>
                        <Text fontSize='md' my='3'>Whereas Redux is much more powerful and provides a large number of features that the Context API doesn't provide. Also, React Redux uses context internally but it doesn't expose this fact in the public API.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Why are Redux state functions called reducers?</Text>
                        <Text fontSize='md' my='3'>Answer: Reducers always return the accumulation of the state (based on all previous and current actions). Therefore, they act as a reducer of state. Each time a Redux reducer is called, the state and action are passed as parameters. This state is then reduced (or accumulated) based on the action, and then the next state is returned. You could reduce a collection of actions and an initial state (of the store) on which to perform these actions to get the resulting final state.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is the difference between component and container in React Redux?</Text>
                        <Text fontSize='md' my='3'>Answer: <Text as='b'>Component</Text> is a class or function component that describes the presentational part of your application.</Text>
                        <Text fontSize='md' my='3'><Text as='b'>Container </Text>is an informal term for a component that is connected to a Redux store. Containers subscribe to Redux state updates and dispatch actions, and they usually don't render DOM elements; they delegate rendering to presentational child components.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>How to structure Redux top level directories?</Text>
                        <Text fontSize='md' my='3'>Answer: Most of the applications has several top-level directories as below:</Text>
                        <OrderedList fontSize='md'>
                            <ListItem><Text as='b'>Components:</Text> Used for dumb components unaware of Redux.</ListItem>
                            <ListItem><Text as='b'>Containers: </Text>Used for smart components connected to Redux.</ListItem>
                            <ListItem><Text as='b'>Actions: </Text>Used for all action creators, where file names correspond to part of the app.</ListItem>
                            <ListItem><Text as='b'>Reducers:</Text> Used for all reducers, where files name correspond to state key.</ListItem>
                            <ListItem><Text as='b'>Store:</Text> Used for store initialization.</ListItem>
                            <Text as='b'>This structure works well for small and medium size apps.</Text>
                        </OrderedList>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is the mental model of redux-saga?</Text>
                        <Text fontSize='md' my='3'>Answer: Saga is like a separate thread in your application, that's solely responsible for side effects. redux-saga is a redux middleware, which means this thread can be started, paused and cancelled from the main application with normal Redux actions, it has access to the full Redux application state and it can dispatch Redux actions as well.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is Redux Thunk?</Text>
                        <Text fontSize='md' my='3'>Answer: Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The inner function receives the store methods dispatch() and getState() as parameters.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is Redux DevTools?</Text>
                        <Text fontSize='md' my='3'>Answer: Redux DevTools is a live-editing time travel environment for Redux with hot reloading, action replay, and customizable UI. If you don't want to bother with installing Redux DevTools and integrating it into your project, consider using Redux DevTools Extension for Chrome and Firefox.</Text>
                    </ListItem>
                </OrderedList>
            </Stack>
        </Box>
    );
};

export default ReactJs;