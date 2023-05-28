import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
const Error = () => {
    const error= useRouteError();
    return (
        <div className='flex justify-center items-center h-[100vh] flex-col gap-5'>
            <h3>{error.error.message}</h3>
            <button className='py-3 px-3 bg-green-600 text-white rounded-lg'>Go <Link to="/">Go Back Home</Link> </button>
        </div>
    );
};

export default Error;