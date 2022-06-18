import React, { useState } from 'react';
import Review from '../Review/Review';
const Reviews = () => {
    const userReview = [
        { name: 'solimullah', id: 1, ratings: 4.5, comment: 'Product are beautiful' },
        { name: 'Al Amin', id: 2, ratings: 4, comment: 'Beautiful soil product which proud of my country' },
        { name: 'Azmat Ali', id: 3, ratings: 5, comment: 'Good product & see beautiful' },
        { name: 'Mazidul Islam', id: 4, ratings: 4.5, comment: 'Product are beautiful' },
        { name: 'Forman Ali', id: 5, ratings: 3.4, comment: 'Average Products' },
        { name: 'Solayman', id: 6, ratings: 5, comment: 'I am very happy for this products' },
    ]
    return (
        <div className=' bg-indigo-300'>
            <h1 className='text-white font-bold text-4xl py-5'> User Reviews</h1>
            <div className='grid md:grid-cols-3 gap-3'>
                {
                    userReview.map(user => <Review
                        key={user.id}
                        user={user}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;