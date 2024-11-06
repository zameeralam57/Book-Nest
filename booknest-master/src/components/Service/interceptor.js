// The interceptor component sets up a custom Axios instance with a request interceptor. This allows you to define specific configurations or actions to be taken automatically with every request made using this instance of Axios.

import api from 'axios';
// This imports the axios library, which is a promise-based HTTP client for making network requests.



// This method creates a new Axios instance with a custom configuration. Here, it sets up the base configuration for all requests made using this instance.
const axios = api.create({
    baseURL:`http://localhost:3006`,
//  baseURL: Specifies the base URL for all HTTP requests. This means every request made through this Axios instance will prepend the base URL http://localhost:3006 to the request path.
// Example: A request to /books would be sent to http://localhost:3006/books.
});



// Interceptors are functions that Axios calls for every request and response. They allow you to modify the request or response before they are sent or received.
// This method takes two arguments:
// A success handler (for modifying the request configuration before it is sent).
// An error handler (for handling errors before the request is sent).
axios.interceptors.request.use(

    // config: This object contains the request configuration, such as headers, URL, data, method, etc.
    // This function is executed before the request is sent. You can modify or add new configurations to the request here (e.g., adding authentication tokens, custom headers, etc.).
    function(config){
        return config;
    },

    // This function is executed if there's an error while making the request (before the request is sent to the server). It can be useful for handling errors like invalid request configurations or missing parameters.
    function(error){
        return error;
    }
);
export default axios;


// In this case:
// The success handler is returning the config as is, meaning no modifications are made to the request before it's sent to the server. However, you could modify this function to add custom headers, tokens, or any other configurations required for your requests.
// The error handler returns the error object. This error can be processed further or logged for debugging purposes.
