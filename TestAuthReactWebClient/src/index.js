import React from 'react';
import ReactDOM from 'react-dom';
import * as AuthenticationContext from 'adal-vanilla/lib/adal'
import App from './App';

// store the ADAL config:
window.adalConfig = {
    clientId: '<FIX: add your application ID from the AAD app registration>',
    tenant: '<FIX: add your tenant ID from Azure Active Directory>',
    cacheLocation: 'sessionStorage',
    popUp: false
};

var authContext = new AuthenticationContext(window.adalConfig);

if (authContext.isCallback(window.location.hash)) {
    // this handles the redirect back from the AAD sign-in page.
    // it extracts the hash and processes the AAD token (or error) received.
    authContext.handleWindowCallback();
}

function startApplication(username, token) {
    // the url of the backend api
    let apiUrl = '<FIX: Add the ASP.NET Core Web API endpoint Url here. A local debug instance may look something like this: https://localhost:44000/>'

    // render the main application
    ReactDOM.render(<App user={username} bearerToken={token} apiUrl={apiUrl} />, document.getElementById('root'));
}

var user = authContext.getCachedUser();

if (user) {
    let clientId = window.adalConfig.clientId;
    authContext.acquireToken(clientId, function (errorDesc, token, error) {
        if (error) {
            // acquire token failure
            // In this case the callback passed in the Authentication request constructor will be called.
            authContext.acquireTokenRedirect(clientId, null, null);
        }
        else {
            //acquired token successfully
            startApplication(user.userName, token);
        }
    });
}
else {
    // Initiate login
    authContext.login();
}
