import axios from 'axios';

// a simple class wrapper around the API service.
class Api {

    // constructor that requires a base URI and a bearer token.
    // note: this doesn't include any code to refresh the token over time.
    constructor(baseUri, token) {
        if (!baseUri) {
            throw new Error('the base uri was not provided');
        }
        if (!token) {
            throw new Error('the auth token was not provided');
        }

        this.AuthenticatedApi = axios.create({
            baseURL: baseUri,
            headers: { 
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        });
    }

    // the authenticated api
    AuthenticatedApi;

    // an api operation that calls one of the authorized endpoints.
    CallAdminOperation() {
        return this.AuthenticatedApi.get('/api/test/admin')
            .then(function (response) {
                // handle success
                return response.data;
            })
            .catch(function (error) {
                throw Error('An error has occurred calling the api: ' + error);
            });
    }
}

export default Api;