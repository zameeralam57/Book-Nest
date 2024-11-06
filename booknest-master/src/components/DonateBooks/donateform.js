
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { apiEndPoint } from "../../webApi/webapi";
import Header from "../header/header";
import Footer from "../footer/footer";
import { fetchState } from "../../router-config/stateSlice";
import { fetchCategory } from "../../router-config/categorySlice";
import { fetchCitiesByState } from "../../router-config/citySlice";
//const multer = require("multer");
function DonateForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // Form state variables
  const [bookName, setBookName] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [language, setLanguage] = useState("");
  const [edition, setEdition] = useState("");
  const [publicationDate, setPublicationDate] = useState("");
  const [pincode, setPincode] = useState("");
  const [cityId, setCityId] = useState("");
  const [categoryId, setCategoryId] = useState("");
  const [stateId, setStateId] = useState(""); // Added state to track selected state ID
  const [photos, setPhotos] = useState(null);
  // Redux selectors
  const { categoryList = [] } = useSelector((state) => state.category || {});
  const { currentUser } = useSelector((state) => state.user || {});
  const { stateList = [] } = useSelector((state) => state.state || {});
  const { cityList = [] } = useSelector((state) => state.city || {});
  useEffect(() => {
    dispatch(fetchState());
    dispatch(fetchCategory());
  }, [dispatch]);
  
  const handleFileChange = (event) => {
    setPhotos(event.target.files[0]);
  };
  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
      const formData = new FormData();
      formData.append("photos", photos);
      formData.set("name", bookName);
      formData.set("description", description);
      formData.set("author", author);
      formData.set("language", language);
      formData.set("edition", edition);
      formData.set("publicationDate", publicationDate);
      formData.set("pincode", pincode);
      formData.set("stateId", stateId)
      formData.set("cityId", cityId);
      formData.set("categoryId", categoryId);
      formData.set("userId", currentUser._id);
      try {
        const response = await axios.post(apiEndPoint.ADD_BOOK, formData,{
        //const response = await axios.post("http://localhost:3000/book/add",formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        const FormInputData = Object.fromEntries(formData.entries());
        console.log(FormInputData);
        console.log(response.data.message);
      } catch (error) {
        console.error("Error uploading book:", error);
      }
  };
  

  // Handle state selection change
  const handleStateChange = (event) => {
    const stateId = event.target.value;
    dispatch(fetchCitiesByState(stateId));
    setCityId(""); // Reset city selection when state changes
  };
  return <>
    <section>
      <Header />
      <ToastContainer />
      <div className="container-fluid py-5 h-100 donateformContainer">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-2 donateformimage">
            <img src="\img\donates\donateimg.jpg" style={{ height: '500px', width: '500px' }} />
          </div>
          <div className="col-lg-10 col-xl-6" >
            <div className="card rounded-3">
              <div className="card-body donateformcontain p-4 p-md-5">
                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 sty">
                  Book Donation Form
                </h3>
                <form onSubmit={handleSubmit} className="px-md-2">
                  <div className="row form-group"  >
                    <div className="">
                      <input type="text" placeholder="Enter Book Name" value={bookName} onChange={(e) => setBookName(e.target.value)} className="form-control" required />
                    </div>
                  </div>
                  <div className="row form-group"  >
                    <div className="">
                      <input type="text" placeholder="Enter Edition" value={edition} onChange={(e) => setEdition(e.target.value)} className="form-control" required />
                    </div>
                  </div>
                  <div className="row form-group"  >
                    <div className="">
                      <input type="date" placeholder="Enter Publication Date" value={publicationDate} onChange={(e) => setPublicationDate(e.target.value)} className="form-control" required />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div className=" col-md-12">
                      <input type="text" placeholder="Enter Author Name" value={author} onChange={(e) => setAuthor(e.target.value)} className="form-control" required />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div>
                      <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)} className="form-control" required>
                        <option>Select Book Category</option>
                        {categoryList.map((category) => (
                          <option key={category._id} value={category._id}>{category.categoryName}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="row">
                    <div>
                      <select value={language} onChange={(e) => setLanguage(e.target.value)} className="form-control" required>
                        <option>Select Language</option>
                        <option>Hindi</option>
                        <option>English</option>
                      </select>
                    </div>
                  </div>
                  <div className="row form-group mt-2"  >
                    <div className=" col-md-6">
                      <select onChange={handleStateChange} className="form-control mb-2" required>
                        <option>Select State</option>
                        {stateList.map((state) => (
                          <option key={state._id} value={state._id}>{state.stateName}</option>
                        ))}
                      </select>
                    </div>
                    <div className=" col-md-6">
                      <select value={cityId} onChange={(e) => setCityId(e.target.value)} className="form-control mb-2" required>
                          <option>Select City</option>
                          {cityList.map((city) => (
                            <option key={city._id} value={city._id}>{city.name}</option>
                          ))}
                        </select>
                    </div>
                  </div>
                  <div className="row form-group"  >
                    <div className=" col-md-6">
                      <input type="number" placeholder="Enter Pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} className="form-control" required />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div>
                      <input type="file" onChange={(e) => setPhotos(e.target.files[0])} multiple placeholder="Images" className="form-control" required />
                    </div>
                  </div>
                  <div className="row form-group">
                    <div>
                      <textarea placeholder="Enter Description" value={description} onChange={(e) => setDescription(e.target.value)} cols="70" rows="4" className="form-control" required />
                    </div>
                  </div>
                  <div>
                    <button className="btn w-100 text-center submitbtn" style={{ outline: "none" }} type="submit">SUBMIT</button>
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
export default DonateForm;