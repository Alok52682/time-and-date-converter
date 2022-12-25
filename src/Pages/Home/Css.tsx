import { Box, Heading, ListItem, OrderedList, Stack, Text, UnorderedList } from '@chakra-ui/react';
import React from 'react';

const Css = () => {
    return (
        <Box w="90%" mx="auto" mt="16">
            <Stack spacing={5} w='90%' mx={'auto'}>
                <OrderedList>
                    <Heading as='h2' size='xl' fontWeight='semibold' textAlign='center' my='12' >CSS</Heading>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What are the elements of the CSS Box Model?</Text>
                        <Text fontSize='md' my='3'>Answer: The CSS box model defines the layout and design of CSS elements. The elements are content like text and images, padding the area around content, border the area around the padding, and margin the area around the border.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Differentiate between CSS3 and CSS2.</Text>
                        <Text fontSize='md' my='3'>Answer: The main difference between CSS3 and CSS2 is that CSS divides different sections into modules and supports many browsers. It also contains new General Sibling Combinators responsible for matching similar elements.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>How can CSS be integrated into an HTML page?</Text>
                        <Text fontSize='md' my='3'>Answer: There are three ways of integrating CSS into HTML: using style tags in the head section, using inline styling, writing CSS in a separate file, and linking into the HTML page by the link tag.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Define z-index.</Text>
                        <Text fontSize='md' my='3'>Answer: This is one of the most frequently asked CSS interview questions. Z-index is used to specify the stack order of elements that overlap each other. Its default value is zero and can take both negative and positive values. A higher z-index value is stacked above the lower index element. It takes the following values- auto, number, initial, and inherit.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Explain responsive web design.</Text>
                        <Text fontSize='md' my='3'>Answer: Responsive Design is a web page creation approach that uses flexible
                            images, flexible layouts, and CSS media queries. This design approach aims to build
                            web pages that detect the orientation and screen size of the visitors so that the
                            layout can be changed accordingly.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>How is the border-box different from the content box?</Text>
                        <Text fontSize='md' my='3'>Answer: Border-box consists of properties such as content, padding, and the border with
                            respect to height and width. However, Content-box is a default value property used for the box-sizing as well as it helps to add border and padding to give proper height and width to the box without having border and padding properties.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>How to center align a div inside another div?</Text>
                        <Text fontSize='md' my='3'>Answer: A div inside another div A is center aligned with the help of aligning div property to content via HTML script and CSS to the element in the DOM.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is the grid system?</Text>
                        <Text fontSize='md' my='3'>Answer: The CSS grid system is a type of powerful layout of 2 dimensional systems with
                            respect to columns and rows.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What does the: root pseudo-class refer to?</Text>
                        <Text fontSize='md' my='3'>Answer: The: root selector pseudo-class refers to the CSS selector level 3. It helps to target the highest-level parent element present in the DOM.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What do CSS Custom properties variables mean?</Text>
                        <Text fontSize='md' my='3'>Answer: CSS Custom properties variables are defined for CSS variables as well as cascading variables with specific values that can be reused.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What does !important mean in CSS?</Text>
                        <Text fontSize='md' my='3'>Answer: The style “!important” in the CSS has the highest precedence. Also, the cascaded property will be overridden with it.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Does this property work overflow: hidden?</Text>
                        <Text fontSize='md' my='3'>Answer: Overflow: the hidden property is used to specify the content’s clipping. We need to add scrollbars to the content area at the time of specified container size exceeding the
                            content limit where the content gets enclosed. This makes the content invisible via clipping; also the overflow value will be hidden.
                        </Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Differentiate between logical and physical tags.</Text>
                        <Text fontSize='md' my='3'>Answer: Logical tags mainly focus on content and are older as compared to physical ones. Logical ones do not find much usage in presentation and terms of aesthetics. At the same time, physical ones find application in presentation.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Why was CSS developed?</Text>
                        <Text fontSize='md' my='3'>Answer: CSS was first developed in 1997 as a way for web developers to define the visual appearance of the web pages that they were creating. It was intended to allow developers to separate the content and structure of a website’s code from the visual design, something that had not been possible prior to this time.</Text>
                        <Text fontSize='md' my='3'>The separation of structure and style allows HTML to perform more of the function that it was originally based on — the markup of content, without having to worry about the design and layout of the page itself, something commonly known as the “look and feel” of the page.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What are the different ways you could integrate CSS into your HTML page?</Text>
                        <Text fontSize='md' my='3'>Answer: CSS brought about a revolution in web-development and how people perceive the process of building a website. Prior to the existence of CSS, elements had to be styled in an in-line fashion or the style were implemented in the head section of an HTML page. This was changed due to the cascading nature of CSS. Here are the three major ways CSS cascades:</Text>
                        <OrderedList fontSize='md'>
                            <ListItem><Text as='b'>Elements</Text> –  The same CSS style can be applied to multiple elements to achieve the same style.</ListItem>
                            <ListItem><Text as='b'>Multiple Style One Element</Text> – Multiple styles can be applied to a particular HTML element to achieve a unique style.</ListItem>
                            <ListItem><Text as='b'>Same style, Multiple Pages</Text> – The same stylesheet can be applied to different HTML pages altogether to achieve a template styling very quickly.</ListItem>
                        </OrderedList>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Mention a few benefits of using CSS Sprites.</Text>
                        <Text fontSize='md' my='3'>Answer: CSS sprites come with their own advantages. Here are a few of them –</Text>
                        <UnorderedList fontSize='md'>
                            <ListItem>Reduce the number of HTTP requests for multiple images (only one single request is required per sprite sheet). But with HTTP2, loading multiple images is no longer much of an issue.</ListItem>
                            <ListItem>Advance downloading of assets that won’t be downloaded until needed, such as images that only appear upon :hover pseudo-states. Blinking wouldn’t be seen.</ListItem>
                        </UnorderedList>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What is responsive web design?</Text>
                        <Text fontSize='md' my='3'>Answer: Responsive design is an approach to web page creation that makes use of flexible layouts, flexible images and cascading style sheet media queries. The goal of responsive design is to build web pages that detect the visitor’s screen size and orientation and change the layout accordingly.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What are contextual selectors?</Text>
                        <Text fontSize='md' my='3'>Answer: Contextual selectors in CSS allow you to specify different styles for different parts of your document. You can assign styles directly to specific HTML tags, or, you could create independent classes and assign them to tags in the HTML. Either approach lets you mix and match styles.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>Explain the difference in approach when designing a responsive website over a mobile-first strategy?</Text>
                        <Text fontSize='md' my='3'>Answer: These two approaches are not exclusive. Making a website responsive means some elements will respond by adapting its size or other functionality according to the device’s screen size, typically the viewport width, through CSS media queries.</Text>
                    </ListItem>
                    <ListItem fontSize='xl'>
                        <Text as='b' fontSize='xl'>What are the uses of an embedded style sheet?</Text>
                        <Text fontSize='md' my='3'>Answer: Embedded style sheet gives us the privilege to define styles in one place in an HTML document.We can generate multiple classes using an embedded style sheet to use on multiple tag types of a web page and also there is no extra downloading required for importing the information.</Text>
                    </ListItem>
                </OrderedList>
            </Stack>
        </Box >
    );
};

export default Css;