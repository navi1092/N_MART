import { FaArrowAltCircleUp,FaEnvelope,FaMobileAlt } from 'react-icons/fa';
import {TfiLocationPin } from "react-icons/tfi";

function ContactPage(){

    return ( 
        <>
    {/* <!-- Contact section --> */}
    <section id="contact">
            <div className="contact">
              <div className="container">
                <div className="mb-5 text-center">
                  <h5>Let`s Start a Conversation</h5>
                  <h2 className="fw-bold">Contact Us</h2>
                  
                </div>
                <div className="row">
                  <div className="col-lg-5 col-md-5">
                    <h4 className="fw-bold">Contact Info</h4>
                    <ul className="info list-unstyled">
                      <li className="d-flex align-items-center"> 
                          <span className="pe-3 ti-location-pin fs-5"></span>
                          <p><a href=""><TfiLocationPin/>Navitha Nivas,Opp NMAMIT College,Nitte.</a></p>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="pe-3 ti-mobile fs-5"></span>
                          <p><a href=""><FaMobileAlt/>+91 9611084405</a></p>
                      </li>
                      <li className="d-flex align-items-center">
                          <span className="pe-3 ti-email fs-5"></span>
                          <p><a href=""><FaEnvelope/>navee1092@gmail.com</a></p>
                      </li> 
                    </ul>   
                  </div>
                  <div className="col-lg-7 col-md-7 pt-lg-0 pt-md-0 pt-4">
                    <form>
                        <div className="row">
                            <div className="col-md-6">
                              <div className="form-group">
                                  <input type="text" className="form-control" name="name" id="name" placeholder="Your name"/>
                              </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                  <input type="email" className="form-control" name="email" id="email" placeholder="Email address"/>
                              </div>
                            </div>
                            <div className="col-md-12">
                              <div className="form-group">
                                  <input className="textarea" name="message" cols="30" rows="4" id="message" placeholder="Enter your message"/>
                              </div>
                            </div>
                            <div className="col-md-12"> 
                              <button className="btn btn-danger"><span className="ti-rocket pe-2 fs-5"></span> Send Message</button>
                            </div>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
    
          {/* <!-- Footer section --> */}
          <footer>
            <div className="p-3 bg-danger">
              <div className="container">
                <div className="row ">
                <div className="col-12 text-end">
                <a href="#home"><span className="fs-4 text-white"><FaArrowAltCircleUp/></span></a>
                <p className="text-white">Designed by Naveen</p>
                    
                </div>
                
                </div>
              </div>
    
            </div>
          </footer>
    
       
        </>
    ); 
}
export default ContactPage;