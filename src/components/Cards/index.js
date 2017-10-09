import React from 'react';
import Card from '../Card';
import R from 'ramda';

const Cards = (props) => (
  <div>
    {R.range(0, props.cards.length).map((key) => (
      <Card
        key={key}
        card={props.cards[key]}
        handleCardClick={props.handleCardClick}
      />
    ))}
  </div>
);

export default Cards;
