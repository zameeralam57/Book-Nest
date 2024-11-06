// import { useSelector } from "react-redux";

// function Cards(props){
//     const {currentUser} = useSelector(state=>{state.user});
//     const books = props.books;
//     return <>
//         <div className="row m-auto bg-dark">
//               {books.filter((book)=>book.permission&&book.status==true).map((book,index)=>
//               <div key={index} className="col-md-3 col-sm-6 mt-5" data-aos="fade-up" data-aos-duration="500">
//                 <div className="card">
//                 {book.photos.split("@")[1] ? <img src={apiEndPoint.DISK_STORAGE+ book.photos.split("@")[1]} className="img-fluid cardimg" /> : <img src={"https://drive.google.com/uc?export=view&id=" + book.photos.substring(32, book.photos.lastIndexOf("/"))} className="img-fluid cardimg" />}
//                   <a className="cardcircle"><i className="fa fa-shopping-cart carticon mt-3" style={{cursor:"pointer"}} onClick={()=>addToCart(book._id)}></i></a>
//                   <div className="card-body">
//                     <p className="card-text cardtitle">{book.name.substring(0, 20)}</p>
//                     <p className="cardprice"><span className="cardtitle">Author: </span>{book.author.substring(0, 15)}</p>
//                     <b className="card-text cardprice"><span className="cardtitle">Price: </span>₹{book.price}</b>
//                     <br />
//                     <button className="btn mt-2 w-100 buttonhover" onClick={() => viewDescription(book)} >View More</button>
//                   </div>
//                 </div>
//               </div>)}
//           </div>
//     </>
// }
// export default Cards;