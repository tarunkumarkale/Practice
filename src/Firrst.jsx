import React, { useState } from 'react'
import Card from './Card';

const Firrst = () => {
    const fakeData = [
        {
          id: 1,
          title: 'Book 1',
          description: 'This is the first book.',
          author: 'Author 1',
          publishedDate: '2022-01-01',
        },
        {
          id: 2,
          title: 'Book 2',
          description: 'This is the second book.',
          author: 'Author 2',
          publishedDate: '2022-02-01',
        },
        {
          id: 3,
          title: 'Book 3',
          description: 'This is the third book.',
          author: 'Author 3',
          publishedDate: '2022-03-01',
        },
      ];
      
      
Const [rst,setrst]=useState(fakeData)



  return (
    <div>
   {
    rst.map((ele,index)=> <Card   {...ele} />)
   }
    </div>
  )
}

export default Firrst
