import { Link } from 'react-router-dom';
import Header from '../header/header';
import'./donate.css'
import Footer from '../footer/footer';
function Donate(){
return<>
  <Header/>
  <div className='container donatecontainer mt-3 '>
   <div className='row'>
   <div className='donatecontain col-md-8 m-auto mt-2'>
    <h4 className='subheading text-center'>Giving Away Books Is Not Just About Making A Donation.</h4>
       <h4 className='subheading text-center'> It Is About Making Difference</h4>
     </div>
     </div>
     <div className='row'>
     <div className='col-md-12 text-center'>
       <Link to='/donateform'> <button className='donatebutton '>Donate Books</button></Link>
     </div>
 </div>
 <div className='row rem'>
    <div className='donateimg col-md-8 text-center m-auto'>
        <img src='\img\donar\donar1.jpg' alt='donate image'/>
    </div>
 </div>
 <div className='row rem'>
    <div className='howdonate col-12'>
    <h3 className='text-center subheading mt-1 text-white'>How Does Donation Help</h3>
    </div>
 </div>
 <div className='row border remove' >
    <div className='col-lg-3 col-md-3 col-sm-3 col-xm-3 mt-3' >
    <img src='\img\donar\donar2.jpg' />
   
        <h6 className='howsubHeading mt-3'>Develop a culture of reading and sharing</h6>
   
    </div>
    <div className='col-lg-3 col-md-3 col-sm-3 col-xm-3 mt-3'>
         <img src='\img\donar\donar3.jpg' />
   
        <h6 className='howsubHeading mt-4'>Your old books will get a new life to give life.</h6>
    </div>
    <div className='col-lg-3 col-md-3 col-sm-3 col-xm-3'>
    <img src='img\donar\globe-book.jpg' />
   
   <h6 className='howsubHeading mt-2 '>Reusing books helps in reducing carbon footprints.</h6>

    </div>
    <div className='col-lg-3 col-md-3 col-sm-3 col-xm-3 mt-2'>
    <img src='\img\donar\donar5.jpg'/>
   
   <h6 className='howsubHeading mt-4 '>Be the cause of literacy & make the difference the world needs.</h6>
    </div>
 </div>
  <div className='row mt-5 p-5'>
    <div className="col-lg-1"></div>
    <div className='col-lg-5  donate mb-5 me-5 shift'>
        <div>
            <h3 className='text-center subheading '>Why to Donate</h3><hr/>
            <b className='subheading mt-3 text-center'>"Knowledge increases by sharing,but not saving"</b>
            <p className=' mt-4'>Books are uniquely portable magic that carries your attached feelings forward.</p>
            <p>Your books can help someone in the same way they did for you.</p>
            <p>We are committed to carrying your emotions with your books and making them grow older!</p>
            <p>Let's become a cause for change & make a difference.</p>
          
            <h3 className='text-center subheading'>Let's Educate Together & Rise Together!</h3>
            <div className='mt-4 text-center mb-2'>
                <img src='\img\donar\donar6.jpg'/>
            </div>
        </div>

    </div>
    <div className='col-lg-5 donate mb-5 '>
    <div>
            <h3 className='text-center subheading '>Did You Know ?</h3><hr/>
           
            <p className=' mt-4'>By donating (30 books), you will help to reduce 85kg of carbon-footprint</p>
            <p>A ton of recycled paper saves 17 Trees</p>
            <p>In 1993, U.S. paper recovery saved more than 90,000,000 cubic yards of landfill space. It's our turn in India.</p>
            <p>Some people cannot access books. They can get books at FREE OF COST anywhere across India.</p>
          
            
            <div className='mt-4 text-center'>
                <img src='\img\donar\donar7.png'/>
            </div>
        </div>
    </div>
  </div>
  <div className='row'>
  <div className='col-md-12 text-center mb-5'>
       <Link to='/donateform'><button className='donatebutton '>Donate your love Books</button></Link> 
     </div>
     </div>

  </div>
<Footer/>
</>
}

export default Donate;