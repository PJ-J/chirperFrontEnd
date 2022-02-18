import React from 'react';

const App = () => {

  const myList = [
    {
      key: 1,
      username: 'donny',
      thoughts: 'crabcakes'
    },
    {
      key: 2,
      username: 'jonny',
      thoughts: 'hotdog'
    },
    {
      key: 3,
      username: 'lonny',
      thoughts: 'pizza'
    }
  ];

  const myFancyList = myList.map(val => {
    return <li className='list-group-item'>@{val.username}</li>
  })

  let i = 4;

 const makeCard = () => {
   
  let user = document.getElementById("usr").value;
  let thoughts = document.getElementById("thoughts").value;
// return (
//   // <div className="card">
//   //           <div className="card-header">
//   //             Quote
//   //           </div>
//   //           <div className="card-body">
//   //             <blockquote className="blockquote mb-0">
//   //               <p>{thoughts}</p>
//   //               <footer className="blockquote-footer">{user}</footer>
//   //             </blockquote>
//   //           </div>
//   //         </div>
// )
let obj = {
  key: i,
  username: user,
  thoughts: thoughts
}
myList.push(obj);
console.log(myList);
let li = document.createElement("li");
li.textContent = `@${user}`;
li.className = "list-group-item";
let node = document.getElementById('chirpList');
node.appendChild(li);
i++;
 }

  return (
    <main className='container mt-5'>
      <section className='row justify-content-center'>
        <div className="col-5 border">
          <div className="form-group m-2">

            <input type="text" className="form-control" placeholder="Username" id="usr" />
          </div>
          <div className="form-group m-2">

            <textarea className='form-control' placeholder="Your thoughts" cols="30" rows="10" id="thoughts"></textarea>
            <button onClick={makeCard} type="button" className="btn btn-primary mt-2" id="chirpBtn">Chirp it!</button>
          </div>
        </div>


        <div className="col-4">
          <ul className="list-group" id="chirpList">
            {myFancyList}
          </ul>
          
        </div>
      </section>
    </main>
  );
};

export default App;