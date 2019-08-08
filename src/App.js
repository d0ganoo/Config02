import React from "react";
import ReactDOM from "react-dom";
import './assets/scss/layout.scss';
import happy from './assets/img/happy.png';
import Title from './Title';

const App = () => {
  return (
    <React.Fragment>
      <Title />
      <img src={happy} alt="happy-png" />
    </React.Fragment>
  );
};

export default App;
ReactDOM.render(<App />, document.getElementById("app"));