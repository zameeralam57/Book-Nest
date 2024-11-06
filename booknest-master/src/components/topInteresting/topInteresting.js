import { useSelector } from "react-redux";
import "./top.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../interceptor.js";
import { apiEndPoint } from "../../webApi/webapi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BooksCard from "../BooksCard/BooksCard.js"; 



function TopInteresting() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();

  const viewDescription = (book) => {
    navigate("/viewDescription", { state: { bookDetails: book } });
  };

  const [productByCategory, setProductByCategory] = useState([]);
  const [isError, setIsError] = useState(null);
  //const { TopProductList } = useSelector((state) => state.topProduct);
  const TopProductList = [
    { _id: "1", name: "A To Z Dog Training", author: "Dr S K Budhiraj", price: 0, image: "bk1.png" },
    { _id: "2", name: "The Big Book Of Designer", author: "Gabriel García", price: 100, image: "bk2.jpg" },
    { _id: "3", name: "The Great Indian Novel", author: "Edith Wharton", price: 80, image: "bk3.jpeg" },
    { _id: "4", name: "The East Indian", author: "Brinda Charry", price: 90, image: "bk4.jpg" },
    { _id: "5", name: "The Asura", author: "Anand Neelkantan", price: 150, image: "bk5.jpg" },
    { _id: "6", name: "Run And Hide", author: "Pankaj Mishra", price: 200, image: "bk6.jpeg" },
    { _id: "7", name: "The India Why", author: "S Jayshankar", price: 0, image: "bk7.jpeg" },
    { _id: "8", name: "AZADI", author: "Arundhati Roy", price: 200, image: "bk8.jpeg" },
];
  const { categoryList, error, isLoading } = useSelector(
    (state) => state.category
  );

  const loadProductByCategory = async (categoryId) => {
    try {
      let response = await axios.post(apiEndPoint.BOOK_BY_CATEGORY, {
        categoryId,
      });
      if (response.data.status) {
        setProductByCategory(response.data.result);
      }
    } catch (err) {
      setIsError("Oops, something went wrong");
    }
  };

  const addToCart = async (id) => {
    try {
      if (currentUser) {
        let response = await axios.post(apiEndPoint.ADD_TO_CART, {
          bookId: id,
          userId: currentUser._id,
        });
        toast.success("Book added to your cart");
      } else {
        toast.warning("You have to log in first");
      }
    } catch (err) {
      if (err.response && err.response.status === 400)
        toast.warning("Book already exists in cart");
      else if (err.response && err.response.status === 500)
        toast.error("Oops, something went wrong");
    }
  };

  const BuyNow = async (book) => {
    const buy = {
      Buybook: [{ bookId: book }],
      Buyflag: true,
    };
    try {
      if (currentUser) {
        navigate("/cart", { state: { Buybook: buy } });
      } else {
        toast.warning("You have to log in first");
      }
    } catch (err) {
      if (err.response && err.response.status === 500)
        toast.error("Oops, something went wrong");
    }
  };

  return (
    <>
      <ToastContainer />
      <section className="our-project" id="projectid">
        <div className="container heading-design">
          <div data-aos="fade-up" data-aos-duration="400">
            <h1>
              <span>Top Books</span>
            </h1>
            <p className="sub-heading container">
              <span>
                Browse the collection of our best selling and top interesting
                products. <br /> You'll definitely find what you're looking for.
              </span>
            </p>
          </div>
          <div
            className="container topinteresting"
            data-aos="fade-up"
            data-aos-duration={400}
          >
            <nav>
              <div
                className="nav nav-tabs row"
                style={{ paddingLeft: "18%" }}
                id="nav-tab"
                role="tablist"
              >
                <button
                  className="nav-link active col-2"
                  id="nav-all-tab"
                  data-bs-toggle="tab"
                  data-bs-target="#nav-all"
                  type="button"
                  role="tab"
                  aria-controls="nav-all"
                  aria-selected="true"
                >
                  All
                </button>
                {!error &&
                  categoryList
                    ?.filter((category) => category.categoryName === "Classics")
                    .map((category, index) => (
                      <button
                        key={index}
                        onClick={() => loadProductByCategory(category._id)}
                        className="nav-link col-2"
                      >
                        {category.categoryName}
                      </button>
                    ))}
                {!error &&
                  categoryList
                    ?.filter((category) => category.categoryName === "Horror")
                    .map((category, index) => (
                      <button
                        key={index}
                        onClick={() => loadProductByCategory(category._id)}
                        className="nav-link col-2"
                      >
                        {category.categoryName}
                      </button>
                    ))}
                {!error &&
                  categoryList
                    ?.filter((category) => category.categoryName === "History")
                    .map((category, index) => (
                      <button
                        key={index}
                        onClick={() => loadProductByCategory(category._id)}
                        className="nav-link col-2"
                      >
                        {category.categoryName}
                      </button>
                    ))}
              </div>
            </nav>
          </div>
          <div
            className="tab-content "
            id="nav-tabContent"
            data-aos="fade-up"
            data-aos-duration={500}
          >
            <div
              className="tab-pane fade show active container"
              id="nav-all"
              role="tabpanel"
            >
              <div className="row m-auto">
                {TopProductList?.length > 0 ? (
                  TopProductList.map((book, index) => (
                    <div key={book._id} className="col-md-3 col-sm-6 mt-5">
                      <div className="card">
                      <img
                      src={`img/cards/${book.image }`}
                      className="img-fluid cardimg"
                      alt={book.name}
                      />

                        <a className="cardcircle">
                          <i
                            className="fa fa-shopping-cart carticon mt-3"
                            style={{ cursor: "pointer" }}
                            onClick={() => addToCart(book._id)}
                          ></i>
                        </a>
                        <div className="card-body">
                          <p className="card-text cardtitle">
                            {book?.name.substring(0, 20)}
                          </p>
                          <p className="cardprice">
                            <span className="cardtitle">Author: </span>
                            {book.author.substring(0, 15)}
                          </p>
                          <b className="card-text cardprice">
                            <span className="cardtitle">Price: </span>₹
                            {book?.price === 0 ? "Free" : book.price}
                          </b>
                          <br />
                          <button
                            className="btn mt-2  buttonhover"
                            onClick={() => BuyNow(book, true)}
                          >
                            Get Now
                          </button>
                          <span
                            className="viewcircle ml-2"
                            onClick={() => viewDescription(book, 1)}
                          >
                            <small className="viewicon p-2">
                              <i className="fa fa-eye" />
                            </small>
                          </span>
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p>No products available.</p>
                )}
              </div>
              
            </div>
            <div className="row m-auto">
              {productByCategory
                .filter((book) => book.permission && book.status === true)
                .map((book, index) => (
                  <div key={book._id} className="col-md-3 col-sm-6 mt-5">
                    <div className="card">
                    <img
                     src={`img/cards/${book.image }`}
                     className="img-fluid cardimg"
                     alt={book.name}
                    />
                      
                      <a className="cardcircle">
                        <i
                          className="fa fa-shopping-cart carticon mt-3"
                          style={{ cursor: "pointer" }}
                          onClick={() => addToCart(book._id)}
                        ></i>
                      </a>
                      <div className="card-body">
                        <p className="card-text cardtitle">
                          {book.name.substring(0, 20)}
                        </p>
                        <p className="cardprice">
                          <span className="cardtitle">Author: </span>
                          {book.author.substring(0, 15)}
                        </p>
                        <b className="card-text cardprice">
                          <span className="cardtitle">Price: </span>₹
                          {book.price}
                        </b>
                        <br />
                        <button className="btn mt-2 buttonhover">
                          Get Now
                        </button>
                        <span
                          className="viewcircle ml-2"
                          onClick={() => viewDescription(book)}
                        >
                          <small className="viewicon p-2">
                            <i className="fa fa-eye" />
                          </small>
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default TopInteresting;
