export const SHUFFLE_DECK = 'SHUFFLE_DECK';
export const ROTATE_CARD_180 = 'ROTATE_CARD_180';
export const ROTATE_CARD_0 = 'ROTATE_CARD_0';
export const SHOW_CARD = 'SHOW_CARD';
export const HIDE_CARD = 'HIDE_CARD';
export const ANIMATE_SHUFFLE = 'ANIMATE_SHUFFLE';

export function shuffleDeck () {
  return {
    type: SHUFFLE_DECK,
  };
};

export function rotateCard180 (cardId) {
  return {
    type: ROTATE_CARD_180,
    cardId
  };
};

export function rotateCard0 (cardId) {
  return {
    type: ROTATE_CARD_0,
    cardId
  };
};

export function showCard (cardId) {
  return {
    type: SHOW_CARD,
    cardId
  };
};

export function hideCard (cardId) {
  return {
    type: HIDE_CARD,
    cardId
  };
};

export function animateShuffle (degrees) {
  return {
    type: ANIMATE_SHUFFLE,
    degrees
  };
};
