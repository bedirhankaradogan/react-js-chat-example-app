import React, { Component } from 'react';
import store from './redux/store/index.js';

// Styles
import './assets/styles/index.scss';
// Styles

// Libraries
import './assets/libraries/fontawesome/css/all.min.css';
// Libraries

// Components
import ChatList from './components/chat/list/ChatList.jsx';
import ChatDetail from './components/chat/detail/ChatDetail.jsx';
// Components

class App extends Component {
  render() {
    const {
      chats,
      user,
      activeUserId
    } = store.getState();

    return (
      <div className={'page'}>
        <div className={'page-left-bar box-sizing'}>
          <ChatList chats={chats}/>
        </div>
        <div className={'page-content'}>
          <ChatDetail user={user} activeUserId={activeUserId}/>
        </div>
      </div>
    );
  }
}

export default App;