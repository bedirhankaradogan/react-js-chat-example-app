import {SET_NEW_MESSAGE_TEXT} from '../constants/ActionTypes.js';

export default (state = '', action) => {
  switch (action.type) {
    case SET_NEW_MESSAGE_TEXT:
      return action.payload.messageText;
  
    default:
      return state;
  }
};