import React from 'react';
import './footer.css'
import video2 from '../../assets/video(2).mp4'
import {FiSend} from 'react-icons/fi'
const Footer = () => {
  return (
  
        //    <section className='footer'>
        //     <div className="videoDiv">
        //     <video src={video2}  muted autoPlay loop type="video2/mp4"></video>        
        //         </div>
           
        //    <div className="secContent container">
        //         <div className="contactDiv flex">
        //             <div className="text">
        //                 <span>keep in touch</span>
        //                 <h2>travel with u</h2>
        //             </div>
        //             <div className="onputDiv flex">
        //                     <input type="text" placeholder='enter eamil addre' />
        //                     <button className='btn flex' type='submit'>
        //                          <FiSend className='icon' />
        //                     </button>
        //             </div>
        //         </div>
        //    </div>
        //    </section>
                        <footer className="footer-07">
                <div className="container">
                    <div className="row justify-content-center">
                    <div className="col-md-12 text-center">
                        <h2 className="footer-heading">
                        <a href="#" className="logo">
                           Trung Hau
                        </a>
                        </h2>
                        <p className="menu">
                        <a href="#">Home</a>
                        <a href="#">Agent</a>
                        <a href="#">About</a>
                        <a href="#">Listing</a>
                        <a href="#">Blog</a>
                        <a href="#">Contact</a>
                        </p>
                        <ul className="ftco-footer-social p-0">
                        <li className="ftco-animate">
                            <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Twitter"
                            >
                            <span className="ion-logo-twitter" />
                            </a>
                        </li>
                        <li className="ftco-animate">
                            <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Facebook"
                            >
                            <span className="ion-logo-facebook" />
                            </a>
                        </li>
                        <li className="ftco-animate">
                            <a
                            href="#"
                            data-toggle="tooltip"
                            data-placement="top"
                            title="Instagram"
                            >
                            <span className="ion-logo-instagram" />
                            </a>
                        </li>
                        </ul>
                    </div>
                    </div>
                    <div className="row mt-5">
                    <div className="col-md-12 text-center">
                        <p className="copyright">
                        Copyright © All rights reserved | This template is made with{" "}
                        <i className="ion-ios-heart" aria-hidden="true" /> by{" "}
                        <a href="https://colorlib.com" target="_blank">
                            Trung Hau
                        </a>
                        </p>
                    </div>
                    </div>
                </div>
                </footer>

        );
    }


export default Footer;