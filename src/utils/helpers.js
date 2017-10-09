import R from 'ramda';
const logo = './src/images/logo.png';
const peppa = './src/images/peppa.png';
const george = './src/images/george.png';
const mummy = './src/images/mummy.png';
const daddy = './src/images/daddy.png';
const grandma = './src/images/grandma.png';
const grandpa = './src/images/grandpa.png';

const shuffleArray = (array) => {
  const initialShuffleControlObject = {arrayToDrawFrom: array, drawnArray: []};
  const endingShuffleControlObject = array.reduce((accumulator, currentValue, index) => {
    const drawnIndex = Math.floor(Math.random() * (array.length - index));
    const drawnArray = accumulator.drawnArray.concat(accumulator.arrayToDrawFrom[drawnIndex]);
    const arrayToDrawFrom = accumulator.arrayToDrawFrom.filter((item, index) => (
      index !== drawnIndex
    ));
    return { arrayToDrawFrom, drawnArray };
  }, initialShuffleControlObject);
  return endingShuffleControlObject.drawnArray;
};

const generateInitialCardsState = (shuffledArray) => {
  return R.range(0, shuffledArray.length).reduce((cards, idNum, index) => {
    const newCard = {
    [`card${idNum + 1}`]: {
        id: `card${idNum + 1}`,
        style: {backgroundImage: null, transform: 'rotateY(0deg)'},
        cardCharacter: shuffledArray[index]
      }
    };
    return R.merge(cards, newCard);
  }, {});
};

export const generatedShuffledDeck = R.compose(generateInitialCardsState, shuffleArray);

export const getCardStyle = (card) => {
  switch (card.style.backgroundImage) {
    case "peppa":
      return {
        backgroundImage: `url(${peppa})`,
        transform: card.style.transform
      };
    case "george":
      return  {
        backgroundImage: `url(${george})`,
        transform: card.style.transform
      };
    case "mummy":
      return  {
        backgroundImage: `url(${mummy})`,
        transform: card.style.transform
      };
    case "daddy":
      return  {
        backgroundImage: `url(${daddy})`,
        transform: card.style.transform
      };
    case "grandma":
      return  {
        backgroundImage: `url(${grandma})`,
        transform: card.style.transform
      };
    case "grandpa":
      return  {
        backgroundImage: `url(${grandpa})`,
        transform: card.style.transform
      };
    default:
      return  {
        backgroundImage: `url(${logo})`,
        transform: card.style.transform
      };
  }
};

export const hasChosenFirstAndCardDown = (status, transform) => (status === 'CHOOSING_FIRST' && transform === 'rotateY(0deg)');
export const hasChosenSecondAndCardDown = (status, transform) => (status === 'CHOOSING_SECOND' && transform === 'rotateY(0deg)');
export const isMatch = (card1, card2) => (card1.cardCharacter === card2.cardCharacter);
export const areAllMatched = (matchCount, cardCount) => (matchCount === cardCount / 2);

export const turnOneCardUp = ({ showCard, rotateCard180 }, cardId) => {
  showCard(cardId);
  rotateCard180(cardId);
};

export const turnOneCardDown = ({ hideCard, rotateCard0 }, cardId) => {
  hideCard(cardId);
  rotateCard0(cardId);
};

export const resetGameAndShuffleDeck = ({ resetClickControl, shuffleDeck, animateShuffle }) => {
  resetClickControl();
  shuffleDeck();
  animateShuffle(360);

  setTimeout(() => {
    animateShuffle(0);
  }, 500);
};
