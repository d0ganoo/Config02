import React from "react";
import {getData} from '../tools/callApi';
import Title from '../components/Title';
import 'bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const URL_ALL_COMPETITIONS = 'https://api.football-data.org/v2/competitions/';
// 773 france
// 'https://api.football-data.org/v2/competitions/2000/teams:
// ttps://api.football-data.org/v2/competitions/2015/standings
class Competitions extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        datas:[]
    };
  }

  componentDidMount(){
    let data = getData(URL_ALL_COMPETITIONS);
    let currentThis = this;

     data.then(function(data){
        console.log(data);
      currentThis.setState({datas:data.competitions});
    });
  }
  
  componentDidUpdate(){
    let i = 0;
    console.log(i++);
  }

  render(){
      console.log(this.state.datas);
      let playersList = '';

      if (this.state.datas.length != 0){
          playersList = this.state.datas.map((data, i) => {
            if (data.plan === 'TIER_ONE'){
              return (
                <React.Fragment key={i}>
                    <Link to={`/title/${data.id}`}>{data.name}</Link>
                </React.Fragment>
                  ) 
              }
          })
    }

    return (
        <Router>
            {playersList}
            <hr/>
            <Route path={`/title/:id`} component={Title} />
        </Router>
    );
  }
};

export default Competitions;
