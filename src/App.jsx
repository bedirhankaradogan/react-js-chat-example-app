import React, { Component } from 'react';

// Styles
import './assets/styles/index.scss';
// Styles

// Components
import ChatList from './components/chat/list/ChatList.jsx';
// Components

class App extends Component {
  render() {
    return (
      <div className={'page'}>

        <div className={'page-left-bar box-sizing'}>
          <ChatList />
        </div>

        <div className={'page-content'}>
          content
        </div>
        
      </div>
    );
  }
}

export default App;
