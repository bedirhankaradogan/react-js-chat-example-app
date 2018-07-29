import {combineReducers} from 'redux';
import Chats from './Chats';
import Messages from './Messages';
import User from './User';
import ActiveUserId from './ActiveUserId';
import NewMessageText from './NewMessageText';

export default combineReducers({
  Chats,
  Messages,
  User,
  ActiveUserId,
  NewMessageText
});