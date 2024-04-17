import React from 'react';

const Card = ({ id,title,description,author }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 flex flex-col align-middle">
<h1 className="text-center uppercase font-semibold">{author}</h1>  

      <h1 className="text-center uppercase font-semibold">{id}</h1>
      <p className="text-center text-gray-700">{description}</p>
    </div>
  );
};

export default Card;