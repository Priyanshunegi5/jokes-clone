import React, { useContext } from 'react'
import { ModelContext } from './Contexts/ModelContext';

const CategoryCard = ({ category }) => {
    const modelContext = useContext(ModelContext);

    const handleOpening = () => {
        modelContext.setStatus(true);
        modelContext.setCategory(category);
    };

    return (
        <div onClick={handleOpening} className=' shadow-xl w-16 h-6 md:w-60 md:h-40 bg-[#FFFFFF] text-center  m-3 rounded-md hover:border border-black capitalize text-white text-lg cursor-pointer false md:p-3 '>
            <h1 className=' text-blue-900 font-bold capitalize text-sm md:text-2xl md:pt-6'>
                {category}
            </h1>

            <p className='capitalize text-purple-800 text-sm lg:block md:block hidden'>  
                unlimited jokes on {category} 
            </p>
        </div>
    )
}

export default CategoryCard;
