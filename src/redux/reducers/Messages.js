import _ from 'lodash';
import {getMessages} from '../../data/index.js';
import {SEND_NEW_MESSAGE} from '../constants/ActionTypes.js';

export default (state = getMessages(20), action) => {
  switch (action.type) {
    case SEND_NEW_MESSAGE:
      const {
        messageText,
        userId
      } = action.payload;
      const allUserMessages = state[userId];
      const newMessageNumber = +_.keys(allUserMessages).pop() + 1;

      return {
        ...state,
        [userId]: {
          ...allUserMessages,
          [newMessageNumber]: {
            number: newMessageNumber,
            text: messageText,
            isSenderMe: true
          }
        }
      }
  
    default:
      return state;
  }
};