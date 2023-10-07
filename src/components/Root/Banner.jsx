import PropTypes from 'prop-types';
import { useRef } from "react";
import { useLoaderData } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const Banner = ({ setDonations }) => {
    const donations = useLoaderData();
    const searchRef = useRef();

    const handleSubmit = () => {
        const search = searchRef?.current?.value.toLowerCase();

        const filterData = donations.filter(donation =>
            donation.category.toLowerCase().includes(search)
        );

        if (filterData.length > 0) {
            setDonations(filterData);
        } else {
            toast("invalid search");
        }

        // console.log();
    };
    return (
        <div>
            <div
                className="hero h-[500px] bg-top"
                style={{
                    backgroundImage:
                        "url(https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80)",
                }}
            >
                <div className="hero-overlay bg-white bg-opacity-80 "></div>
                <div className="hero-content text-center ">
                    <div className="max-w-9/12">
                        <h1 className="mb-5 text-5xl md:text-4xl lg:text-5xl font-bold">
                            I Grow By Helping People In Need
                        </h1>

                        <div className="relative w-3/4 mx-auto">
                            <input
                                ref={searchRef}
                                defaultValue={""}
                                type="text"
                                placeholder="Search by category"
                                className="input input-bordered w-full pr-16"
                            />
                            <button
                                onClick={handleSubmit}
                                className="btn hover:bg-red-400 absolute top-0 right-0 rounded-l-none bg-[#FF444A] border-none text-white"
                            >
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

Banner.propTypes = {
    setDonations: PropTypes.func.isRequired
}

export default Banner;