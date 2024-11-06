import { useDispatch, useSelector } from "react-redux";
import Footer from "../footer/footer";
import Header from "../header/header";
import { useEffect, useRef, useState } from "react";
import { fetchState } from "../../router-config/stateSlice";
import axios from "../../interceptor.js";
import { apiEndPoint } from "../../webApi/webapi";
import userSlice from "../../router-config/userSlice";
import { toast,ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";

function SellboooksForm() {
     const navigate = useNavigate();
    const { currentUser } = useSelector((state) => state.user);
    //const [citys, setCitys] = useState([]);
    const [name, setBookName] = useState(" ");
    const [description, setDescription] = useState(" ");
    const [author, setAuthorName] = useState(" ");
    const [language, setLanguage] = useState("");
    const [edition, setEdition] = useState(" ");
    const [publicationDate, setPublicationDate] = useState(" ");
    const [pincode, setPinCode] = useState(" ");
    const [categoryId, setCategory] = useState(" ");
    const [price, setPrice] = useState("");
    const [cityId, setCity] = useState(" ");
    const stateObject = useRef(" ");
    const userId = currentUser;
    let  photos = {};
    const [formData, setFormData] = useState({
        Name: "",
        edition: "",
        author: "",
        price: "",
        stateList: "",
        selectedCity: "",
        language: "",
        publicationDate: "",
        pincode: "",
        categoryId: "",
        photos: "",
        description:""
    
    });

    const localStates = [
        { _id: "1", name: "Uttar Pradesh" },
        { _id: "2", name: "Maharashtra" },
        { _id: "3", name: "Tamil Nadu" },
        { _id: "4", name: "Karnataka" },
        { _id: "5", name: "West Bengal" },
        { _id: "6", name: "Gujarat" },
        { _id: "7", name: "Rajasthan" },
        { _id: "8", name: "Punjab" },
        { _id: "9", name: "Bihar" },
        { _id: "10", name: "Madhya Pradesh" },
      ];
      
      const localCities = {
        "1": [
            { _id: "1", name: "Lucknow" },
            { _id: "2", name: "Kanpur" },
            { _id: "3", name: "Varanasi" },
            { _id: "4", name: "Agra" },
            { _id: "5", name: "Allahabad" }
        ],
        "2": [
            { _id: "6", name: "Mumbai" },
            { _id: "7", name: "Pune" },
            { _id: "8", name: "Nagpur" },
            { _id: "9", name: "Nashik" },
            { _id: "10", name: "Aurangabad" }
        ],
        "3": [
            { _id: "11", name: "Chennai" },
            { _id: "12", name: "Coimbatore" },
            { _id: "13", name: "Madurai" },
            { _id: "14", name: "Tiruchirappalli" },
            { _id: "15", name: "Salem" }
        ],
        "4": [
            { _id: "16", name: "Bengaluru" },
            { _id: "17", name: "Mysuru" },
            { _id: "18", name: "Mangalore" },
            { _id: "19", name: "Hubli" },
            { _id: "20", name: "Belgaum" }
        ],
        "5": [
            { _id: "21", name: "Kolkata" },
            { _id: "22", name: "Asansol" },
            { _id: "23", name: "Siliguri" },
            { _id: "24", name: "Durgapur" },
            { _id: "25", name: "Haldia" }
        ],
        "6": [
            { _id: "26", name: "Ahmedabad" },
            { _id: "27", name: "Surat" },
            { _id: "28", name: "Vadodara" },
            { _id: "29", name: "Rajkot" },
            { _id: "30", name: "Bhavnagar" }
        ],
        "7": [
            { _id: "31", name: "Jaipur" },
            { _id: "32", name: "Jodhpur" },
            { _id: "33", name: "Udaipur" },
            { _id: "34", name: "Kota" },
            { _id: "35", name: "Ajmer" }
        ],
        "8": [
            { _id: "36", name: "Ludhiana" },
            { _id: "37", name: "Amritsar" },
            { _id: "38", name: "Jalandhar" },
            { _id: "39", name: "Patiala" },
            { _id: "40", name: "Bathinda" }
        ],
        "9": [
            { _id: "41", name: "Patna" },
            { _id: "42", name: "Gaya" },
            { _id: "43", name: "Bhagalpur" },
            { _id: "44", name: "Muzaffarpur" },
            { _id: "45", name: "Purnia" }
        ],
        "10": [
            { _id: "46", name: "Bhopal" },
            { _id: "47", name: "Indore" },
            { _id: "48", name: "Gwalior" },
            { _id: "49", name: "Jabalpur" },
            { _id: "50", name: "Ujjain" }
        ],
      };
      const [stateList, setStateList] = useState(localStates);
      const [citys, setCitys] = useState([]);
      const [selectedCity, setSelectedCity] = useState(""); // Selected city
 
    const { categoryList, error} = useSelector((state) => state.category)
    const dispatch = useDispatch();

    const onFileChange = event => {
        photos = (event.target.files[0]);
    }

    
    const handleSubmit = async (event) => {
        try {
          event.preventDefault();          
          const userId = currentUser._id;
          let formData = new FormData();
            formData.append("photos", photos);      
            formData.set("name", name);
            formData.set("description", description);
            formData.set("author", author);
            formData.set("language", language);
            formData.set("edition", edition);
            formData.set("publicationDate", publicationDate);
            formData.set("pincode", pincode);
            formData.set("cityId", cityId);
            formData.set("selectedCity:", selectedCity);
            formData.set("categoryId", categoryId);
            formData.set("userId", userId);
            formData.set("price", price);
            let response = await axios.post("https://jsonplaceholder.typicode.com/posts", formData,
                {
                    headers: {
                      'Content-Type': 'multipart/form-data'
                      },
                });
             if(response.data.state){
                 toast.success("Book  added succesfully")
             }
        }
         catch (err) {
           toast.error("something went wrong");
        }
    }
       const fetchCityById = async (stateId) => {
        try {
            let response = await axios.post(apiEndPoint.FETCH_CITY_BY_STATE, { stateId: stateId });
            setCitys(response.data.city);
        }
       catch (err) {
        }
    }
    useEffect(() => {
        dispatch(fetchState());
    }, [])
    
    const handleStateChange = (e) => {
        const selectedStateId = e.target.value;
        setCitys(localCities[selectedStateId] || []);
        setFormData ({...formData,[e.target.name]:[e.target.value]});
    };
    
    const handleCityChange = (e) => {
      setSelectedCity(e.target.value);
      setFormData ({...formData,[e.target.name]:[e.target.value]});
    };
    
    const handleChange = (e) => {
      setFormData ({...formData,[e.target.name]:[e.target.value]});
    };
    
    const handleSubmit1 = (e) => {
      e.preventDefault()
      console.log(formData)
    }
    //const { stateList } = useSelector((item) => item.state);
    
    return <>
      <section>
           <Header />
            <ToastContainer/>
            <div className="container-fluid py-5 h-100 donateformContainer">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-2 donateformimage">
                        <img src="\img\donar\form.jpg" style={{ height: '500px', width: '500px' }} />
                    </div>
                    <div className="col-lg-10 col-xl-6" >
                        <div className="card rounded-3">

                            <div className="card-body donateformcontain p-4 p-md-5">
                                <h3 className="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2 sty">
                                    Book Detail's
                                </h3>
                                <form onSubmit={handleSubmit1}  className="px-md-2">
                                    <div className="row form-group"  >
                                        <div className="">
                                            <input onChange={(e) => handleChange(e)} placeholder="Enter Book Name" name="Name" type="text" className="form-control" required/>
                                        </div>
                                    </div>
                                    <div className="row form-group"  >
                                        <div className="">
                                            <input onChange={(e) => handleChange(e)} placeholder="Enter Edition" type="text" name="edition" className="form-control"  required />
                                        </div>
                                    </div>

                                    <div className="row form-group"  >
                                        <div className=" col-md-6 mb-3">
                                            <input onChange={(e) => handleChange(e)} placeholder="Enter Author Name" name="author" type="text" className="form-control" required/>
                                        </div>
                                        <div className=" col-md-6">
                                            <input onChange={(e) => handleChange(e)} placeholder="Enter Price" type="number" name="price" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div>
                                            <select onChange={(e) => handleChange(e)} name="categoryId" className="form-control">Category
                                                <option>Select Book Category</option>
                                                {!error && categoryList.map((category, index) => <option   value={category._id}   key={index} required>{category.categoryName}</option>)}
                                                <option value="Other" defaultChecked>Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div>
                                            <select onChange={(e) => handleChange(e)} name="language" className="form-control" required>language
                                                <option>Select Language</option>
                                                <option>Hindi</option>
                                                <option>English</option>

                                            </select></div>

                                    </div>
                                    <div className="row form-group mt-2"  >
                                        <div className=" col-md-6 mb-3">
                                        <select onChange={(e)=> handleStateChange(e)} name="stateList"  className="form-control">
                                                <option >Select State</option>
                                                {stateList.map((state) =>(
                                                    <option key={state._id} value={state._id}
                                                    >{state.name}</option>
                                                ))}


                                            </select>
                                        </div>
                                        <div className=" col-md-6">
                                        <select onChange={handleCityChange} value={selectedCity} name="selectedCity" className="form-control">City
                                               <option>Select City</option>
                                                {citys.map((city)=>(
                                                 <option key={city._id} value={city._id}>
                                                 {city.name}
                                             </option>
                                                ))}
                                        </select>
                                        </div>
                                    </div>
                                    <div className="row form-group"  >

                                        <div className=" col-md-6 mb-3">
                                            <input onChange={(e) => handleChange(e)} type="number" placeholder=" Enter Pincode" name="pincode" className="form-control" maxLength="6" minLength="6"   required />
                                        </div>

                                        <div className="col-md-6">
                                            <input onChange={(e) => handleChange(e)} placeholder="Enter Publication Date" type="date" name="publicationDate"  className="form-control" required/>
                                        </div>
                                          
                                       </div>

                                    <div className="row form-group"  >
                                        <div className="col-md-12">
                                            <input onChange={(e) => handleChange(e)}  type="file" placeholder="Images" name="photos" className="form-control" required />
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div>
                                            <textarea onChange={(e) => handleChange(e)} cols='60' rows='4' name="description" placeholder="Enter Book's Description..."  required/>
                                        </div>
                                    </div>
                                    <div className="row form-group">
                                        <div>
                                            <button className="btn w-100 text-center submitbtn" type="submit">SUBMIT</button>
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

export default SellboooksForm;