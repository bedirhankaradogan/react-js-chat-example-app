import React, { Component } from 'react';

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
    return (
      <div className={'page'}>

        <div className={'page-left-bar box-sizing'}>
          <ChatList/>
        </div>

        <div className={'page-content'}>
          <ChatDetail/>
        </div>
        
      </div>
    );
  }
}

export default App;
