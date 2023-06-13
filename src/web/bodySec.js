import '../web/bodySec.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ImPlay2 } from 'react-icons/im';
import { Link } from 'react-router-dom';

const BodySec = () => {
    return (
        <>
           <Link><div className="Body-Sec container  position-absolute ">
               <div className="row">
                <div className="Heading-1 col-xl-12 col-lg-12 col-md-12 col-sm-12 col-xs-12 text-white">
                    WELCOME TO <span className="text-warning">CHOCLATE WORLD!</span>
                </div>
                <div className="row">
                    <div className="Heading-2 col-xl-8 col-lg-8 col-md-8 col-sm-11 col-xs-11 text-white">
                        Deliver the Choclate for 18 Years
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-3 col-sm-1 col-xs-1 ">
                    <div className="aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                        <a className="player text-decoration-none text-white mx-5 " class="glightbox play-btn" href="#"><ImPlay2 /></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-xs-12 d-flex mt-4 mx-4">
                       <div className="link-1"><a className="btn text-decoration-none text-secondary" href="#">OUR MENU</a></div>
                        <div className="link-2"><a className="btn text-decoration-none text-secondary" href="#">BOOK ORDER</a></div>
                    </div>
                </div>
               </div>
            </div>
            </Link>
        </>
    )
}
export default BodySec;