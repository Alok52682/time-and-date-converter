import { Heading, Stack, OrderedList, Box, ListItem, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';

const JavaScript = () => {
    return (
        <Box w="90%" mx="auto" mt="16">
            <Stack spacing={5} w='90%' mx={'auto'}>
                <OrderedList>
                    <Heading as='h2' size='xl' fontWeight='semibold' textAlign='center' my='12' >JavaScript</Heading>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'> Difference between var and let keyword in javascript.</Text>
                        <Text fontSize='md' my='3'>Answer: Some differences are –</Text>
                        <UnorderedList fontSize='md'>
                            <ListItem>From the very beginning, the 'var' keyword was used in JavaScript programming whereas the keyword 'let' was just added in 2015.</ListItem>
                            <ListItem>The keyword 'Var' has a function scope. Anywhere in the function, the variable specified using var is accessible but in ‘let’ the scope of a variable declared with the 'let' keyword is limited to the block in which it is declared. Let's start with a Block Scope.</ListItem>
                            <ListItem>In ECMAScript 2015, let and const are hoisted but not initialized. Referencing the variable in the block before the variable declaration results in a ReferenceError because the variable is in a "temporal dead zone" from the start of the block until the declaration is processed.</ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is the reason to choose the name let as a keyword?</Text>
                        <Text fontSize='md' my='3'>Answer: let is a mathematical statement that was adopted by early programming
                            languages like Scheme and Basic. It has been borrowed from dozens of other
                            languages that use let already as a traditional keyword as close to var as possible.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What are modules?</Text>
                        <Text fontSize='md' my='3'>Answer: Modules refer to small units of independent, reusable code and also act as the
                            foundation of many JavaScript design patterns. Most of the JavaScript modules export
                            an object literal, a function, or a constructor.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is scope in javascript?</Text>
                        <Text fontSize='md' my='3'>Answer: Scope is the accessibility of variables, functions, and objects in some particular
                            part of your code during runtime. In other words, scope determines the visibility of
                            variables and other resources in areas of your code.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'> What is a service worker?</Text>
                        <Text fontSize='md' my='3'>Answer: A Service worker is basically a script that runs in the background, separate from
                            a web page, and provides features that don't need a web page or user interaction. Some
                            of the major features of service workers are Rich offline experiences, periodic
                            background syncs, push notifications, intercepting, handling network requests and
                            programmatically managing a cache of responses.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>How do you manipulate DOM using a service worker?</Text>
                        <Text fontSize='md' my='3'>Answer: Service worker can't access the DOM directly. But it can communicate with the
                            pages it controls by responding to messages sent via the postMessage interface, and
                            those pages can manipulate the DOM.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>How do you reuse information across service worker restarts?</Text>
                        <Text fontSize='md' my='3'>Answer: The problem with a service worker is that it gets terminated when not in use, and restarted when it's next needed, so you cannot rely on the global state within a service worker's onfetch and onmessage handlers. In this case, service workers will have access to IndexedDB API in order to persist and reuse across restarts.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is web storage?</Text>
                        <Text fontSize='md' my='3'>Answer: Web storage is an API that provides a mechanism by which browsers can store
                            key/value pairs locally within the user's browser, in a much more intuitive fashion than
                            using cookies. Web storage provides two mechanisms for storing data on the client.
                        </Text>
                        <UnorderedList fontSize='md'>
                            <ListItem><Text as='b'>Local storage:</Text> It stores data for current origin with no expiration date.</ListItem>
                            <ListItem><Text as='b'>Session storage:</Text> It stores data for one session and the data is lost when the
                                browser tab is closed.
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is a post message?</Text>
                        <Text fontSize='md' my='3'>Answer: Post message is a method that enables cross-origin communication between
                            Window objects. Generally, scripts on different pages are allowed to access each other if and only if the pages follow the same-origin policy.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Why do you need a Cookie?</Text>
                        <Text fontSize='md' my='3'>Answer: Cookies are used to remember information about the user profile(such as
                            username). It basically involves two steps,
                        </Text>
                        <UnorderedList fontSize='md'>
                            <ListItem>When a user visits a web page, the user profile can be stored in a cookie.</ListItem>
                            <ListItem> Next time the user visits the page, the cookie remembers the user profile.</ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is the main difference between localStorage and sessionStorage?</Text>
                        <Text fontSize='md' my='3'>Answer: LocalStorage is the same as SessionStorage but it persists the data even when
                            the browser is closed and reopened(i.e it has no expiration time) whereas in sessionStorage data gets cleared when the page session ends.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Why do you need web storage?</Text>
                        <Text fontSize='md' my='3'>Answer: Web storage is more secure, and large amounts of data can be stored locally,
                            without affecting website performance. Also, the information is never transferred to the server. Hence this is a more recommended approach than Cookies.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is a null value?</Text>
                        <Text fontSize='md' my='3'>Answer: The isNaN() function is used to determine whether a value is an illegal number
                            (Not-a-Number) or not. i.e, This function returns true if the value equates to NaN. Otherwise it
                            returns false.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What are global variables?</Text>
                        <Text fontSize='md' my='3'>Answer: Global variables are those that are available throughout the length of the code
                            without any scope. The var keyword is used to declare a local variable but if you omit it then it will become global variable.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'> Is javascript a statically typed or a dynamically typed language?</Text>
                        <Text fontSize='md' my='3'>Answer: JavaScript is a dynamically typed language. In a dynamically typed language, the type of a variable is checked during run-time in contrast to a statically typed language, where the type of a variable is checked during compile-time.</Text>
                        <Text fontSize='md' my='3'>Since javascript is a loosely(dynamically) typed language, variables in JS are not associated with any type. A variable can hold the value of any data type.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Which is faster between JavaScript and an ASP script?</Text>
                        <Text fontSize='md' my='3'>Answer: JavaScript is faster. JavaScript is a client-side language,, and thus it does not need the assistance of the webserver to execute. On the other hand, ASP is a server-side language and hence is always slower than JavaScript. Javascript now is also a server-side language (nodejs).</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What are undeclared and undefined variables?</Text>
                        <Text fontSize='md' my='3'>Answer: Undeclared variables are those that do not exist in a program and are not declared. If the program tries to read the value of an undeclared variable, then a runtime error is encountered.</Text>

                        <Text fontSize='md' my='3'> Undefined variables are those that are declared in the program but have not been given any value. If the program tries to read the value of an undefined variable, an undefined value is returned.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Does JavaScript support automatic type conversion?</Text>
                        <Text fontSize='md' my='3'>Answer: Yes, JavaScript does support automatic type conversion. It is the common way of type conversion used by JavaScript developers</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>How to detect the operating system on the client machine?</Text>
                        <Text fontSize='md' my='3'>Answer: In order to detect the operating system on the client machine, the navigator. Platform string (property) should be used.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What do you mean by NULL in Javascript?</Text>
                        <Text fontSize='md' my='3'>Answer: The NULL value is used to represent no value or no object. It implies no object or null string, no valid boolean value, no number, and no array object.</Text>
                    </ListItem>
                </OrderedList>
            </Stack>
        </Box>
    );
};

export default JavaScript;