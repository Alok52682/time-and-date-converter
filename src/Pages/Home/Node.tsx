import { Box, Heading, ListItem, OrderedList, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const Node = () => {
    return (
        <Box w="90%" mx="auto" mt="16">
            <Stack spacing={5} w='90%' mx={'auto'}>
                <OrderedList>
                    <Heading as='h2' size='xl' fontWeight='semibold' textAlign='center' my='12' >Node</Heading>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is NodeJS?</Text>
                        <Text fontSize='md' my='3'>Answer: Node.Js can be simply explained as it is a concept of two outcomes: runtime environment and JavaScript library. So basically, node.js will enable you to use javascript beyond the browser.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is NPM?</Text>
                        <Text fontSize='md' my='3'>Answer: Javascript operates in a runtime environment with the help of node js having its own package manager, this package manager is called NPM.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Who is the author of Node Js?</Text>
                        <Text fontSize='md' my='3'>Answer: Ryan Dahl is the author of Node.js it was almost 13 years back when the javascript environment was introduced to the world. Initially, Node is was supported by Linux and Mac OS X but later it was sponsored by Joyent.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is a V8 Engine?</Text>
                        <Text fontSize='md' my='3'>Answer: In 2008 when google chrome was launched time chrome also introduced its project of the V8 engine. It is an open-source network that can be written in the c++ language.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is ECMAScript?</Text>
                        <Text fontSize='md' my='3'>Answer: Ecmascript first appeared in 1997, which was specified and developed by Esma internationals. Evmascriot is also a programming language, which developed various other scripts like Jscript, ActionScript, and the most popularly used javascript.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What are Modules in Node Js?</Text>
                        <Text fontSize='md' my='3'>Answer: Modulus is various commands used in node js to perform tasks like addition, subtraction, division, multiplication, etc. Ins short you can do maths in js using modulus.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is the event loop in Node Js?</Text>
                        <Text fontSize='md' my='3'>Answer: Non-blocking operations in Node Js are carried out with the help of the event loop.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is an error-first callback in Node JS?</Text>
                        <Text fontSize='md' my='3'>Answer: In order to check for the proper working of the code, we need to verify error-free execution. In this regard, error-first callbacks are used, which will send error first, followed by related data to the error.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Why node is single-threaded?</Text>
                        <Text fontSize='md' my='3'>Answer: In order to upgrade the performance well, single-thread operations work better than multi-threaded operations.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What are event listeners?</Text>
                        <Text fontSize='md' my='3'>Answer: Events that are emitted by event emitters have to listen in order to continue the asynchronous execution of the threads. These objects that listen to the emitted events are known as listeners.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is a Js Engine?</Text>
                        <Text fontSize='md' my='3'>Answer: Javascript engine is used to run the java code in the browser so you can define a javascript engine as a computer program that is used to perform the java code. Initially, it was just used for interpretation and progressively it improved and got evolved.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is Node.js' Cluster module?</Text>
                        <Text fontSize='md' my='3'>Answer: Node. js runs single threaded programming, which is very memory efficient, but to take advantage of computers multi-core systems, the Cluster module allows you to easily create child processes that each runs on their own single thread, to handle the load.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What are stubs in Node.js?</Text>
                        <Text fontSize='md' my='3'>Answer: Stubs are simply functions that are used to assess and analyze individual component behavior. When running test cases, stubs are useful in providing the details of the functions executed.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Where is package.json used in Node.js?</Text>
                        <Text fontSize='md' my='3'>Answer: The ‘package.json’ file is a file that contains the metadata about all items in a project. It can also be used as a project identifier and deployed as a means to handle all of the project dependencies.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Explain callback in Node.js.</Text>
                        <Text fontSize='md' my='3'>Answer: A callback function is called after a given task. It allows other code to be run in the meantime and prevents any blocking.  Being an asynchronous platform, Node.js heavily relies on callback. All APIs of Node are written to support callbacks.</Text>
                    </ListItem>
                </OrderedList>
            </Stack>
        </Box>
    );
};

export default Node;