import React, { Component } from 'react';
import clickCards from '../../clickCards.json';
import "./ClickyCard.css";
import {Row, Col} from '../Grid';
import ClickyCard from '../ClickyCard';

class GameController extends Component {
  state = {
    cards: clickCards,
    score: 0,
    status: ''
  };

  shuffle = (array) => {
    var m = array.length, t, i;
    while (m) {
      i = Math.floor(Math.random() * m--);
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
  handleClick = (name) => {
    const newState = {}
    newState.status = ''
    newState.cards = this.shuffle(this.state.cards).map(card => {
      if(card.name === name) {
        if(card.clicked) {
          newState.score = 0;
        } else {
          newState.score = this.state.score + 1;
        }
        card.clicked = true;
      }
      return card;
    })
    if(newState.score === 0 || newState.score === 9) {
      newState.cards = this.state.cards.map(card => {
        card.clicked = false;
        return card
      })
      if (newState.score === 9) {
        newState.status = 'You Won';
        newState.score = 0;
      } else {
        newState.status = 'Game Over';
      }
    }
    this.setState(newState)
  }

  render() {    
    const result = this.state.cards.map((x,i) => {
        return i % 3 === 0 ? this.state.cards.slice(i, i+3) : null;
    }).filter(x => x != null);
  
    return (
      <Row >
        <Col sm={3}>
          <p>Current Score: {this.state.score}</p>
          <p>{this.state.status}</p>
        </Col>
        <Col sm={6}>
          {result.map((result, index) => {
            return (
            <Row key={index}>
              {result.map(item => 
              <ClickyCard key={item.url}
                clicked={item.clicked}
                handleClick={this.handleClick}
                url={item.url}
                name={item.name}/>  
              )}
            </Row>);
          })}
        </Col>
      </Row>
    );
  }
}
export default GameController;


