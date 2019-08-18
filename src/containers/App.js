import React from "react";
import ReactDOM from "react-dom";
import '../assets/scss/layout.scss';
import happy from '../assets/img/happy.png';
import Title from '../components/Title';
import {getData} from '../tools/callApi';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        datas:[]
    };
  }

  componentDidMount(){
    let data = getData();
    let currentThis = this;

     data.then(function(data){
      currentThis.setState({datas:data.matches});
    });
  }
  
  componentDidUpdate(){
    let i = 0;
    console.log(i++);
  }

  render(){
    console.log('-',this.state.datas);
    return (
      <main>
        <header>
          <Title />
        </header>
          <section className="content-field">

          </section>
          <section className="content-players">

          </section>
          <footer></footer>
      </main>
    );
  }
};

export default App;



{/* <img src={happy} alt="happy-png" /> */}