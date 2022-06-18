import React from 'react';
const Review = (props) => {
    const { id, name, ratings, comment } = props.user;
    // const url = `p${id}.jpg`;
    return (
        <div className='bg-white p-5 m-5 rounded h-72'>
            <img className='w-32 rounded-full mx-auto mb-8' src={`p${id}.jpg`} alt="" />
            <div>
                <h1 className='text-2xl' >{name} <span className='ml-2'>({ratings})</span> <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 inline-flex text-yellow-500" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg></h1>
                <p>{comment}</p>

            </div>
        </div>
    );
};

export default Review;