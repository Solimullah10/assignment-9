import React from 'react';

const Blogs = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <h1 className='text-4xl text-left mt-4'>Context Api Explain </h1>
            <p className='text-justify'>
                The Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.
                React context is great when you are passing data that can be used in any component in your application
                i. Theme data (like dark or light mode)
                ii. User data (the currently authenticated user)
                iii. Location-specific data (like user language or locale)
                Looking at the example above, the render props pattern for consuming context may look a bit strange to you.
                Another way of consuming context became available in React 16.8 with the arrival of React hooks. We can now consume context with the useContext hook.
                Instead of using render props, we can pass the entire context object to React.useContext() to consume context at the top of our component.
            </p>
            <h1 className='text-4xl text-left mt-4'>Semantic Tag Explain</h1>
            <p className='text-justify'>
                A semantic element clearly describes its meaning to both the browser and the developer.
                there are semantic tag list are-
                article, aside, details, main, mark, nav, section, summary, time, header, footer, figure etc.
                Semantic HTML5 addresses this shortcoming by defining specific tags to indicate clearly what role is played by the content those tags contain. That explicit information helps robots/crawlers like Google and Bing to better understand which content is important, which is a subsidiary, which is for navigation, and so on.
                By adding semantic HTML tags to your pages, you provide additional information that helps Google and Bing understand the
            </p>
            <h1 className='text-4xl text-left mt-4'>Inline block element Explain</h1>
            <p className='text-justify'>
                Inline elements are those which only occupy the space bounded by the tags defining the element, instead of breaking the flow of the content.An inline element does not start on a new line.
                An inline element only takes up as much width as necessary.
                A list of inline elements tags are- a, audio, big, button, data, i, img, input, level, object, picture, small, span, var, time, mark, strong etc.
                How an element behaves when styled with CSS will change based on the display mode of an element. Some CSS properties react differently for each display type. We'll learn more about this behavior when we start to lay out pages in CSS.
                inline elements don't start on new lines, meaning they line up right next to each other on the same line if there's enough room for them because they can't take top/bottom margins or width/height properties. But, they can still be styled with left/right margins as well as with padding.
            </p>
        </div>
    );
};

export default Blogs;