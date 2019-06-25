import React from "react";
import ReactDOM from "react-dom";
import './assets/css/layout.css';
import './assets/scss/layout.scss';
import happy from './assets/img/happy.png';

const App = () => {
    console.log("rze");
  return (
    <div>
      <p>React !</p>
      <img src={happy} alt="happy-png" />
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));