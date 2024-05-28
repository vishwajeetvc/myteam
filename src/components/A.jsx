import { NavLink } from "react-router-dom";
export default function A({ handleNavRight, className, to, label, fat = false }) {
    return (
        <NavLink
            onClick={handleNavRight}
            className={({ isActive }) => {
                console.log(isActive, label)
                return `p-4 font-bold inline-block hover:text-[#f67e7f] duration-300  
            ${(!isActive) ? 'text-white' : ''} 
            ${(isActive && !fat) ? 'text-[#f67e7f]' : 'text-black'} 
            ${(fat && isActive) ? 'scale-110 bg-white' : ''}
            ${fat ? `px-6 py-2  rounded-full border-2 border-white  hover:bg-white hover:text-black hover:scale-110 text-center` : ''} 
            ${className}`
            }}
            to={to} > {label}
        </NavLink >
    )

}
