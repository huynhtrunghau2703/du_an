import React, {useState} from 'react';
import './navbar.css';
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai';
import {RxDragHandleDots2} from 'react-icons/rx'
const NavBar = () =>  {
   const [actice, setActive] = useState('navBar')
// toggle navBAr
const show = () => {
    setActive('navBar activeNavbar')
}
const removenavbar = () => {
    setActive('navBar ')
}

        return (
            <section className='navBarSection'>
                <header className="header flex">

                    <div className="logoDiv">
                        <a href="#" className="logo flex">
                            <h1><MdOutlineTravelExplore className='icon'/>Travel.</h1>
                        </a>
                    </div>

                    <div className={actice}>
                        <ul className='navLits'>
                            <li className="navItem">
                                <a href="#" className="navLink">Home</a>
                            </li>
                            <li className="navItem">
                                <a href="#" className="navLink">Package</a>
                            </li>   
                            <li className="navItem">
                                <a href="#" className="navLink">Shop</a>
                            </li>
                            <li className="navItem">
                                <a href="#" className="navLink">About</a>
                            </li>
                            <li className="navItem">
                                <a href="#" className="navLink">Page</a>
                            </li>
                            <li className="navItem">
                                <a href="#" className="navLink">New</a>
                            </li>
                            <li className="navItem">
                                <a href="#" className="navLink">Contact</a>
                            </li>                      
                            <button className='btn'>
                            <a href="#"> Book Now </a>
                            </button>
                            </ul>
                        <div onClick={removenavbar} className="coloseNavBar">
                            <AiFillCloseCircle  className="icon"/>
                        </div>
                    </div>
                   
                        <div onClick={show} className="toggleNavbar">
                            <RxDragHandleDots2 className="icon" />
                        </div>
                        
                </header>
            </section>

        );
    }


export default NavBar;
