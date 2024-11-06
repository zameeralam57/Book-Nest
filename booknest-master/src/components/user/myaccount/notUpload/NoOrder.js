import { Link } from 'react-router-dom';
import'./notupload.css'
function NoOrders(){
    return<>

  {/* Hello world */}
  <div className="row m-auto ml-5 mt-5 pl-5">
    <div className="col-md-3">
      <img
        src="\img\order\noorder.png" style={{height:"180px",width:"180px"}}
        alt=""
      />
    </div>

    <div className='col-md-2 mt-5'>
      <h2 className="heading"> You Have No Order</h2>
      <Link to='/'><button className='shopbutton'>Shop Now</button></Link>
    </div>
</div>

</>
}

export default NoOrders;