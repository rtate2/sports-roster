import React from 'react';
import firebase from 'firebase/app';
import firebaseConnection from '../helpers/Data/connection';
import Auth from '../components/Auth/auth';
import MyNavbar from '../components/MyNavbar/myNavbar';

import './App.scss';

firebaseConnection.firebaseApp();

class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    })
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <MyNavbar authed={authed} />
        <button className="btn btn-success">Nice Button</button>
        {
          (authed) ? (<div>You Logged In</div>) : (<Auth />)
        }
      </div>
    );
  }
}

export default App;
