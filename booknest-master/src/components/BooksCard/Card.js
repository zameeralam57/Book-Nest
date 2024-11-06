function Card(){
    return <>
    <div className="main">

    

    <div className="cont">
        <div className="card">
            <div className="imgBx">
            <img src="https://enncrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPhhb2Vt_pFq80QYr_tgpAujVS3kQ0qdYhwg&usqp=CAU" alt="nike-air-shoe"/>
            </div>

            <div className="contentBx">

                <h2>BookNest</h2>

                <div className="size">
                {/* <h3 className="author">Author Name</h3> */}
                    <h3>RS. 315</h3>
                    
                </div>

                <div className="color">

                    <h3>Read More...</h3>
                </div>
                <a href="#">Buy Now</a>
            </div>

        </div>
    </div>

    </div>
    </>
}

export default Card;