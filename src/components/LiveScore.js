import React from "react";
import {getData} from '../tools/callApi';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

const URL_LIVE_SCORE = 'http://api.football-data.org/v2/matches?status=LIVE';

class LiveScore extends React.Component{
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
      currentThis.setState({datas:data.matches});
    });
  }
  
  componentDidUpdate(){
    let i = 0;
    console.log(i++);
  }

  render(){
    console.log(this.state.datas);
    if (this.state.datas.length === 0){
      return (
        <React.Fragment>
          <h2>Match en cours</h2>
          <Row>Pas de match en cours</Row>
        </React.Fragment>
      );
    }
    return (
        <Container>
            <h2>Match en cours</h2>
            {this.state.datas.map((data, i) => {
              console.log(data)     ;
              return (
                <Row className="live-match" key={i}>{data.awayTeam.name} <b>{data.score.fullTime.awayTeam}</b>  -  <b>{data.score.fullTime.homeTeam}</b> {data.homeTeam.name} </Row>
              ) 
            })}
        </Container>
    );
  }
};

export default LiveScore;
