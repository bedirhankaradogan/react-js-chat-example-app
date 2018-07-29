import {
  SET_ACTIVE_USER_ID,
  SET_NEW_MESSAGE_TEXT,
  SEND_NEW_MESSAGE
} from '../constants/ActionTypes.js';

export const setActiveUserId = userId => ({
  type: SET_ACTIVE_USER_ID,
  payload: {userId}
});

export const setNewMessageText = messageText => ({
  type: SET_NEW_MESSAGE_TEXT,
  payload: {messageText}
});

export const sendNewMessage = (messageText, userId) => ({
  type: SEND_NEW_MESSAGE,
  payload: {
    messageText,
    userId
  }
});