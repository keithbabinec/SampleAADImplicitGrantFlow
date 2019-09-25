import React from 'react';

class AuthenticatedView extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      apiCallCompleted: false,
      apiError: null,
      apiResult: null
    };
  }
  componentDidMount() {
    // after the component has mounted, call the API and save the result into
    // the local component state. this will trigger a render once the state changes after the callback.
    this.props.api.CallAdminOperation().then((result) => {
        this.setState({
          apiResult: result,
          apiCallCompleted: true
        });
      }).catch((error) => {
        this.setState({
          apiError: error,
          apiCallCompleted: true
        });
    });
  }
  render() {
    let userName = this.props.user;
    let token = this.props.bearerToken;
    let result = this.state.apiResult;

    return (
      <div>
        <p>
          Logged in user: {userName}
        </p>
        <p>
          Bearer token: {token}
        </p>
        <p>
          Api result: {result}
        </p>
      </div>
    );
  }
}

export default AuthenticatedView;
