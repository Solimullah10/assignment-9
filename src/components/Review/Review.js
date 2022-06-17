import React from 'react';
import './Review.css'
const Review = (props) => {
    const { id, name, email } = props.user;
    return (
        <div className='col-3'>
            <p >name: {name}</p>
            <p >name: {name}</p>
        </div>
    );
};

export default Review;