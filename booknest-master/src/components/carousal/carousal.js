import { Link } from "react-router-dom";

function Carousal() {
  return (
    <>
      {" "}
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">

          <div className="carousel-item active">
            <div className="single-slider pt-125 pb-130 bg-img ban">
              <div className="row ">
                <div className="col-lg-5 ">
                  <div className="slider-content slider-animated-1 text-center ">
                    <h1>Huge Sale</h1>
                    <h2>BookNest</h2>
                    <h3>Now starting at Rs 99.00</h3>
                    <Link to="/book">Shop now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="single-slider slider-h1-2 pt-215 pb-100 bg-img  ban1">
              <div className="container mb-5">
                <div className="slider-content slider-content-2 slider-animated-1 ">
                  <h1>We can help get your</h1>
                  <h2>Books in Order</h2>
                  <a href="# " className="ml-5">
                    Contact Us!
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="carousel-item">
            <div className="single-slider slider-h1-2 pt-215 pb-100 bg-img  ban2">
            </div>
          </div>

        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </>
  );
}

export default Carousal;
