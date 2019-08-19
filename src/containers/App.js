import React from "react";
import '../assets/scss/layout.scss';
import LiveScore from '../components/LiveScore';
import Competitions from '../components/Competitions';
import Teams from '../components/Teams';
import Col from 'react-bootstrap/Col';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    return (
      <main>
        <header>
          <h1>Football manager</h1>
        </header>
        <Col md={12} className="main-container">
          <Col md={3} className="col-left">
            <LiveScore/>
          </Col>
          <Col md={6}>
            <Competitions/>
          </Col>
          <Col md={3} className='col-right'>
            <h2>Equipes</h2>
            <Teams/>
          </Col>
        </Col>
        <footer></footer>
      </main>
    );
  }
};

export default App;



{/* <img src={happy} alt="happy-png" /> */}