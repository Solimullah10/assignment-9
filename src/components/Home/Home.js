import React from 'react';

const Home = () => {

    return (
        <div>
            <div className='grid md:grid-cols-2 w-11/12 mx-auto'>
                <div>
                    <h1 className='text-4xl mb-10 md:mr-14 text-justify'>This is Our official website. Please give your feedback here</h1>
                    <p className='text-xl text-justify mb-10'>Earthenware or pottery is the ancient tradition of our abhaman village Bengal. At one time there was a widespread use and demand for earthenware in Bangladesh. In the evolution of time with the touch of modernity, many skilled handicrafts made of clay have been lost.</p>
                </div>
                <img className='md:ml-16 lg:ml-52 w-64 mx-auto' src='filter.png' alt="" />
            </div>
            <button className='text-2xl rounded px-20 py-5 mt-5 bg-indigo-600'>Reviews</button>

        </div>
    );
};

export default Home;