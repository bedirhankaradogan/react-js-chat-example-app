import React, {
  Component,
  Fragment
} from 'react';
import {
  setNewMessageText,
  sendNewMessage
} from '../../../redux/actions';
import store from '../../../redux/store';

// Styles
import './chat-detail.scss';
// Styles

// Components
import MessageList from '../../message/list/MessageList.jsx';
import EmptyState from './empty-state/EmptyState.jsx';
// Components

export default class ChatDetail extends Component {

  constructor(props) {
    super(props);

    this.messagesRef = React.createRef();
  }

  componentDidMount() {
    this.messagesScrollToBottom();
  }

  componentDidUpdate() {
    this.messagesScrollToBottom();
  }

  messagesScrollToBottom() {
    if(this.messagesRef.current) {
      this.messagesRef.current.scrollTop = this.messagesRef.current.scrollHeight;
    }
  }

  handleNewMessageInputChange(event) {
    store.dispatch(setNewMessageText(event.target.value));
  }

  handleNewMessageSubmit() {
    const {
      newMessageText,
      activeUserId
    } = store.getState();

    if(newMessageText) {
      store.dispatch(sendNewMessage(newMessageText, activeUserId));
      store.dispatch(setNewMessageText(''));
    }
  }

  render() {
    const state = store.getState();
    const {
      user,
      activeUserId
    } = this.props;
    const activeUser = activeUserId !== null && state.chats[activeUserId];
    const messages = activeUserId !== null && state.messages[activeUserId];

    return(
      <div className={'chat-detail'}>
        {activeUserId === null ? 
          (<EmptyState user={user}/>) :
          (<Fragment>
            <div className={'chat-detail-header box-sizing'}>
              <div className={'chat-detail-header-avatar-wrapper'}>
                <div className={'chat-detail-header-avatar box-sizing'} style={{backgroundImage: 'url(' + activeUser.profilePicture + ')'}}></div>
              </div>
              <div className={'chat-detail-header-meta-data-wrapper box-sizing'}>
                <div className={'chat-detail-header-meta-data-row chat-detail-header-username'}>{activeUser.name}</div>
                <div className={'chat-detail-header-meta-data-row chat-detail-header-status'}>
                  {activeUser.isOnline ? 'online' : 'offline'}
                </div>
              </div>
            </div>
            <div ref={this.messagesRef} className={'chat-detail-messages'}>
              <MessageList messages={messages}/>
            </div>
            <div className={'chat-detail-new-message box-sizing'}>
              <div className={'chat-detail-new-message-input-wrapper'}>
                <input type="text" className={'chat-detail-new-message-input'} placeholder={'Type a message...'} value={state.newMessageText} onChange={this.handleNewMessageInputChange.bind(this)}/>
              </div>
              <div className={'chat-detail-new-message-submit-wrapper'}>
                <button className={'chat-detail-new-message-submit'} onClick={this.handleNewMessageSubmit.bind(this)}>
                  <i className="fas fa-location-arrow chat-detail-new-message-submit-icon"></i>
                </button>
              </div>
            </div>
          </Fragment>)}
      </div>
    );
  }

}