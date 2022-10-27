import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSide = () => {
    const [category, setCategory] = useState([])
    useEffect(()=>{
        fetch('https://assignment10-server-site-snowy.vercel.app/course-category')
        .then(res => res.json())
        .then(data => setCategory(data))
    }, [])
    return (
        <div>
            <h2>left side categories: {category.length}</h2>
            {
                category.map(categories => <p key={categories.id}>
                    <Link to={`/corse-details/${categories.id}`}>{categories.name}</Link>
                </p> )
            }
        </div>
    );
};

export default LeftSide;