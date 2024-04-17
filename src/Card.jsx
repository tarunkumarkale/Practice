import React from 'react';

const Card = ({ id, title, description, author,del}) => {
  return (
    <div style={{ backgroundColor: 'black', borderRadius: 'lg', boxShadow: 'xl', padding: '4', display: 'flex',flexDirection:'column', alignItems: 'center',marginTop:'20px',marginLeft:'20px',marginRight:'20px'}}>
      <h1 style={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold',color:'white' }}>{title}</h1>
      <h1 style={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold',color:'white'  }}>{author}</h1>
      <h1 style={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold',color:'white'  }}>{id}</h1>
      <p style={{ textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold',color:'white' }}>{description}</p>
      <button onClick={del}>delete</button>
    </div>
  );
};

export default Card;