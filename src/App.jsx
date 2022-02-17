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
        <div className="col-5 border">
          <div className="form-group">
            <label htmlFor="usr">Name:</label>
            <input type="text" className="form-control" id="usr" />
          </div>
          <div className="form-group">
            <label htmlFor="pwd">Password:</label>
            <input type="password" className="form-control" id="pwd" />
            <button type="button" className="btn btn-primary mt-3">Primary</button>
          </div>
        </div>
        <div className="col-4">
          {/* <ul className="list-group">
            {myList.map(obj => (
              <li className='list-group-item' key={obj.id}>{obj.msg}</li>
            ))}
          </ul> */}
          <div className="card">
  <div className="card-header">
    Quote
  </div>
  <div className="card-body">
    <blockquote className="blockquote mb-0">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
      <footer className="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
  </div>
</div>
        </div>
      </section>
    </main>
  );
};

export default App;