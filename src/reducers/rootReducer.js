import { combineReducers } from 'redux';
import { cards } from './cardsReducer';
import { clickControl } from './clickControlReducer';

export default combineReducers({
  cards,
  clickControl
});
