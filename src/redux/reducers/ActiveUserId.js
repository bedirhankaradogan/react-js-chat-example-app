import {SET_ACTIVE_USER_ID} from '../constants/ActionTypes.js';

export default (state = null, action) => {
  switch (action.type) {
    case SET_ACTIVE_USER_ID:
      return action.payload.userId;
  
    default:
      return state;
  }
};