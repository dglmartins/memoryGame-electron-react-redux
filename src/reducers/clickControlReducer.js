import {
  CHOOSING_FIRST,
  CHOOSING_SECOND,
  STORE_CARD_TO_CHECK_MATCH,
  CHECKING_MATCH,
  INCREMENT_MATCH,
  RESET_CLICK_CONTROL
} from '../actions/clickControlActions';

const initialState = {
  matchCount: 0,
  status: 'CHOOSING_FIRST',
  cardToCheckMatch: null
};

export function clickControl (state = initialState, action) {
  const { type, card } = action
  switch (action.type) {
    case CHOOSING_FIRST:
      return {
        ...state,
        status: type
      };
    case CHOOSING_SECOND:
      return {
        ...state,
        status: type
      };
    case CHECKING_MATCH:
      return {
        ...state,
        status: type
      };
    case STORE_CARD_TO_CHECK_MATCH:
      return {
        ...state,
        cardToCheckMatch: card
      };
    case INCREMENT_MATCH:
      return {
        ...state,
        matchCount: state.matchCount + 1
      };
    case RESET_CLICK_CONTROL:
      return initialState;
    default:
      return state;
  }
};
