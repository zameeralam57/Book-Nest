import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import {GoogleLogin} from "@react-oauth/google";
import { jwtDecode } from 'jwt-decode';
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../router-config/userSlice";
import { useNavigate } from "react-router-dom";
import './extragoogle.css'

function WithGoogle(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    return <>
        <div className="main-container">
     
            <GoogleOAuthProvider clientId="368660196226-e8ko6g3ap9hl6dub1ufjbibi6hjm0sls.apps.googleusercontent.com">
                <GoogleLogin className='googlebutton'
                    onSuccess={credentialResponse =>{
                        const details = jwtDecode(credentialResponse.credential);
                        const userData = {name : details.given_name+" "+details.family_name,email : details.email,photo : details.picture,status:true};
                        dispatch(setCurrentUser(userData));
                        navigate("/");
                        navigate("/");
                    }}
                    onError={()=>{
                        ("Login Failed");
                    }}
                    />
            </GoogleOAuthProvider>
        </div>
    </>
}
export default WithGoogle;





// 1. GoogleOAuthProvider:

// Purpose:

// The GoogleOAuthProvider is a context provider from the @react-oauth/google library that wraps the part of your app that uses Google authentication. It provides the client ID necessary to communicate with Google's OAuth 2.0 servers.


// Attributes:

// clientId:
// This is the unique identifier for your Google OAuth application, which you get from the Google Developer Console when you configure OAuth. It allows your app to authenticate users with Google and identify your app.
// In your code, it’s set to "253200048380-kj5s3efrn407rl6tfuvuuafg014qp8vg.apps.googleusercontent.com".
// Children:
// The components inside the GoogleOAuthProvider (like GoogleLogin) will have access to the Google OAuth services (such as user authentication) when wrapped inside the provider.


// Usage:

// You must wrap components that require Google OAuth functionality (e.g., login buttons) with GoogleOAuthProvider, ensuring the client ID is passed to Google's OAuth service.



// 2. GoogleLogin:


// Purpose:

// The GoogleLogin component is used to render a Google Sign-In button that initiates the authentication process. It simplifies integrating Google OAuth login flow within your React app.


// Attributes/Props:

// onSuccess:
// This is a callback function that gets executed when the login is successful. In the provided code, this function decodes the user information from the JWT token provided by Google.
// In your case, the credentialResponse contains an encoded JWT (JSON Web Token) that holds user data.
// The successful response provides access to the Google user's profile information, such as their name, email, profile picture, etc.
// onError:
// This is a callback function that is executed if the login fails. It allows you to handle errors that occur during the login process.
// In your code, it's logging an error message ("Login Failed") in case of failure, but you could improve this by showing a user-friendly notification.
// clientId (optional):
// While clientId is typically passed in the GoogleOAuthProvider, it can also be provided directly to GoogleLogin as a prop if needed.


// Flow:

// User clicks the "Sign in with Google" button.
// The OAuth flow begins, and Google prompts the user for login and consent.
// If the login is successful, onSuccess is triggered, providing the JWT token in credentialResponse.
// If the login fails (e.g., user cancels, network issue), onError is triggered.


// Styling:

// The GoogleLogin button can be styled with custom CSS classes, as you've done with 'googlebutton'.



// 3. jwtDecode:


// Purpose:

// jwtDecode is a function used to decode JWT tokens (JSON Web Tokens). JWT tokens are used for securely transmitting information, such as user authentication data, between two parties.
// In the Google login flow, after successful authentication, Google returns a JWT token that contains information about the user (e.g., name, email, profile picture). You decode this token to extract user data.


// Usage in the Code:

// jwtDecode(credentialResponse.credential):
// This decodes the credential field from the credentialResponse object, which contains the JWT token returned by Google after successful login.
// Once decoded, the JWT reveals information such as the user's given name, family name, email, and profile picture.


// Attributes/Fields of JWT:

// The decoded JWT token contains user information in a structured format. For instance:
// given_name: User's first name.
// family_name: User's last name.
// email: User’s Google account email.
// picture: URL to the user’s Google profile picture.


// JWT Structure:

// A JWT typically consists of three parts separated by dots (.):
// Header: Contains metadata about the token, such as the algorithm used.
// Payload: Contains the actual user data (e.g., given_name, email, etc.).
// Signature: Verifies the token's authenticity.


// Code Flow:
// GoogleOAuthProvider:
// Initializes Google OAuth using the provided clientId.
// GoogleLogin:
// Renders the "Login with Google" button. Once clicked, it starts the OAuth flow. Upon successful login, it triggers the onSuccess callback.
// onSuccess Callback:
// Google sends back a JWT token within the credentialResponse. This token is decoded using jwtDecode to extract user information such as the user’s name, email, and profile picture.
// The user data is then dispatched using Redux's setCurrentUser action to store the user information in the app’s global state.
// useNavigate:
// Redirects the user to the home page (/) after a successful login.



// Additional Details:
// Google OAuth Client ID:

// The clientId must be generated from Google Cloud’s API & Services > OAuth 2.0 credentials. This is used to uniquely identify your application during the login process.
// credentialResponse Object:

// This object contains the credential property, which holds the JWT token issued by Google. You pass this to jwtDecode to extract user details.
// Redux Dispatch:

// After decoding the JWT, you store the extracted user information (name, email, picture) into the global state using Redux’s dispatch method (setCurrentUser action). This allows other parts of the app to access the logged-in user data.



// Summary of GoogleOAuthProvider, GoogleLogin, and jwtDecode:
// GoogleOAuthProvider: Initializes Google OAuth, providing the clientId to Google’s OAuth service. Wraps the component that uses Google login functionality.
// GoogleLogin: Renders the Google Login button, initiates the login flow, and handles success or failure through the onSuccess and onError callbacks.
// jwtDecode: Decodes the JWT token returned by Google after successful login, allowing you to extract user data like name, email, and profile picture from the token.
