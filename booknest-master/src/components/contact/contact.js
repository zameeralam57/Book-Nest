// import TopBar from "../Topbar/topbar";
import Footer from "../footer/footer";
import Header from "../header/header";

function Contact() {
  return (
    <>
      <Header />

      <div className="breadcrumbs-area mb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="breadcrumbs-menu">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#" className="active">
                      contact
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="map-area mb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div id="googleMap">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3680.0810468603486!2d75.86722411215305!3d22.725228788819347!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd6e64d65a21%3A0x9d1e020df91d27e9!2sInfoBeans%20Foundation!5e0!3m2!1sen!2suk!4v1683635713909!5m2!1sen!2suk"
                  width="100%"
                  height="100%"
                  style={{ border: "0" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>

                {/* <iframe
                  src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBMlLa3XrAmtemtf97Z2YpXwPLlimRK7Pk&center=18.514041540658845,73.82060788958046&zoom=15"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe> */}

                {/* <iframe
                  src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBMlLa3XrAmtemtf97Z2YpXwPLlimRK7Pk&placeid=ChIJb6N7l5e_wjsRQyDLdpvhqBc"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe> */}

                {/* <iframe
                  src="https://www.google.com/maps/embed/v1/view?key=AIzaSyBMlLa3XrAmtemtf97Z2YpXwPLlimRK7Pk&center=18.514041540658845,73.82060788958046&zoom=15"
                  width="100%"
                  height="100%"
                  style="border:0;"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe> */}

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="contact-area mb-70">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-12">
              <div className="contact-info">
                <h3>Contact info</h3>
                <ul>
                  <li>
                    <i className="fa fa-map-marker"></i>
                    <span>Address: </span> Your address goes here.
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <span>Phone: </span> (800) 0123 4567 890
                  </li>
                  <li>
                    <i className="fa fa-mobile"></i>
                    <span>Email: </span>
                    <a href="#">demo@example.com</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-12">
              <div className="contact-form">
                <h3>
                  <i className="fa fa-envelope-o"></i>Leave a Message
                </h3>
                <form id="contact-form" action="mail.php" method="post">
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="single-form-3">
                        <input name="name" type="text" placeholder="Name" />
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="single-form-3">
                        <input name="email" type="email" placeholder="Email" />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-form-3">
                        <input
                          name="subject"
                          type="text"
                          placeholder="Subject"
                        />
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="single-form-3">
                        <textarea
                          name="message"
                          placeholder="Message"
                        ></textarea>
                        <button className="submit" type="submit">
                          SEND MESSAGE
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <p className="form-messege"></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
