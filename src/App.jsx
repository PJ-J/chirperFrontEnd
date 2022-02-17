import React from 'react';

const App = () => {

  const myList = [
    {
      id: 1,
      msg: 'hey'
    },
    {
      id: 2,
      msg: 'hey2'
    },
    {
      id: 3,
      msg: 'hey3'
    }
  ];


  return (
    <ul>
      {myList.map(obj => (
        <li key={obj.id}>{obj.msg}</li>
      ))}
        </ul>
  );
};

export default App;