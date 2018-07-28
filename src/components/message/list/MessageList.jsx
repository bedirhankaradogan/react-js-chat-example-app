import React, { Component } from 'react';

// Styles
import './message-list.scss';
// Styles

// Components
import MessageListItem from './item/MessageListItem.jsx';
// Components

export default class MessageList extends Component {
  render() {
    let messages = [
      {
        date: '2018-07-01',
        time: '23:00',
        text: 'You know, I built Redux!',
        isSenderMe: false,
        isRead: false,
        isEdited: false
      },
      {
        date: '2018-07-01',
        time: '23:01',
        text: 'Yeah I get it.',
        isSenderMe: true,
        isRead: false,
        isEdited: false
      },
      {
        date: '2018-07-01',
        time: '23:01',
        text: 'Yeah I get it.',
        isSenderMe: true,
        isRead: false,
        isEdited: false
      },
      {
        date: '2018-07-01',
        time: '23:01',
        text: 'Yeah I get it.',
        isSenderMe: true,
        isRead: false,
        isEdited: false
      },
      {
        date: '2018-07-01',
        time: '23:01',
        text: 'Yeah I get it.',
        isSenderMe: true,
        isRead: false,
        isEdited: false
      },
      {
        date: '2018-07-01',
        time: '23:01',
        text: 'Yeah I get it.',
        isSenderMe: true,
        isRead: false,
        isEdited: false
      },
      {
        date: '2018-07-01',
        time: '23:01',
        text: 'Yeah I get it.',
        isSenderMe: true,
        isRead: false,
        isEdited: false
      },
      {
        date: '2018-07-01',
        time: '23:01',
        text: 'Yeah I get it.',
        isSenderMe: true,
        isRead: false,
        isEdited: false
      },
      {
        date: '2018-07-01',
        time: '23:01',
        text: 'Yeah I get it.',
        isSenderMe: true,
        isRead: false,
        isEdited: false
      },
      {
        date: '2018-07-01',
        time: '23:01',
        text: 'Yeah I get it.',
        isSenderMe: true,
        isRead: false,
        isEdited: false
      }
    ];
    const MessageListItems = messages.map((message, i) => (<MessageListItem key={i} data={message}/>));

    return(
      <div className={'message-list'}>
        {MessageListItems}
      </div>
    );
  }
}