import React, { useState } from 'react';
import Review from '../Review/Review';
const Reviews = () => {
    const [users, setUsers] = useState([]);

    useState(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            {
                users.map(user => <Review
                    key={user.id}
                    user={user}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;