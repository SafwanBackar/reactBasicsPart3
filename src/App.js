import React, { Component } from 'react'
import './App.css';
import ComponentC from './Components/ComponentC';
import PostList from './Components/PostList';
import { UserProvider } from './Components/UserContext';


class App extends Component {
  render() {
    return (
      <div className='App'>
        {/* <UserProvider value='Backar'>
          <ComponentC/>
        </UserProvider> */}

        <PostList/>
      </div>
    )
  }
}

export default App

