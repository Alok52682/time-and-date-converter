import { Box, Center, Heading, ListItem, OrderedList, Stack, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';

const Html = () => {
    return (
        <Box w="90%" mx="auto" mt="16">
            <Center mb='10'>
                <Heading as='h2' size='2xl'  >Common Technical 100 Web Developer <br /> Interview Questions</Heading>
            </Center>
            <Stack spacing={5} w='90%' mx={'auto'}>
                <Text as='p'>Technical interview questions put your web development knowledge to the test. In these questions, you need to explain how you would apply your skills for various problems or tasks.</Text>
                <Text as='p'>Any real-world examples you can provide illustrating how you applied these skills will really make your answers resonate with hiring managers.</Text>
                <Text as='p'>A few examples of technical Web Developer interview questions include:</Text>
                <OrderedList>
                    <Heading as='h2' size='xl' fontWeight='semibold' textAlign='center' my='12' >HTML</Heading>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What are the advantages of HTTP 2.0 over HTTP 1.1?</Text>
                        <Text fontSize='md' my='3'>Answer: This technical question is meant to test your overall knowledge, explore your experience level with both HTTP 2.0 and HTTP 1.1, and ensure you have the communication skills that a good Web Developer needs.</Text>
                        <Text fontSize='md' my='3'>In other words, it is important to provide a concise and easy-to-understand answer. HTTP 2.0 improves search engine rankings, consumes less broadband, and offers better loading speeds.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>As a Web Developer, what steps do you take to optimize your site’s loading time?</Text>
                        <Text fontSize='md' my='3'>Answer: There are many different ways you can reduce the page load time:</Text>
                        <UnorderedList fontSize='md'>
                            <ListItem>Cleaning the web code</ListItem>
                            <ListItem>Minimizing redirects</ListItem>
                            <ListItem>Caching</ListItem>
                            <ListItem>Choosing smaller images or reducing image size</ListItem>
                            <ListItem>Removing extraneous widgets</ListItem>
                            <ListItem>Reducing lookups</ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Are the HTML tags and elements the same thing?</Text>
                        <Text fontSize='md' my='3'>Answer: HTML tags are used to hold the HTML element. HTML element holds the content. HTML attributes are used to describe the characteristic of an HTML element in detail. Whatever written within a HTML tag are HTML elements.</Text>
                    </ListItem>
                    {/* <ListItem fontSize='xl' >
                            <Text as='b' fontSize='xl'>What are tags and attributes in HTML?</Text>
                            <Text fontSize='md' my='3'>Answer: Tags are the primary component of the HTML that defines how the content will be
structured/ formatted, whereas Attributes are used along with the HTML tags to define the
characteristics of the element. For example, <p align=” end”>paragraph</p>, in this the
‘align’ is the attribute using which we will align the paragraph to show in the center of the view.
</Text>
                        </ListItem> */}
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is the difference between the ‘id’ attribute and the ‘class’ attribute of HTML elements?</Text>
                        <Text fontSize='md' my='3'>Answer: Multiple elements in HTML can have the same class value, whereas a value of the id attribute of one element cannot be associated with another HTML element.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is the ‘class’ attribute in HTML?</Text>
                        <Text fontSize='md' my='3'>Answer: The class attribute is used to specify the class name for an HTML element. Multiple elements in HTML can have the same class value. Also, it is mainly used to associate the styles written in the stylesheet with the HTML elements.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is the difference between “display: none” and “visibility: hidden”, when used as
                            attributes to the HTML element?
                        </Text>
                        <Text fontSize='md' my='3'>Answer: When we use the attribute “visibility: hidden” for an HTML element then that element will be hidden from the webpage but still takes up space. Whereas, if we use the “display: none” attribute for an HTML element then the element will be hidden, and also it won’t take up any space on the webpage.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>In how many ways can we specify the CSS styles for the HTML element?
                        </Text>
                        <Text fontSize='md' my='3'>Answer: There are three ways in which we can specify the styles for HTML elements:</Text>
                        <UnorderedList fontSize='md'>
                            <ListItem><Text as='b'>Inline:</Text> Here we use the ‘style’ attribute inside the HTML element.</ListItem>
                            {/* <ListItem>Internal: Here we use the <style> tag inside the <head> tag. To apply the style we bind
                                    the elements using ‘id’ or ‘class’ attributes.
                                </ListItem> */}
                            {/* <ListItem>External: Here we use the <link> tag inside <head> tag to reference the CSS file into our HTML code. Again the binding between elements and styles is done using ‘id’ or ‘class’ attributes.</ListItem> */}
                        </UnorderedList>
                    </ListItem>
                    {/* <ListItem fontSize='xl'>
                            <Text as='b' fontSize='xl'> Difference between link tag <link> and anchor tag <a>?</Text>
                            <Text fontSize='md' my='3'>Answer: The anchor tag <a> is used to create a hyperlink to another webpage or to a certain part of the webpage and these links are clickable, whereas, link tag <link> defines a link between a document, an external resource and these are not clickable.</Text>
                        </ListItem> */}
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What are some of the advantages of HTML5 over its previous versions?</Text>
                        <Text fontSize='md' my='3'>Answer: Some advantages of HTML5 are:</Text>
                        <OrderedList fontSize='md'>
                            <ListItem>It has Multimedia Support.</ListItem>
                            <ListItem>It has the capability to store offline data using SQL databases and application cache.</ListItem>
                            <ListItem>Javascript can be run in the background.</ListItem>
                            <ListItem>HTML5 also allows users to draw various shapes like rectangles, circles, triangles, etc.</ListItem>
                            <ListItem>Included new Semantic tags and form control tags.</ListItem>
                        </OrderedList>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Inline and block elements in HTML5?</Text>
                        <Text fontSize='md' my='3'>Answer: <Text as='b'>Inline:</Text> Inline elements just take up the space that is absolutely necessary for the
                            content and does not start from a new line.
                        </Text>
                        {/* <Text>Example:- <span>, <a>, <strong>, <img>, <button>, <em>, <select>, <abbr>, <label>, <sub>, <cite>, <abbr>, <script>, <label>, <i>, <input>, <output>, <q>, etc.</Text> */}
                        <Text fontSize='md' my='3'><Text as='b'>Block:</Text> Block elements start on a new line and consume the full width of the page available.</Text>
                        {/* <Text>Example:- <div>, <p>, <header>, <footer>, <h1>...<h6>, <form>, <table>, <canvas>, <video>, <blockquote>, <pre>, <ul>, <ol>, <figcaption>, <figure>, <hr>, <article>, <section>, etc.</Text> */}
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Is drag and drop possible using HTML5 and how?</Text>
                        <Text fontSize='md' my='3'>Answer: Yes, in HTML5 we can drag and drop an element. This can be achieved using the drag-and-drop-related events to be used with the element which we want to drag and drop.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What are the significant goals of the HTML5 specification?</Text>
                        <Text fontSize='md' my='3'>Answer: These were the target area of the HTML5 specs:</Text>
                        <OrderedList fontSize='md'>
                            {/* <ListItem>Introduction of new element tags to better structure the web page such as <header> tag.</ListItem> */}
                            <ListItem>Forming a standard in cross-browser behavior and support for different devices and
                                platforms
                            </ListItem>
                            <ListItem>Backward compatible with the older version HTML web pages.</ListItem>
                            {/* <ListItem>Introduction of basic interactive elements without the dependency of plugins such as
                                    <video> tag instead of the flash plugin
                                </ListItem> */}
                        </OrderedList>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Explain the concept of web storage in HTML5.</Text>
                        <Text fontSize='md' my='3'>Answer: This web storage helps in storing some of the static data in the local storage of the browser so that we do not need to fetch it from the server every time we need it. There is a size limit based on different browsers. This helps in decreasing the load time and a smooth user experience. There are two types of web storage that are used to store data locally in HTML5:</Text>
                        <UnorderedList fontSize='md'>
                            <ListItem><Text as='b'>Local Storage</Text> - This helps in storing data that will be retained even though the user
                                reopens the browser. It is stored for each web app on different browsers.
                            </ListItem>
                            <ListItem><Text as='b'>Session Storage</Text> - This is used for one session only. After the user closes the browser
                                this gets deleted.
                            </ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Can we display a web page inside a web page or Is nesting of webpages possible?</Text>
                        {/* <Text fontSize='md' my='3'>Answer: Yes, we can display a web page inside another HTML web page. HTML provides a tag <iframe> using which we can achieve this functionality.</Text> */}
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>How is Cell Padding different from Cell Spacing?</Text>
                        <Text fontSize='md' my='3'>Answer: Cell Spacing is the space or gap between two consecutive cells. Whereas, Cell Padding is the space or gap between the text/ content of the cell and the edge/ border of the cell. Please refer to the above figure example to find the difference.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is an image map?</Text>
                        {/* <Text fontSize='md' my='3'>Image map facilitates you to link many different web pages using a single image. It is represented by <map> tag. You can define shapes in images that you want to make part of an image mapping.</Text> */}
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is a style sheet?</Text>
                        <Text fontSize='md' my='3'>Answer: A style sheet is used to build a consistent, transportable, and well-designed style template. You can add these templates on several different web pages. It describes the look and formatting of a document written in markup language.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What are the entities in HTML?</Text>
                        <Text fontSize='md' my='3'>Answer:An URL is encoded to convert non-ASCII characters into a format that can be used over the Internet because a URL is sent over the Internet by using the ASCII character-set only. If a URL contains characters outside the ASCII set, the URL has to be converted. The non-ASCII characters are replaced with a "%" followed by hexadecimal digits.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What are the significant goals of the HTML5 specification?</Text>
                        <Text fontSize='md' my='3'>Answer: These were the target area of the HTML5 specs:</Text>
                        <UnorderedList fontSize='md'>
                            {/* <ListItem>Introduction of new element tags to better structure the web page such as <header> tag.</ListItem> */}
                            <ListItem>Forming a standard in cross-browser behavior and support for different devices and platforms.</ListItem>
                            <ListItem>Backward compatible with the older version HTML web pages.</ListItem>
                            <ListItem>Introduction of basic interactive elements without the dependency of plugins such as video tag instead of the flash plugin.</ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is the Geolocation API in HTML5?</Text>
                        <Text fontSize='md' my='3'>Answer: Geolocation API is used to share the physical location of the client with websites. This helps in serving locale-based content and a unique experience to the user, based on their location. This works with a new property of the global navigator object and most of the modern browsers support this.</Text>
                    </ListItem>
                </OrderedList>
            </Stack>
        </Box >
    );
};

export default Html;