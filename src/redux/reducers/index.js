import {combineReducers} from 'redux';
import chats from './Chats';
import messages from './Messages';
import user from './User';
import activeUserId from './ActiveUserId';
import newMessageText from './NewMessageText';

export default combineReducers({
  chats,
  messages,
  user,
  activeUserId,
  newMessageText
});