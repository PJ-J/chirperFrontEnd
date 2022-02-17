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
    <main className='container mt-5'>
      <section className='row justify-content-center'>
        <div className="col-4">
          <ul className="list-group">
            {myList.map(obj => (
              <li className='list-group-item' key={obj.id}>{obj.msg}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default App;