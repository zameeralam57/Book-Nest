import { Team } from "../../Externals/Team";
import TopBar from "../Topbar/topbar";
import Footer from "../footer/footer";
import Header from "../header/header";
export default function About() {
    return <>
        <Header />
        <hr />
        <div className="about-main-area mb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-7 col-md-6 col-12">
                        <div className="about-img">
                            <a href="#">
                                <img src="https://images.pexels.com/photos/6344238/pexels-photo-6344238.jpeg?auto=compress&cs=tinysrgb&w=600" alt="man" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-6 col-12">
                        <div className="about-content">
                            <h3>
                                Why<span>We are?</span>
                            </h3>
                            <p>
                            Welcome to BookNest, a unique online platform that combines the joy of reading with the satisfaction of giving back. We are a team of book lovers who believe that every book deserves a new home, and that reading is one of the most important tools for personal growth and lifelong learning.
                            </p>
                            <ul>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-check" />
                                        A brief introduction to your website and what you offer
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-check" />
                                        Your team's passion for books and reading
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-check" />
                                        Your team's passion for books and reading
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-check" />
                                        We are passionate about books and reading.
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        <i className="fa fa-check" />
                                        We offer a 100% satisfaction guarantee to our customers.
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="our-mission-area mb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="single-misson">
                            <h3>
                                What<span>We do?</span>
                            </h3>
                            <p>
                                Huis nostrud exerci tation ullamcorper suscipites lobortis nisl ut
                                aliquip ex ea commodo consequat. Investigationes demonstraverunt
                                lectores legere me lius quod ii legunt saepius claritas.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="single-misson">
                            <h3>
                                Our<span>Mission</span>
                            </h3>
                            <p>
                                Huis nostrud exerci tation ullamcorper suscipites lobortis nisl ut
                                aliquip ex ea commodo consequat. Investigationes demonstraverunt
                                lectores legere me lius quod ii legunt saepius claritas.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-12">
                        <div className="single-misson mrg-none-xs">
                            <h3>
                                Our<span>Vision</span>
                            </h3>
                            <p>
                                Puis nostrud exerci tation ullamcorper suscipito lobortis nisl ut
                                aliquip ex ea commodo consequat. Investigationes demonstraverunt
                                lectores legere me lius quod ii legunt saepius claritas.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      

        {/* Team starts.......... */}
        <div className="team-area pt-70 pb-40">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="team-title text-center mb-50">
                            <h2>Our Crazy Team</h2>
                        </div> 
                    </div>
                    {Team.map((team,index)=>
                    <div className="col-lg-3 col-md-6 col-sm-6 col-12" key={index}>
                        <div className="single-team mb-30">
                            <div className="team-img-area">
                                <div className="team-img">
                                    <a href="#">
                                        <img src={team.image} alt="No Image" style={{height:'300px',width:'300px'}} />
                                    </a>
                                </div>
                                <div className="team-link">
                                    <ul>
                                        <li>
                                            <a href="https://github.com/pappukumarme9999">
                                            <i class="fa-brands fa-github"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/resa9osh/">
                                              <i class="fa-brands fa-instagram"></i>
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/pappu-kumar-2178ab287/">
                                            <i class="fa-brands fa-linkedin"></i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="team-content text-center">
                                <h3>{team.name}</h3>
                                <span>{team.desingnation}</span>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>

        {/* Team ends........... */}
        <div className="skill-area mb-70">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="skill-content">
                            <h3>
                                Why Choose<span>BookNest</span>Application
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                                nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                                erat. sed diam voluptua ater vero. Lorem ipsum dolor sit amet,
                                consetetur sadipscing elitr, sed diam nonumys eirmod tempor empor
                                invidunt ut labore et dolore.
                            </p>
                            <a href="#">
                                Read More
                                <i className="fa fa-long-arrow-right" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer />

    </>
}