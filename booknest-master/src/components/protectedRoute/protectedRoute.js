// The ProtectedRoute component is used to restrict access to certain routes in your application, allowing only authenticated users (i.e., users who are logged in) to access those routes. If a user is not authenticated, they are redirected to a login page (in this case, the /signin route).

import { useSelector} from "react-redux";
// this hook allows the component to access the global Redux store. In this case, it's used to check if there’s a logged-in user (currentUser) by retrieving data from the user slice in Redux.

import {Navigate}from "react-router-dom"
// This component is used for navigation or redirection in React Router. If the user is not authenticated (i.e., currentUser is null), Navigate redirects the user to the /signin route.



// The ProtectedRoute component is a higher-order component (HOC) that wraps around any child components (or pages) that should be protected. It ensures that only authenticated users can access the route and its content.
function ProtectedRoute({children}){
    const {currentUser}= useSelector((state)=>state.user);
  
    if(!currentUser)
    return <Navigate to='/signin'/>
    return children;
}

export default ProtectedRoute;



// Props:

// children:
// This prop represents the components or elements that are wrapped inside the ProtectedRoute when it's used. It typically represents the protected page or component that you want to display if the user is authenticated.


// Redux State Check:

    // const { currentUser } = useSelector((state) => state.user);:
        // The useSelector hook extracts the currentUser from the Redux state (specifically from the user slice).
    // currentUser:
        // If the user is logged in, currentUser will hold information about the logged-in user (e.g., their ID, email, name).
        // If the user is not logged in, currentUser will be null or undefined.


// Logic for Protecting the Route:

// if (!currentUser):

    // If currentUser is null or not set, it means the user is not logged in.
    // In this case, the component will return the Navigate component, which will redirect the user to the /signin page.
    // Why: This prevents unauthorized users from accessing protected routes and forces them to sign in before proceeding.

// return children;:

    // If the user is authenticated (i.e., currentUser exists), the ProtectedRoute simply renders the children that were passed to it. This could be the protected component, page, or any JSX that requires user authentication.


// Summary:
// Purpose:

// The ProtectedRoute component ensures that only authenticated users can access certain pages in your application.
// If a user is not authenticated, they are redirected to the login page (/signin).
// How It Works:

// It checks the currentUser from the Redux state. If a user is logged in, it renders the children (protected content). If not, it redirects them to the login page.
// Usage:

// Used to wrap around components or routes that need protection, like user dashboards, profiles, or any other restricted content.
