import React, { Component } from 'react';

// Components
import ChatList from './components/chat/list/ChatList.jsx';
// Components

// Styles
import './assets/styles/index.css';
// Styles

class App extends Component {
  render() {
    return (
      <div className={'page'}>

        <div className={'page-left-bar'}>
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
