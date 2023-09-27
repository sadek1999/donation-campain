import { NavLink } from "react-router-dom";
import './nav.css'


const Navbar = () => {

    
    return (
        <nav>

        
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {/* {links} */}
                            <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/donation"}>Donation</NavLink>
                            <NavLink to={'/statistics'}>Statistics</NavLink>
                        </ul>
                    </div>

                    <img src="/../../../public/Resources/Logo.png" alt="" />
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu gap-3 menu-horizontal px-1">
                        {/* {links} */}
                        <NavLink to={"/"}>Home</NavLink>
                            <NavLink to={"/donation"}>Donation</NavLink>
                           <NavLink to={'/statistics'}>Statistics</NavLink>
                    </ul>
                </div>

            </div>

            </nav>
    );
};

export default Navbar;