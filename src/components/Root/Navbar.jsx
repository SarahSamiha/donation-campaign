import { NavLink } from "react-router-dom";


const Navbar = () => {
    const links = <>
        <li><NavLink to='/'
            style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#FF444A' : '#fff',
            })}>
            Home
        </NavLink></li>
        <li><NavLink to='/donations'
            style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#FF444A' : '#fff',
            })}>
            Donation
        </NavLink></li>
        <li><NavLink to='/statistics'
            style={({ isActive }) => ({
                color: isActive ? '#fff' : '#545e6f',
                background: isActive ? '#FF444A' : '#fff',
            })}>
            Statistics
        </NavLink></li>
    </>

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links}
                    </ul>
                </div>
                <div>
                    <img src="https://i.ibb.co/QchC75t/Logo.png" alt="logo" />
                </div>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>

        </div>
    );
};

export default Navbar;