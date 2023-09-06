import React, { useEffect } from 'react';
import { useFetch } from './Hooks/useFetch';
import CategoryModel from './CategoryModel';
import CategoryCard from './CategoryCard.jsx';

const Hero = () => {
    const { fetchApi, data } = useFetch();

    useEffect(() => {
        fetchApi('https://api.chucknorris.io/jokes/categories');
    }, []);

    return (
        <div className='  h-fit flex flex-col items-center justify-center'>

            <div className='grid lg:grid-cols-4 md:grid-cols-2  grid-cols-4   bg-transparent text-white text-lg   md:gap-y-3  md:w-fit'>
                {null !== data && data.map((value, index) => <CategoryCard key={`category:${index}`} category={value} />)}
            </div>

            <CategoryModel />
        </div>
    )
}

export default Hero;
