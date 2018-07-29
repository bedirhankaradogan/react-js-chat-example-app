import React, { Component } from 'react';
import store from './redux/store';

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
      Chats,
      User,
      ActiveUserId
    } = store.getState();

    return (
      <div className={'page'}>

        <div className={'page-left-bar box-sizing'}>
          <ChatList chats={Chats}/>
        </div>

        <div className={'page-content'}>
          <ChatDetail user={User} activeUserId={ActiveUserId}/>
        </div>
        
      </div>
    );
  }
}

export default App;
