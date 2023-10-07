import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const Root = () => {
    return (
        <>
            <header>
                <nav className="max-w-6xl mx-auto ">
                    <Navbar></Navbar>
                </nav>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
        </>
    );
};

export default Root;