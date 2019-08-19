import React from "react";
import ReactDOM from "react-dom";


const Title = ({match}) => {
  console.log(match.params.id);
  return 'WTF';
};

export default Title;