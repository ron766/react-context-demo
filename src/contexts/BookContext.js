import React, { createContext, useState } from 'react';

export const BookContext = createContext();

const BookContextProvider = (props) => {
  const [books, setBooks] =  useState([
    {title: 'Shiva triology 1', id: 1},
    {title: 'Shiva triology 2', id: 2},
    {title: 'Shiva triology 3', id: 3},
    {title: 'Shiva triology 4', id: 4},
  ])
  return (
    <BookContext.Provider value={{books}}>
      {props.children}
    </BookContext.Provider>
  );
}
 
export default BookContextProvider;