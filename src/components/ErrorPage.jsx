import { Link, useRouteError } from "react-router-dom";
import Navbar from "./Root/Navbar";


const ErrorPage = () => {
    const error = useRouteError();

    return (
        <>
            <Navbar></Navbar>
            <div className="h-screen flex flex-col items-center justify-center gap-10">
                <h1 className="text-4xl text-red-500">
                    {error?.data?.length ? error.data : "No Data Found"}
                </h1>

                <Link to="/" className="btn  bg-[#FF444A] hover:bg-red-400 border-none text-white">
                    Go to Home
                </Link>
            </div>
        </>
    );
};

export default ErrorPage;