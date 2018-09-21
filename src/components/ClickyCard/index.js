import React from 'react';

const ClickyCard = (props) => (
  <div className="col s4">
    <div onClick={() => props.handleClick(props.name)}  className="card">
      <div className="card-image">
        <img src={props.url}></img>
        <h6 className="center">{props.name}</h6>
      </div>
    </div>
  </div>  
);

export default ClickyCard;
