import axios from "../../../interceptor.js";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { apiEndPoint } from "../../../webApi/webapi";
import NotUpload from "./notUpload/notUpload";
function UserBooks() {
    const { currentUser, isError } = useSelector((state) => state.user);
    const [booklist, setBooks] = useState([]);
    const navigate = useNavigate();
    const featchBookByUserId = async () => {
        try {
            let response = await axios.post(apiEndPoint.SEARCH_BOOK_BY_USERID, { userId: currentUser._id });
            if (response.data.status)
                setBooks(response.data.result);
        }
        catch (err) {
        }
    }
    const updateBook = async (book) => {
       ("sdhmnbv");
       let response = await axios.post(apiEndPoint.SEARCH_CITY_BY_ID,{cityId:book.cityId});
        navigate("/updateBooks", { state: { books:  book, stateId : response.data.state} });
        
    }
    useEffect(() => {
        featchBookByUserId();
    }, []);
    return <>
        <div className="tab-pane fade show active" id="userBooks" role="tabpanel">
            {!booklist.length == 0 ?  <div className="myaccount-content">
                <h5>Books</h5>
                <div className="myaccount-table table-responsive text-center col-lg-12">
                <table className="table align-middle mb-0 bg-white">
                        <thead className="thead-light">
                            <tr>
                                <th className="pt-2 pb-2">Image</th>
                                <th className="pt-2 pb-2">Name</th>
                                <th className="pt-2 pb-2">Author</th>
                                <th className="pt-2 pb-2">Price</th>
                                <th className="pt-2 pb-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {booklist.filter((book)=> book.price > 0)?.map((book, index) =>
                                <tr>
                                    {book.photos.split("@")[1] ? <td className=" p-3"><img src={apiEndPoint.DISK_STORAGE+book.photos.split("@")[1]} height='60px' width='60px'></img></td>:<td className=" p-3"><img src={book.photos} height='60px' width='60px'></img></td>}
                                    <td className=" p-3">{book?.name}</td>
                                    <td className=" p-3">{book?.author.substring(0,30)}</td>
                                    <td className=" p-3">{book?.price}</td>
                                    <td className=" p-3"><button to="/updateBooks" onClick={() =>{updateBook(book) }} className="btn btn-sqr">Edit</button>
                                    </td>
                                </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>: 
            <NotUpload/>
        }
        </div>
    </>
}

export default UserBooks;
