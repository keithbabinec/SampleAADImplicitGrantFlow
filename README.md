# SampleAADImplicitGrantFlow
A code sample of an ASP.NET Core Web API with a React web client, authenticated with the Azure Active Directory implicit grant flow and RBAC permissions authorization.

# Important Update: September 2020
The authentication flow described in this repository is no longer recommended. New applications should use the OAuth 2.0 Authorization code flow instead: https://github.com/keithbabinec/SampleMsalAuthorizationCodeFlow

## Tutorial Post
You can find a walkthrough tutorial on this authentication flow on my blog at this link: https://keithbabinec.com/2019/09/25/how-to-setup-the-azure-ad-implicit-grant-flow-with-react-asp-net-core-and-rbac-roles/

## Azure Prerequisites
1. You have an Azure subscription.
2. You have an App Registration that has been created in Azure Active Directory.
3. You have modified the App Manifest in the AAD app to use the implicit grant auth flow, and added custom roles 'AdminUser' and 'StandardUser'.
4. You have modified the associated Enterprise Application to assign users or groups to the custom roles.

## ADAL or MSAL?
If you need to support non-Azure AD accounts (ex: personal Microsoft accounts), you will need to use the MSAL.js library and the new v2 Microsoft Identity Platform. This code sample repo authenticates Azure AD users with ADAL.js.

## Security Warning
Be aware that the JavaScript code sample uses the browser's sessionStorage to store tokens. This means the token could be extracted if the site is vulnerable to an XSS attack or if untrusted/malicious scripts are executed in your web app. Keep this in mind when handling tokens.

# Build/Run

## API Server
1. Open the Visual Studio solution in Visual Studio 2019 (.NET Core 2.2 SDK is required).
2. Allow the nuget package restore to complete.
3. Open the [Startup.cs](https://github.com/keithbabinec/SampleAADImplicitGrantFlow/blob/master/TestAuthAspNetCoreApi/Startup.cs) file and inject your environment specific details in the fields. 
4. Review the project properties > debug : make sure that SSL is enabled.
5. Start the project (F5).

## Web Client
1. Navigate to the [Root Directory](https://github.com/keithbabinec/SampleAADImplicitGrantFlow/tree/master/TestAuthReactWebClient).
2. Run 'npm install' to install the packages.
3. Open the [Index.js](https://github.com/keithbabinec/SampleAADImplicitGrantFlow/blob/master/TestAuthReactWebClient/src/index.js) file and update any environment specific values.
4. Run 'npm start' to start the local debug web instance. 

## What happens when it runs?
When you start the web client it should immediately redirect to your AAD tenant login page. Supply the AAD user credentials here. Then it should redirect back to the web client (if configured correctly), and then call the web API using the bearer token received in the callback from AAD.

If you successfully logged in with an authorized user, you should see a result like this (where the token/user is printed to the screen for illustration purposes).
![Successful Auth Result](images/test-run.PNG?raw=true "Screenshot: Successful Auth Result")

If you logged in with an unauthorized user, you should see a 403 (forbidden) result return from the server. 
![Unauthorized Result](images/403-result.PNG?raw=true "Screenshot: Unauthorized Result")

# Additional reference links
* https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-implicit-grant-flow
* https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-add-app-roles-in-azure-ad-apps
* https://github.com/AzureAD/azure-activedirectory-library-for-js
* https://jwt.ms/
