import { useState } from "react";
import img from '../assets/bg-pattern-about-1-mobile-nav-1.svg'
import A from "./A";

export default function Header() {

    const [isOpen, setIsOpen] = useState(false);
    function handleNavRight() {
        setIsOpen(!isOpen);
    }
    return (
        <header className="bg-[#014e56]">
            <div className={`_header-wrapper sm:max-w-[1240px] sm:m-auto flex justify-between text-white  items-center py-10 px-8 bg-[#014e56]`}>

                <span className="_logo font-bold text-3xl">myTeam</span>
                <span className="_ bar-button text-3xl sm:hidden md:w-[1240px] hover:cursor-pointer" onClick={handleNavRight}>&#9776;</span>
                <nav className="hidden sm:flex items-center justify-between flex-grow px-8">
                    <div className="flex items-center">
                        <A className="px-5" to="/" label="home" />
                        <A to="about" label="about" />
                    </div>
                    <A to="contact" label="Contact us" fat={true} />
                </nav>
                <nav className={`w-full h-full z-10 absolute left-0 ${isOpen ? '' : 'hidden'} top-0 backdrop-blur`}>
                    <div
                        style={{
                            backgroundImage: `url(${img})`,
                            backgroundPosition: '150px 95%',
                        }}
                        className={`bg-[#2c636a] font-bold w-[250px] h-full absolute right-0 flex flex-col p-8 pt-24 bg-no-repeat `} >

                        <A handleNavRight={handleNavRight} className="mt-4" to="/" label="Home" />
                        <A handleNavRight={handleNavRight} className="mt-4" to="about" label="About" />
                        <A handleNavRight={handleNavRight} className="mt-24" to="contact" label="Contact us" fat={true} />
                        <span className={`absolute top-8 hover:cursor-pointer right-8 p-3 rounded hover:bg-red-400`} onClick={handleNavRight} >
                            &#10008;
                        </span>
                    </div>
                </nav>
            </div >
        </header>
    )
}

