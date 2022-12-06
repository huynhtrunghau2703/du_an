
import React from 'react';
import video from '../../assets/video.mp4'
import './home.css'
import {GrLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'
import {FiFacebook} from 'react-icons/fi'
import {FaInstagram} from 'react-icons/fa'
import {SiTripadvisor} from 'react-icons/si'
import {BsListUl} from 'react-icons/bs'
import {TbApps} from 'react-icons/tb'
const Home = () => {
   
        return (
           <section className='home'>

            <div className="overlay"></div>
                
                <video src={video}  muted autoPlay loop type="video/mp4"></video>

                <div className="homeContent container">
                <div className="textDiv">
                    <span className="smallText">
                        our package
                    </span>

                    <h1 className="homeTitle">
                        seacrh you Holiday
                    </h1>

                </div>  
                <div className="cardDiv" grid>
                    <div className="destinationInput"> 
                    <label htmlFor="city"> Search your destination: </label>
                    <div className="input flex">
                        <input type="text" placeholder="enter name here..."/>
                    <GrLocation className='icon'/>
                    </div>
                    </div>

                    <div className="dateInput"> 
                    <label htmlFor="date"> Select your date </label>
                    <div className="input flex">
                        <input type="date"/>                   
                    </div>
                    </div>

                    <div className="priceInput"> 
                    <div className="lable_total flex">
                        <label htmlFor="price">Max price:
                        </label>
                    <h3 className='total'>5000$</h3>
                    </div>
                    <div className="input flex">
                        <input type="range" max="5000" min="1000"/>
                    </div>
                    </div>

                      <div className="searchOptions flex">
                        <HiFilter  className='icon'/>
                        <span>More filter</span>
                      </div>
                </div>    
                <div className="homeFooterIcons flex">
                    <div className="rightIcons">
                         <FiFacebook className='icon'/>
                         <FaInstagram className='icon'/>
                         <SiTripadvisor className='icon'/>
                    </div>

                    <div className="leftIcons">
                        <BsListUl className='icon'/>
                        <TbApps className='icon'/>

                    </div>
                </div>          
            </div>
           </section>
        );
    }


export default Home;