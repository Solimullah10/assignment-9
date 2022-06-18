import React, { useDeferredValue } from 'react';
import { Link } from 'react-router-dom';
import Review from '../Review/Review';


const Home = () => {
    const userReview = [
        { name: 'solimullah', id: 1, ratings: 4.5, comment: 'Product are beautiful' },
        { name: 'Al Amin', id: 2, ratings: 4, comment: 'Beautiful soil product which proud of my country' },
        { name: 'Azmat Ali', id: 3, ratings: 5, comment: 'Good product & see beautiful' },
        { name: 'Mazidul Islam', id: 4, ratings: 4.5, comment: 'Product are beautiful' },
        { name: 'Forman Ali', id: 5, ratings: 3.4, comment: 'Average Products' },
        { name: 'Solayman', id: 6, ratings: 5, comment: 'I am very happy for this products' },
    ]
    return (
        <div>
            <div className='grid md:grid-cols-2 w-11/12 mx-auto'>
                <div>
                    <h1 className='text-4xl mb-10 md:mr-14 text-justify'>This is Our official website. Please give your feedback here</h1>
                    <p className='text-xl text-justify mb-10'>Earthenware or pottery is the ancient tradition of our abhaman village Bengal. At one time there was a widespread use and demand for earthenware in Bangladesh. In the evolution of time with the touch of modernity, many skilled handicrafts made of clay have been lost.</p>
                </div>
                <img className='md:ml-16 lg:ml-52 w-64 mx-auto' src='filter.png' alt="" />
            </div>
            <h1 className='text-green-600 font-bold text-4xl py-5'>User Review</h1>
            <div className='grid md:grid-cols-3 gap-3'>

                {
                    userReview.slice(0, 3).map(user => <Review key={user.id} user={user}></Review>)
                }
            </div>
            <Link to='/Reviews'>
                <button className='text-2xl text-white rounded px-20 py-5 my-5 bg-indigo-600'>Reviews...{userReview.length}</button>
            </Link>

        </div>
    );
};

export default Home;