import React from "react";

const App = () => {
  const myList = [
    {
      key: 1,
      dateTime: "jan",
      username: "donny",
      thoughts: "crabcakes",
    },
    {
      key: 2,
      dateTime: "",
      username: "jonny",
      thoughts: "hotdog",
    },
    {
      key: 3,
      dateTime: "",
      username: "lonny",
      thoughts: "pizza",
    },
  ];

  const myFancyList = myList.map((val) => {
    return <li className="list-group-item">@{val.dateTime}</li>;
  });

  let i = 4;

  // console.log(formatAMPM(new Date()));

//using your function (passing in date)
function formatAMPM(date) {
    // gets the hours
    var hours = date.getHours();
    // gets the day
    var days = date.getDay();
    // gets the month
    var minutes = date.getMinutes();
    // gets AM/PM
    var ampm = hours >= 12 ? 'pm' : 'am';
    // converts hours to 12 hour instead of 24 hour
    hours = hours % 12;
    // converts 0 (midnight) to 12
    hours = hours ? hours : 12; // the hour '0' should be '12'
    // converts minutes to have leading 0
    minutes = minutes < 10 ? '0'+ minutes : minutes;
  
    // the time string
    var time = hours + ':' + minutes + ' ' + ampm;
  
    // gets the match for the date string we want
    var match = date.toString().match(/\w{3} \w{3} \d{1,2} \d{4}/);
  
    //the result
    return match[0] + ' ' + time;
}

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
      dateTime: formatAMPM(new Date()),
      username: user,
      thoughts: thoughts,
    };
    myList.push(obj);
    console.log(myList);
    let li = document.createElement("li");
    li.textContent = `${formatAMPM(new Date())}:
     @${user} `;

    li.className = "list-group-item";
    let node = document.getElementById("chirpList");
    node.appendChild(li);
    i++;
  };

  return (
    <main className="container mt-5">
      <section className="row justify-content-center">
        <div className="col-5 border">
          <div className="form-group m-2">
            <input
              type="text"
              className="form-control"
              placeholder="Username"
              id="usr"
            />
          </div>
          <div className="form-group m-2">
            <textarea
              className="form-control"
              placeholder="Your thoughts"
              cols="30"
              rows="10"
              id="thoughts"
            ></textarea>
            <button
              onClick={makeCard}
              type="button"
              className="btn btn-primary mt-2"
              id="chirpBtn"
            >
              Chirp it!
            </button>
          </div>
        </div>

        <div className="col-6">
          <ul className="list-group" id="chirpList">
            {myFancyList}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default App;
