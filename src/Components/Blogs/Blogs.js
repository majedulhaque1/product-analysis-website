import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <div className='blogs'>
                <h2>What is context api?</h2>
                <p>
                    Basicaly context  api help to provide and pass data parent component to child component.If we send data or pass data parent to child component then we can use (Props drilling).Context api assists in solving prop drilling of our application.Now We what is Props Drilling.If we went to pass data and update state parent to child to sibling and grand siblling.Then if we went to pass data and update state parent to grand child then it is not posisible.We can send only uniderectional way as like parent to child to grand child then it posible otherwise we can not sent data or pass data directly.But Context api is different we can send data to any component any component.And also we can update states.Context api share data to any whare.
                    If we can imagine a components tree.If we wrap this tree with the context provider.Then we can send data to any component.
                </p>
            </div>
            <div className='blogs'>
                <h2>What is semantic tag?</h2>
                <p>
                    In html have lots of tag but all tag are not semantic.Like (div).Which tags are clearly define or represents it is contents.And we have many semantic tag like(artile,aside,details,figure,header,main) and many more.Semantic tag represents which type of tag.(div) is not is not represents what is the content.But semantice tag represents like (article).If we see the (article) in our website or web application then we can understand which contents have in there.But we can not understand which type of contents there exist.But we can understand to see semantic tag which type of content there exist.
                </p>
            </div>
            <div className='blogs'>
                <h2>What is inline block element or block element?</h2>
                <p>
                    Block element always start on new line.And block element takes full width.
                </p>
                <p>
                    Inline block element not start new line.And inline element takes only nessesary width.
                </p>
            </div>
        </div>
    );
};

export default Blogs;