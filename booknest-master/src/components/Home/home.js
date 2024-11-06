import { ToastContainer } from "react-toastify";
import BestAuthor from "../BestAuthor/bestAuthor";
import Service from "../Service/service";
import Loader from "../Spinner/Loader";
import Banner from "../banner/banner";
import Carousal from "../carousal/carousal";
import Footer from "../footer/footer";
import Header from "../header/header";
import TopInteresting from "../topInteresting/topInteresting";


function Home(){
   return<>
    {/* <Loader/> */}
    <ToastContainer/>
    <div>

    </div>
    <Header/>
    <Service/>
    <Carousal />
    <TopInteresting/>
    <BestAuthor/>
    <Banner/>
    <Footer/>
    
  
   </>
}

export default Home;