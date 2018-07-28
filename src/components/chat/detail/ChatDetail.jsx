import React, { Component } from 'react';

// Styles
import './chat-detail.scss';
// Styles

// Components
import MessageList from '../../message/list/MessageList.jsx';
// Components

export default class ChatDetail extends Component {
  render() {
    
    return(
      <div className={'chat-detail'}>
        <div className={'chat-detail-header box-sizing'}>
        
          <div className={'chat-detail-header-avatar-wrapper'}>
            <div className={'chat-detail-header-avatar box-sizing'} style={{backgroundImage: 'url(http://bedirhank.com/_nuxt/img/profile_image.a96f3f2.png)'}}></div>
          </div>

          <div className={'chat-detail-header-meta-data-wrapper box-sizing'}>
            <div className={'chat-detail-header-meta-data-row chat-detail-header-username'}>{'Dan Abramov'}</div>
            <div className={'chat-detail-header-meta-data-row chat-detail-header-status'}>{'online'}</div>
          </div>

        </div>
        
        <div className={'chat-detail-messages'}>
          <MessageList/>
        </div>

        <div className={'chat-detail-new-message box-sizing'}>
          <div className={'chat-detail-new-message-input-wrapper'}>
            <input type="text" className={'chat-detail-new-message-input'} placeholder={'Type a message...'}/>
          </div>
          <div className={'chat-detail-new-message-submit-wrapper'}>
            <button className={'chat-detail-new-message-submit'}>
              <i className="fas fa-location-arrow chat-detail-new-message-submit-icon"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}