import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import ShuffleButton from './components/ShuffleButton';
import GameContainer from './components/GameContainer';
import Cards from './components/Cards';
import { shuffleDeck, rotateCard180, showCard, rotateCard0, hideCard, animateShuffle } from './actions/cardsActions';
import { choosingFirst, choosingSecond, storeCardToCheckMatch, checkingMatch, incrementMatch, resetClickControl } from './actions/clickControlActions';
import { isMatch, hasChosenFirstAndCardDown, hasChosenSecondAndCardDown, areAllMatched, turnOneCardUp, turnOneCardDown, resetGameAndShuffleDeck } from './utils/helpers';

class App extends Component {

  reset = () => {
    resetGameAndShuffleDeck(this.props);
  }

  handleCardClick = (cardId) => {
    const { storeCardToCheckMatch, choosingFirst, choosingSecond, checkingMatch, incrementMatch, resetClickControl } = this.props;
    const card = this.props.cards.filter((card) => (card.id === cardId))[0];
    if (hasChosenFirstAndCardDown(this.props.clickControl.status, card.style.transform)) {
      storeCardToCheckMatch(card);
      turnOneCardUp(this.props, cardId);
      choosingSecond();
    } else if (hasChosenSecondAndCardDown(this.props.clickControl.status, card.style.transform)) {
      const { cardToCheckMatch } = this.props.clickControl;
      checkingMatch();
      turnOneCardUp(this.props, cardId);
      if (isMatch(cardToCheckMatch, card)) {
        setTimeout(() => {
          incrementMatch();
          choosingFirst();
          if (areAllMatched(this.props.clickControl.matchCount, this.props.cards.length)) {
            alert ("Congratulations!");
            resetClickControl();
            this.reset();
          }
        }, 500);
      } else {
        setTimeout(() => {
          turnOneCardDown(this.props, cardToCheckMatch.id);
          turnOneCardDown(this.props, cardId);
          setTimeout(() => {
            this.props.choosingFirst();
          }, 500);
        }, 500);
      }
      storeCardToCheckMatch(null);
    }
  }

  render() {
    return (
      <div>
        <Header>
          <h1>Memory Game</h1>
        </Header>
        <ShuffleButton reset={this.reset}/>
        <GameContainer>
          <Cards
            cards={this.props.cards}
            handleCardClick={this.handleCardClick}/>
        </GameContainer>
      </div>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    shuffleDeck: () => dispatch(shuffleDeck()),
    showCard: (data) => dispatch(showCard(data)),
    rotateCard180: (data) => dispatch(rotateCard180(data)),
    rotateCard0: (data) => dispatch(rotateCard0(data)),
    hideCard: (data) => dispatch(hideCard(data)),
    animateShuffle: (data) => dispatch(animateShuffle(data)),
    choosingFirst: () => dispatch(choosingFirst()),
    choosingSecond: () => dispatch(choosingSecond()),
    storeCardToCheckMatch: (data) => dispatch(storeCardToCheckMatch(data)),
    checkingMatch: () => dispatch(checkingMatch()),
    incrementMatch: () => dispatch(incrementMatch()),
    resetClickControl: () => dispatch(resetClickControl())
  };
}


function mapStateToProps({ cards, clickControl }) {
  return {
    cards: Object.keys(cards).map((key) => (
      cards[key]
    )),
    clickControl
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
