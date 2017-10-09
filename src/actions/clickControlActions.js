export const CHOOSING_FIRST = 'CHOOSING_FIRST';
export const CHOOSING_SECOND = 'CHOOSING_SECOND';
export const STORE_CARD_TO_CHECK_MATCH = 'STORE_CARD_TO_CHECK_MATCH';
export const CHECKING_MATCH = 'CHECKING_MATCH';
export const INCREMENT_MATCH = 'INCREMENT_MATCH';
export const RESET_CLICK_CONTROL = 'RESET_CLICK_CONTROL';

export function choosingFirst () {
  return {
    type: CHOOSING_FIRST,
  };
};

export function choosingSecond () {
  return {
    type: CHOOSING_SECOND,
  };
};

export function checkingMatch () {
  return {
    type: CHECKING_MATCH,
  };
};

export function storeCardToCheckMatch (card) {
  return {
    type: STORE_CARD_TO_CHECK_MATCH,
    card
  };
};

export function incrementMatch () {
  return {
    type: INCREMENT_MATCH,
  };
};

export function resetClickControl () {
  return {
    type: RESET_CLICK_CONTROL,
  };
};
