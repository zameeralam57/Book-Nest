import "./donetors.css"
import Footer from "./footer/footer";
import Header from "./header/header";
function Donetors(){

    return <div className="team-boxed">
        <Header/>
    <div
        className="container">
        <div className="intro">
            <h2 className="text-center">TOP DONETORS </h2>
            <p className="text-center aboutDonetors">
                Donating books is a great way to help others. You can donate books
                through many organizations that support literacy and education. Whether
                you’re looking for a way to help your local library
            </p>
        </div>
        <div className="row">
            <section className="mx-auto my-5" style={{ maxWidth: "20rem" }}>
                <div className="card testimonial-card mt-2 mb-3">
                    <div className="card-up aqua-gradient" />
                    <div className="avatar mx-auto white">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                            className="rounded-circle img-fluid"
                            alt="woman avatar"
                        />
                    </div>
                    <div className="card-body text-center">
                        <h4 className="card-title font-weight-bold">Martha Smith</h4>
                        <hr />
                        <p>
                            <i className="fas fa-quote-left" /> Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Eos, adipisci
                        </p>
                    </div>
                </div>
            </section>
            <section className="mx-auto my-5" style={{ maxWidth: "20rem" }}>
                <di className="card testimonial-card mt-2 mb-3">
                    <div className="card-up aqua-gradient" />
                    <div className="avatar mx-auto white">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                            className="rounded-circle img-fluid"
                            alt="woman avatar"
                        />
                    </div>
                    <div className="card-body text-center">
                        <h4 className="card-title font-weight-bold">Martha Smith</h4>
                        <hr />
                        <p>
                            <i className="fas fa-quote-left" /> Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Eos, adipisci
                        </p>
                    </div>
                </di>
            </section>
            <section className="mx-auto my-5" style={{ maxWidth: "20rem" }}>
                <di className="card testimonial-card mt-2 mb-3">
                    <div className="card-up aqua-gradient" />
                    <div className="avatar mx-auto white">
                        <img
                            src="https://mdbootstrap.com/img/Photos/Avatars/img%20%2831%29.jpg"
                            className="rounded-circle img-fluid"
                            alt="woman avatar"
                        />
                    </div>
                    <div className="card-body text-center">
                        <h4 className="card-title font-weight-bold">Martha Smith</h4>
                        <hr />
                        <p>
                            <i className="fas fa-quote-left" /> Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Eos, adipisci
                        </p>
                    </div>
                </di>
            </section>
        </div>
    </div>
    <Footer/>
</div>
}

export default Donetors;