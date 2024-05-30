import { useState } from "react";
import img from '../assets/bg-pattern-about-1-mobile-nav-1.png'
import A from "./A";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    function handleRightNav() {
        setIsOpen(!isOpen);
    }
    return (
        <header className="bg-[#014e56] text-white">
            <div className={`grid grid-cols-[25px_1fr_25px] sm:grid-cols-[max-content_1fr_max-content] sm:px-4 sm:max-w-[1110px] sm:gap-5 sm:m-auto h-28 sm:h-[194px] items-center`}>
                <div className="col-start-2 col-end-3 sm:col-start-1 sm:col-end-2">
                    <div className="grid grid-cols-2 items-center  sm:grid-cols-1">
                        <span className="text-2xl sm:text-3xl font-[700] >> md:text-[48px]">myteam</span>
                        <span onClick={handleRightNav} className=" justify-self-end sm:hidden">&#9776;</span>
                    </div>
                </div>
                <div className="hidden sm:col-start-2 sm:col-end-3 sm:block">
                    <A className="" to="/" label="home" />
                    <A to="/about" label="about" />
                </div>
                <div className="hidden sm:col-start-3 sm:col-end-4 sm:block" >
                    <A to="/contact" label="contact us" fat={true} />
                </div>
            </div >
            <div
                style={{
                    backgroundImage: `url(${img})`
                }}
                className={`_right_nav_bar bg-[bottom_10px_right_-100px] bg-no-repeat grid 
                                    grid-cols-[48px_1fr_35px] bg-[#014e56] grid-rows-[128px_200px_160px]
                                transition-all duration-300 absolute h-full top-0    
                                ${isOpen ? 'translate-x-0 shadow-[-180px_0px_250px_180px_rgba(0,0,0,0.5)]' : 'hidden translate-x-full'}
                                    w-[250px] absolute right-0 h-full`} >
                <div className="row-start-2 row-end-3 col-start-2 col-end-3">
                    <A handleNavRight={handleRightNav} className="" to="/" label="Home" />
                    <A handleNavRight={handleRightNav} className="" to="about" label="About" />
                </div>
                <div className="row-start-3 row-end-4 col-start-2 col-end-3" >
                    <A handleNavRight={handleRightNav} to="contact" label="contact us" fat={true} />
                </div>
                <span onClick={handleRightNav} className={`col-start-3 cursor-pointer flex items-center text-white hover:text-[#f67e7f]`}  >
                    &#10008;
                </span>
            </div>
        </header >
    )
}

