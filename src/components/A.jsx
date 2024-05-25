import { NavLink } from "react-router-dom";
export default function A({ handleNavRight, className, to, label, fat = false }) {
    return (
        <NavLink
            onClick={handleNavRight}
            className={({ isActive }) => {
                return `p-1 font-bold inline-block 
            ${isActive && !fat ? 'text-[#f67e7f]' : ''} hover:text-[#f67e7f] duration-300 
            ${fat && isActive ? 'scale-110 bg-white text-black' : ''}
            ${fat ? `px-5 py-2 rounded-full border-2 border-white text-white hover:bg-white hover:text-black hover:scale-110 text-center`
                        : ''} ${className}`
            }}
            to={to} > {label}
        </NavLink >
    )

}
