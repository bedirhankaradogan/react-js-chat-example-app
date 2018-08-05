import {combineReducers} from 'redux';
import chats from './Chats.js';
import messages from './Messages.js';
import user from './User.js';
import activeUserId from './ActiveUserId.js';
import newMessageText from './NewMessageText.js';

export default combineReducers({
  chats,
  messages,
  user,
  activeUserId,
  newMessageText
});