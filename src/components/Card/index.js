import React from 'react';
import { getCardStyle } from '../../utils/helpers';

const Card = (props) => {
  const { card, handleCardClick } = props;
  const style = getCardStyle(card)
  return (
    <div className="column"
      style={style}
      onClick={() => handleCardClick(card.id)}>
    </div>
  );
};

export default Card;
