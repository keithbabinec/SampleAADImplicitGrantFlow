import React from 'react';
import './App.css';
import AuthenticatedView from './Components/AuthenticatedView/AuthenticatedView';
import UnauthenticatedView from './Components/UnauthenticatedView/UnauthenticatedView';
import Api from './Services/Api/Api';

class App extends React.Component {
  render() {
    let userName = this.props.user;
    let token = this.props.bearerToken;
    let apiUrl = this.props.apiUrl;

    // normally we would use react-router here for actual url routing.
    // but for the purposes of making an easy sample we are just switching between views in-line.

    let view = null;
    if (userName) {
      let api = new Api(apiUrl, token)
      view = <AuthenticatedView user={userName} bearerToken={token} api={api} />;
    }
    else {
      view = <UnauthenticatedView />;
    }

    return (
      <div className="App">
        <p>
          Hello World
        </p>
        {view}
      </div>
    );
  }
}

export default App;
