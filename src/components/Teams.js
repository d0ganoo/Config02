import React from "react";
import {getData} from '../tools/callApi';
import 'bootstrap';

const URL_LIVE_SCORE = 'https://api.football-data.org/v2/competitions/2015/teams/';
// 773 france
// 'https://api.football-data.org/v2/competitions/2000/teams:
// ttps://api.football-data.org/v2/competitions/2015/standings
class Teams extends React.Component{
  constructor(props){
    super(props);
    this.state = {
        datas:[]
    };
  }

  componentDidMount(){
    let data = getData(URL_LIVE_SCORE);
    let currentThis = this;

     data.then(function(data){
        console.log(data);
      currentThis.setState({datas:data.teams});
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
         return (
          <React.Fragment key={i}>
            <li>{data.name}</li>
            </React.Fragment>
            ) 
        })
    }

    return (
        <ul >
            {playersList}
        </ul>
    );
  }
};

export default Teams;
