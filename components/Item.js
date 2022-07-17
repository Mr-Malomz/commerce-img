import React from 'react';

export const Item = ({ img, title, price }) => {
  return (
    <div className='h-full border border-gray-600 rounded-lg p-6'>
      <img
        alt={img}
        src={img}
        className='h-64 w-full object-fit mb-4'
      />
      <p className='text-gray-800 mb-1 text-sm'>{title}</p>
      <h5 className='text-gray-800 mb-1 font-medium text-lg'>$ {price}</h5>
    </div>
  );
};
