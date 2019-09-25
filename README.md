# SampleAADImplicitGrantFlow
A code sample of an ASP.NET Core Web API with a React web client, authenticated with the Azure Active Directory implicit grant flow.

# Azure Prerequisites
1. You have an already configure Azure subscription.
2. An App Registration has been created in Azure Active Directory.
3. You have modified the App Manifest in the AAD app to use the implicit grant auth flow, and added custom roles 'AdminUser' and 'StandardUser'.
4. You have modified the associated Enterprise Application to assign users or groups to the custom roles.

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
* If you logged in with an authorized user, you should see a result like this (where the token/user is printed to the screen for illustration purposes).
![Successful Auth Result](images/test-run.PNG?raw=true "Screenshot: Successful Auth Result")
* If you logged in with an unauthorized user, you should see a 403 (forbidden) result return from the server. 
![Unauthorized Result](images/403-result.PNG?raw=true "Screenshot: Unauthorized Result")

# Additional reference links
* https://docs.microsoft.com/en-us/azure/active-directory/develop/v2-oauth2-implicit-grant-flow
* https://docs.microsoft.com/en-us/azure/active-directory/develop/howto-add-app-roles-in-azure-ad-apps
* https://github.com/AzureAD/azure-activedirectory-library-for-js
* https://jwt.ms/
