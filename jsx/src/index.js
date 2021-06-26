import React from 'react';
import ReactDOM from 'react-dom';

function getTime(){
  return new Date().toLocaleTimeString();
}

const App = () => {
  const btnText = "Click Me"
  const lblName = "Enter Name"
  return (<div>
    <label className="label" htmlFor="name">
      {lblName}
    </label>
    <input id="name" type="text"></input>
  <button style={{backgroundColor:"blue",color:"white"}}>{btnText}</button>
  <div>
  <label>Current Time:</label><span>{getTime()}</span>
  </div>
  </div>);
}

ReactDOM.render(
  <App/>,
  document.querySelector('#root')
);
