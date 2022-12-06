import React from 'react';
import './footer.css'
import video2 from '../../assets/video(2).mp4'
const Footer = () => {
  return (
  
           <section className='footer'>
            <div className="videoDiv">
            <video src={video2}  muted autoPlay loop type="video2/mp4"></video>        
                </div>
           
           <div className="secContent container">
                <div className="contactDiv flex">
                    <div className="text">
                        <span>keep in touch</span>
                        <h2>travel with u</h2>
                    </div>
                </div>
           </div>
           </section>
        );
    }


export default Footer;