import React, { Component } from 'react';

// Styles
import './chat-list.scss';
// Styles

// Components
import ChatListItem from './item/ChatListItem.jsx';
// Components

export default class ChatList extends Component {
  render() {
    let chats = [
      {
        username: 'Dan Abramov',
        userAvatar: 'http://bedirhank.com/_nuxt/img/profile_image.a96f3f2.png',
        isOnline: true,
        messages: [
          {
            date: '2018-07-01',
            time: '23:00',
            text: 'You know, I built Redux!',
            isRead: false,
            isEdited: false
          }
        ]
      },
      {
        username: 'Tony Stark',
        userAvatar: 'http://www.laineygossip.com/Content/images/articles/rdj-sma-07nov14.jpg',
        isOnline: true,
        messages: [
          {
            date: '2018-07-01',
            time: '23:00',
            text: 'Jarvis is not herself in these days :((',
            isRead: false,
            isEdited: false
          }
        ]
      },
      {
        username: 'Thor',
        userAvatar: 'https://pmcvariety.files.wordpress.com/2017/04/thor-ragnarok.jpg?w=1000&h=563&crop=1',
        isOnline: false,
        messages: [
          {
            date: '2018-07-01',
            time: '23:00',
            text: 'Odin kicked my ass!!!',
            isRead: true,
            isEdited: false
          }
        ]
      },
      {
        username: 'Bruce Wayne',
        userAvatar: 'https://cdn.mos.cms.futurecdn.net/2sDGvXSwDRvrJqq9YN5oc4-480-80.jpg',
        isOnline: false,
        messages: [
          {
            date: '2018-07-01',
            time: '23:00',
            text: 'I\'m Batman',
            isRead: false,
            isEdited: false
          }
        ]
      },
      {
        username: 'Clark Kent',
        userAvatar: 'https://cdn.movieweb.com/img.news.tops/NEHlYyLvWH6wLN_2_b/Justice-League-Movie-Superman-Comic-Book-Adaption.jpg',
        isOnline: true,
        messages: [
          {
            date: '2018-07-01',
            time: '23:00',
            text: 'I think Marvel is overrated???',
            isRead: true,
            isEdited: false
          }
        ]
      },
      {
        username: 'Clark Kent',
        userAvatar: 'https://cdn.movieweb.com/img.news.tops/NEHlYyLvWH6wLN_2_b/Justice-League-Movie-Superman-Comic-Book-Adaption.jpg',
        isOnline: true,
        messages: [
          {
            date: '2018-07-01',
            time: '23:00',
            text: 'I think Marvel is overrated???',
            isRead: true,
            isEdited: false
          }
        ]
      },
      {
        username: 'Clark Kent',
        userAvatar: 'https://cdn.movieweb.com/img.news.tops/NEHlYyLvWH6wLN_2_b/Justice-League-Movie-Superman-Comic-Book-Adaption.jpg',
        isOnline: true,
        messages: [
          {
            date: '2018-07-01',
            time: '23:00',
            text: 'I think Marvel is overrated???',
            isRead: true,
            isEdited: false
          }
        ]
      },
      {
        username: 'Clark Kent',
        userAvatar: 'https://cdn.movieweb.com/img.news.tops/NEHlYyLvWH6wLN_2_b/Justice-League-Movie-Superman-Comic-Book-Adaption.jpg',
        isOnline: true,
        messages: [
          {
            date: '2018-07-01',
            time: '23:00',
            text: 'I think Marvel is overrated???',
            isRead: true,
            isEdited: false
          }
        ]
      },
      {
        username: 'Clark Kent',
        userAvatar: 'https://cdn.movieweb.com/img.news.tops/NEHlYyLvWH6wLN_2_b/Justice-League-Movie-Superman-Comic-Book-Adaption.jpg',
        isOnline: true,
        messages: [
          {
            date: '2018-07-01',
            time: '23:00',
            text: 'I think Marvel is overrated???',
            isRead: true,
            isEdited: false
          }
        ]
      },
      {
        username: 'Clark Kent',
        userAvatar: 'https://cdn.movieweb.com/img.news.tops/NEHlYyLvWH6wLN_2_b/Justice-League-Movie-Superman-Comic-Book-Adaption.jpg',
        isOnline: true,
        messages: [
          {
            date: '2018-07-01',
            time: '23:00',
            text: 'I think Marvel is overrated???',
            isRead: true,
            isEdited: false
          }
        ]
      }
    ];
    const chatListItems = chats.map((chat, i) => (<ChatListItem key={i} data={chat}/>));

    return(
      <div>
        {chatListItems}
      </div>
    );
  }
}