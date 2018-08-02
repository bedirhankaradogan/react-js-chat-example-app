import React, {Component} from 'react';

// Styles
import './empty-state.scss';
// Styles

export default class EmptyState extends Component {
  render() {
    const {user} = this.props;

    return(
      <div className={'chat-detail-empty-state'}>
        <div className={'chat-detail-empty-state-avatar box-sizing'} style={{backgroundImage: 'url(' + user.profilePicture + ')'}}></div>
        <span className={'chat-detail-empty-state-text chat-detail-empty-state-text-greeting'}>Welcome <b>{user.name}</b></span>
        <span className={'chat-detail-empty-state-text chat-detail-empty-state-text-instruction'}>Select a user and start conversation!</span>
      </div>
    );
  }
}