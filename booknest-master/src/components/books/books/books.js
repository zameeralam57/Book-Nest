import "./books.css"
import Header from "../../header/header";
import Footer from "../../footer/footer";

import { useSelector } from "react-redux";
// A React-Redux hook used to select data from the Redux store. This is important to access global state (e.g., currentUser, categoryList, etc.).

import { useEffect, useState } from "react";
// useEffect: A React hook that lets you run side-effects in your component. It is typically used for data fetching, subscriptions, and manual DOM manipulations. Here it runs after the component is mounted to load books, categories, and authors.
// useState: Used for managing local component state. You define multiple pieces of state, like bookData, authors, bookError, etc.

import axios from "../../../interceptor.js";
// Axios is a popular HTTP client for making requests to the backend. It is used here to fetch book data, filter books by category or price, and handle other API requests.

import { useLocation, useNavigate } from "react-router-dom";
// useLocation: This hook provides access to the current location object, useful for reading data passed between routes.
// useNavigate: A hook used to programmatically navigate to different pages, like /cart, /viewDescription, etc.

import { apiEndPoint } from "../../../webApi/webapi";
// This imports constants representing different API endpoints, such as TOTAL_BOOKS, PRICE, BOOK_BY_CATEGORY, etc. This makes API calls more maintainable and centralized.

import { ToastContainer, toast } from "react-toastify";
// ToastContainer: Renders a container for toast notifications. It provides users with real-time feedback for actions like adding books to the cart or login warnings.
// toast: Used to display notifications like success, warning, or error messages.

import InfiniteScroll from "react-infinite-scroll-component";
// A library to implement infinite scrolling, which loads more books as the user scrolls down. This provides a more dynamic experience compared to traditional pagination.

// The Books component renders a page where users can browse, filter, and buy books. It uses state management for dynamic content and API requests for data fetching.
function Books() {
    const { currentUser } = useSelector((state) => state.user);         // uses the useSelector hook from React Redux to extract the currentUser property from the user slice of the Redux state. This allows the component to access the current user information.
    // The curly braces {} are used for destructuring assignment. It allows you to extract specific properties from an object and assign them to variables with the same names.

    const location = useLocation();         // uses the useLocation hook from React Router to retrieve the current location object. This object contains information about the current URL, including any query parameters or state data.
    
    // The question mark ? is the optional chaining operator. It allows you to safely access nested properties without causing an error if the parent property is null or undefined.
    const keyword = location.state?.books;          // extracts the books property from the location.state object, if it exists. This could be used to filter the list of books based on a keyword.

    const flag = location.state?.status;            // extracts the status property from the location.state object, if it exists. This could be used to indicate the status of a book search or other operation.

    const navigate = useNavigate()
    const { categoryList, error, isLoading } = useSelector((state) => state.category)           // extracts the categoryList, error, and isLoading properties from the category slice of the Redux state. This provides information about the available book categories, any errors that occurred, and whether the category data is currently loading.
    
    // --------------State Variables------------
    // bookData: Holds the list of books fetched from the backend
    const [bookData, setData] = useState([]);

    // authors: Stores a list of authors that is displayed for filtering.
    const [authors, SetAuthors] = useState([]);

    // bookError: Stores error messages if book data fails to load.
    const [bookError, setBookError] = useState("");

    // page: Manages the current page number for infinite scrolling.
    const [page, setPage] = useState(null);

    // loading: Indicates whether more books are being loaded for infinite scroll.
    const [loading, setLoading] = useState("");






    // --------------API Request------------
    // Fetches books from the backend based on the current page number and appends them to bookData. The setPage function increments the page number so that the next call will load more books.
    const loadBooks = async () => {
        try {
            let response = await axios.get(apiEndPoint.TOTAL_BOOKS + `?page=${page}`);           // calls the axios.get method, which is used to make a GET request to the specified URL. The await keyword indicates that this operation is asynchronous and the function will pause until the request is completed.
            if (response.data.status) {
                setData([...bookData, ...response.data.bookList]);           // Spread Syntax (...) allows you to expand an iterable (like an array) and insert its elements into another array or other contexts.
                setPage(page + 1);
                setLoading(false);
            }
        }
        // Catch any errors during the API call and set an error message in bookError
        catch (err) {
            setBookError("Something went wrong....")
        }
    }

    // Handles the "Buy Now" functionality for a book. If the user is logged in (currentUser exists), the function navigates to the cart page, passing the book as state. If not logged in, it shows a warning message using toast.warning.
    const BuyNow=async(book,flag)=>{
        const buy={
          Buybook:[{bookId:book}],
          Buyflag:true
        }
         try{
           if(currentUser){
            navigate("/cart",{state:{Buybook:buy}})
              
    
           }else{
             toast.warning("You Have To Login First ")
           }
    
         }catch(err){
          if(err.response.status==500)
          toast.error("Oops Something Went Wrong");
         }
      }
      
      // Filters books based on a price range selected by the user. The price is passed to the backend, which responds with filtered books.
    const handlePriceSelect = async (price) => {
        const maxPrice = price.split("-")[0];
        const minPrice = price.split("-")[1];
        try {
            let response = await axios.post(apiEndPoint.PRICE, { minPrice: minPrice, maxPrice: maxPrice });
            setData(response.data.result);
        }
        catch (err) {
        }
    }

    // Fetches books filtered by a category ID. The categoryId is passed as a parameter to the API to return books in that category.
    const viewBookByCategory = async (categoryId) => {
        try {
            let response = await axios.post(apiEndPoint.BOOK_BY_CATEGORY, { categoryId });
            if (response.data.status) {
                setData(response.data.result);
            }
        }
        catch (err) {
        }
    }

    // Filters books by the author's name. When the user selects an author, the request is made to retrieve books written by that author.
    const searchByAuther = async (author) => {
        try {
            let response = await axios.post(apiEndPoint.SEARCH_BY_AUTHER, { author: author });         // This code uses the axios.post method, which is typically used for creating new resources on the server. The author information is sent as a JavaScript object in the second argument, { author: author }. This object defines a key-value pair where the key is "author" and the value is the author variable.

            // let response = await axios.get(apiEndPoint.BOOKS_BY_AUTHOR + `?author=${author}`);
            //This code uses the axios.get method, which is typically used for retrieving existing resources from the server. The author information is sent as a query parameter in the URL. The endpoint apiEndPoint.BOOKS_BY_AUTHOR is concatenated with ?author=${author} using template literals. Here, the author variable's value is inserted into the URL.

            SetAuthors(response.data.result)
        }
        catch (err) {
        }
    }
    
    // Adds a book to the user's cart if they are logged in. It sends a POST request with the book's ID and the user's ID.
    const addToCart = async (id) => {
        try {
            if (currentUser) {
                let response = await axios.post(apiEndPoint.ADD_TO_CART, { bookId: id, userId: currentUser._id });
                toast.success("Book is added to your cart");
            }
            else {
                toast.warning("You have to Login first");
            }
        }
        // Display appropriate toast messages based on the response, such as if the book is already in the cart or if the user is not logged in.
        catch (err) {
            if (err.response.status == 400)
                toast.warning("Book is already exists in cart");
            if (err.response.status == 500)
                toast.error("Oops Something went wrong");
        }
    }





    // --------------Event Handlers------------

    const featchAllBooks = async () => {

    }
    const viewDescription = (book) => {
        navigate("/viewDescription", { state: { bookDetails: book } })
    }

    const viewListInbooks = (data) => {
        const list = data
        navigate("/bookList", { state: { dataList: list } });
    };



    useEffect(() => {
        featchAllBooks();
        viewBookByCategory();
        searchByAuther();
    }, []);







    return <>
        <Header />
        <ToastContainer />
        <div className="container-fluid">
            <div className="FilterMainDiv">
                <div className="RightPart"  >
                    <button className="SeacrchButton">Search</button>
                    <div className="rightpartHeading">
                        <p className="Heading">Categories</p>
                    </div>
                    <div className="CategoryList"><ul>
                        <li className="listhover" onClick={featchAllBooks}>All</li>
                        {!error && categoryList.map((category, index) =>
                            <li className="listhover" onClick={() => viewBookByCategory(category._id)}>{category.categoryName}</li>)}
                    </ul>
                    </div>
                    <div class="dropdown dropdownbtn">
                        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton dropdownofOther">
                            {(authors)}
                            {authors.map((book, index) =>
                                <a class="dropdown-item " onClick={() => { searchByAuther(book.author) }}>{book.author}</a>
                            )}
                        </div>
                    </div>

                </div>
                <div className="LeftPart" >
                    <div className="mainImage">
                        <img
                            src="../../img/banner/9.jpg"
                            alt=""
                        />
                    </div>
                    <div className="headingbook">
                        <p className="heading">BOOK</p>
                    </div>
                    <div className="gridAndList">
                        <div className="grid d-flex">
                            <i className="fa fa-th-large" aria-hidden="true"></i>
                            <div className="mb-5">
                                <spna className="gridName">Gride</spna>
                            </div>
                            
                            
                        </div>

                    </div>
                    {/* cart */}
                    <InfiniteScroll
                        dataLength={bookData.length}
                        next={loadBooks}
                        hasMore={bookData.length < 100}
                        endMessage={<p>Books are Finished</p>}>
                            <div className="row m-auto">
                            {bookData.filter((book) => book.permission && book.status == true).map((book, index) =>
                                <div key={index} className="col-md-4 col-sm-6 mt-5" data-aos="fade-up" data-aos-duration="500">
                                    <div className="card">
                                        <img src={"https://drive.google.com/uc?export=view&id=" + book.photos.substring(32, book.photos.lastIndexOf("/"))} className="img-fluid cardimg" />
                                        <button href="" className="card-action"><i className="fa fa-shopping-cart carticon mt-3" style={{ cursor: "pointer" }} onClick={() => addToCart(book._id)}></i></button>
                                        <div className="card-body">
                                            <p className="card-text cardtitle">{book.name.substring(0, 15)}</p>
                                            <p className="cardprice"><span className="cardtitle">Author: </span>{book.author.substring(0, 10)}</p>
                                            <b className="card-text cardprice"><span className="cardtitle">Price: </span>₹{book.price}</b>
                                            <br />
                                            <button className="btn mt-2  bookbuynowbutton" onClick={()=>BuyNow(book,true)} >Get Now</button><span className="viewcircle ml-2 "  onClick={() => viewDescription(book)}><small className="viewicon p-2 " ><i className="fa fa-eye" /></small></span>
                                        </div>
                                    </div>
                                </div>)}
                                </div>
                    </InfiniteScroll>
                    {/* cart */}
                    {/* cart */}
                    <div className="row m-auto">
                        {keyword?.filter((book) => book.permission && book.status == true).map((book, index) =>
                            <div key={index} className="col-md-4 col-sm-6 mt-5" data-aos="fade-up" data-aos-duration="500">
                                <div className="card">
                                    <img src={"https://drive.google.com/uc?export=view&id=" + book.photos.substring(32, book.photos.lastIndexOf("/"))} className="img-fluid cardimg" />
                                    <a href="" className="card-action"><i className="fa fa-shopping-cart carticon mt-3" style={{ cursor: "pointer" }} onClick={() => addToCart(book._id)}></i></a>
                                    <div className="card-body">
                                        <p className="card-text cardtitle">{book.name.substring(0, 15)}</p>
                                        <p className="cardprice"><span className="cardtitle">Author: </span>{book.author.substring(0, 10)}</p>
                                        <b className="card-text cardprice"><span className="cardtitle">Price: </span>₹{book.price}</b>
                                        <br />
                                        <button className="btn mt-2  bookbuynowbutton" >Get Now</button><span className="viewcircle ml-2 "  onClick={() => viewDescription(book)}><small className="viewicon p-2 " ><i className="fa fa-eye" /></small></span>
                                    </div>
                                </div>
                            </div>)}
                    </div>

                    {/* cart */}
                </div>
                <div>
               </div>
            </div>

        </div>
        <Footer/>

    </>


}

export default Books;


// When to Use async:

// Asynchronous Operations: When you're dealing with operations that might take time to complete, such as fetching data from an API, reading or writing files, or performing database queries.
// Promises: To work with promises in a more readable and concise way, especially when chaining multiple promises.
// Generators: As a cleaner alternative to generators for asynchronous workflows.

// Internal Working Mechanism:

// Promise Creation: When an async function is called, it immediately returns a promise.
// Execution: The function's body is executed asynchronously.
// await Keyword: When the await keyword is used before a promise, the function pauses until the promise is resolved. If the promise is rejected, an error is thrown.
// Result Handling: If the promise is resolved, the await expression returns the resolved value. If the promise is rejected, an error is thrown.
// Promise Resolution: The returned promise from the async function is resolved with the value returned by the function or rejected with any errors that occurred.


// Promises

// Promises are objects that represent the eventual completion (or failure) of an asynchronous operation. They provide a way to handle asynchronous operations in a more structured and readable manner compared to traditional callbacks.   
// How they work:
// When an asynchronous operation starts, a promise is created.
// The promise can be in one of three states: pending (initial state), fulfilled (operation completed successfully), or rejected (operation failed).
// Once the operation completes, the promise is either resolved with a value (if successful) or rejected with an error (if failed).
// You can attach handlers to a promise using the .then() and .catch() methods to handle the resolved or rejected values, respectively.

// Generators

// What are they? Generators are a special type of function that can pause and resume execution, allowing for asynchronous control flow. They are often used for creating iterators or implementing asynchronous workflows.
// How they work:
// Generators use the yield keyword to pause execution and return a value.
// When a generator function is called, it returns a generator object.   
// Calling the next() method on the generator object resumes execution and returns the next value yielded by the generator.
// Generators can be used with asynchronous operations by yielding promises.

// interpolate variables or expressions
// In JavaScript and React, template literals provide a convenient way to interpolate variables or expressions directly within the string. This means you can embed dynamic values into your strings without having to concatenate them manually.
// const name = 'Alice';        using quotes
// const greeting = `Hello, ${name}!`;          using backtick
// console.log(greeting); // Output: Hello, Alice!

// Template literals are enclosed in backticks
// The expression within ${} is evaluated and its value is inserted into the string.
// Template literals can be used in various contexts, such as string concatenation, JSX expressions, and function arguments.


// The +?page=${page} part in the URL is used to add a query parameter to the API request. Query parameters are used to pass additional information to the server along with the URL. In this case, the page query parameter is used to specify the page number of the requested data.

// ?: This character indicates the start of a query string. Query strings are used to pass additional information to the server along with the URL.
// page: This is the name of the query parameter. It will be used by the server to identify the requested page.
// =${page}: This sets the value of the page query parameter to the value of the page variable.
// So, when the URL is constructed, it will look something like this:

// https://api.example.com/books?page=3
// This means that the request is asking for the third page of books from the API.

// The + sign in front of ?page=${page} is not strictly necessary in this case, as the concatenation operator (+) is used by default in JavaScript for strings. However, it can be included for better readability, especially when dealing with more complex expressions.


// You can add multiple query parameters to a URL by separating them with ampersands (&). For example: https://api.example.com/books?page=3&category=fiction
// Query parameters are often used to filter, sort, or paginate data.
// The server-side application is responsible for interpreting and processing the query parameters.


