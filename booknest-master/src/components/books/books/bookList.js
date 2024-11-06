import "./bookList.css";
import { useLocation } from "react-router-dom";
import Books from "./books";
function BookList() {

    const location = useLocation();
    const books = location.state.dataList;
    return <>
       {books.map((book)=>
        <div className="mainDivofList">
            <div className="listRigthPart">
                <div className="ListBookImage">
                    <img
                        className="ListBookImg"
                        src="https://images-eu.ssl-images-amazon.com/images/I/81KUTPjT56L._AC_UL600_SR600,600_.jpg"
                        alt=""
                    />
                </div>
            </div>
            <div className="leftBookList">
                <div className="booklistContaint">
                    <div className="booklistName">
                        <h3>{book.name}</h3>
                    </div>
                    <div>
                        <p className="ListPrice">
                            
                            <span> ₹ </span> {book.price}
                        </p>
                    </div>
                    <div className="booklistDes">
                        <p>
                            
                        </p>
                    </div>
                </div>
                <div className="bookListAddToCart">
                    <a href="">Add To Cart</a>
                    <i classname="fa fa-shopping-cart" />
                </div>
            </div>
             </div>)}
    </>



}

export default BookList;