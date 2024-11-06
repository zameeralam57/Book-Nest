
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";

import "./updateBook.css"

import axios from "../../../../interceptor.js";
import { useLocation, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import Header from "../../../header/header";
import Footer from "../../../footer/footer";
import { apiEndPoint } from "../../../../webApi/webapi";
import { fetchState } from "../../../../router-config/stateSlice";


function UpdateBooks() {
    const location = useLocation();
    const navigate = useNavigate();
    const book = location.state.books;
    const stateId = location.state.stateId;
    const [citys, setCitys] = useState([]);
    const { categoryList, error } = useSelector((state) => state.category);
    const { stateList } = useSelector((item) => item.state);

    const dispatch = useDispatch();

    const [name, setBookName] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [author, setAuthorName] = useState(" ");
    const [language, setLanguage] = useState("");
    const [edition, setEdition] = useState(" ");
    const [publicationDate, setPublicationData] = useState(" ");
    const [pincode, setPinCode] = useState(" ");
    const [categoryId, setCategory] = useState(" ");
    const [price, setPrice] = useState("");
    const [cityId, setCity] = useState(" ");
    const [photos , setPhotos] = useState(" ");
    const id = book._id


    const updateBook = async (event) => {
        try {
            const formData = new FormData();
             formData.append("profile" , photos);
             formData.set("name" , name);
             formData.set("author" , author);
             formData.set("edition" , edition);
             formData.set("language" , language);
             formData.set("publicationDate" , publicationDate);
             formData.set("pincode" , pincode);
             formData.set("categoryId" , categoryId);
             formData.set("price" , price);
             formData.set("description", description);
             formData.set("id" , book._id);
             formData.set("cityId",cityId);
            event.preventDefault();
            let response = await axios.post(apiEndPoint.UPDATE_BOOK, formData
               
            );
            if (response.data.status) {
                toast.success("Book Update SucesFully");
                setTimeout(()=>{
                    navigate('/myaccount');
                },6000);
            }
           }
        catch (err) {
            toast.error("something went wrong");
        }
    }

    const getImage = (event) => {
        setPhotos(event.target.files[0]);
    }
  useEffect(() => {
        dispatch(fetchState());
        featchCityByStateId(stateId)
    }, [])

    const featchCityByStateId = async (stateId) => {
        try {
            let response = await axios.post(apiEndPoint.FEATCH_CITY_BY_STATE, { stateId: stateId });
            setCitys(response.data.city);
        }
        catch (err) {
        }
    }

    return <>
        <section>
            <Header />
            <ToastContainer />
            <div className="container-fluid py-5 h-100 ">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-2 donateformimage">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg-Wr6o21HXj9RD_3CpYpftxRgNA6He3DxJRHiEJW0a846Cj0sQncXEXZGPbQS3sevfN0&usqp=CAU" className="col-md-12" />
                    </div>
                    <div className="col-lg-10 col-xl-6" >
                        <div className="border rounded-3  " style={{ boxShadow: "0px 0px 3px #f07c29" }}>

                            <div className="card-body  p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 sty">
                                    Update  Detail's
                                </h3>
                                <form onSubmit={updateBook} className="px-md-2">
                                    <div className="row ">
                                        <div className="col-md-8 ">
                                            <div className="row form-group" >
                                                <div className="col-md-12">
                                                    <input onChange={(event) => setBookName(event.target.value)} defaultValue={book.name} type="text" className="form-control" />
                                                </div>
                                            </div>
                                            <div className="row form-group"  >
                                                <div className="col-md-12">
                                                    <input onChange={(event) => setEdition(event.target.value)} defaultValue={book.edition} type="text" className="form-control" />
                                                </div>
                                            </div>
                                       <div className="row">
                                                <div className="col-md-12  mb-3">
                                                    <select defaultValue={book.language} onChange={(event) => setLanguage(event.target.value)} className="form-control">language
                                                        <option>Select Language</option>
                                                        <option>Hindi</option>
                                                        <option>English</option>
                                                         </select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-3 ms-4  updatecardimage" >
                                            {book.photos.split("@")[1] ? <img src={apiEndPoint.DISK_STORAGE + book.photos.split("@")[1]} c /> : <img src={"https://drive.google.com/uc?export=view&id= " + book.photos.substring(32, book.photos.lastIndexOf("/"))} id="img" />}

                                        <input  onChange={getImage} type="file" className="file" />
                                        </div>
                                    </div>

                                    <div className="row form-group"  >
                                        <div className=" col-md-6">
                                            <input onChange={(event) => setAuthorName(event.target.value)} defaultValue={book.author} type="text" className="form-control" />
                                        </div>
                                        <div className=" col-md-6">
                                            <input onChange={(event) => setPrice(event.target.value)} defaultValue={book.price} type="number" className="form-control" />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div>

                                            <select onChange={(event) => setCategory(event.target.value)} className="form-control">Category
                                                <option>Select Book Category</option>
                                                {!error && categoryList.map((category, index) => {
                                                    if (category._id == book.categoryId)
                                                        return <option value={category._id} key={index} selected>{category.categoryName} </option>
                                                    else
                                                        return <option value={category._id} key={index} >{category.categoryName} </option>
                                                })}
                                            </select>
                                        </div>
                                    </div>


                                    <div className="row form-group mt-2"  >
                                        <div className=" col-md-6">
                                            <select onChange={(event) => featchCityByStateId(event.target.value)} className="form-control">State
                                                <option>Select State</option>
                                                {stateList.map((state, index) => {
                                                    if (state._id == stateId)
                                                        return <option value={state._id} selected>{state.stateName}</option>
                                                    else
                                                        return <option value={state._id}>{state.stateName}</option>
                                                }
                                                )}
                                            </select>
                                        </div>
                                        <div className=" col-md-6">
                                            <select onChange={(event) => setCity(event.target.value)} className="form-control">City
                                                <option>Select City</option>
                                                {citys.map((city, index) => {
                                                    if (city._id == book.cityId)

                                                        return <option value={city._id} selected>{city.name}</option>
                                                    else
                                                        return <option value={city._id}>{city.name}</option>
                                                }
                                                )}

                                            </select>
                                        </div>
                                    </div>
                                    <div className="row form-group"  >

                                        <div className=" col-md-6">
                                            <input onChange={(event) => setPinCode(event.target.value)} type="number" defaultValue={book.pincode} className="form-control" />
                                        </div>

                                        <div className="col-md-6">
                                            <input onChange={(event) => setPublicationData(event.target.value)} defaultValue={book.publicationDate} type="text" className="form-control" />
                                        </div>

                                    </div>



                                    <div className="row form-group">
                                        <div>
                                            <textarea onChange={(event) => setDescription(event.target.value)} cols='71' rows='4' defaultValue={book.description} />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div>
                                            <button className="btn w-100 text-center submitbtn" type="Submit">SUBMIT</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />

    </>
}

export default UpdateBooks;
