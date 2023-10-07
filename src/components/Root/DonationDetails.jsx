import { useLoaderData, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import ErrorPage from "../ErrorPage";


const DonationDetails = () => {
    const { id } = useParams();
    const donations = useLoaderData();
    const donation = donations.find(item => item.id == id);
    const { large_picture, title, category_bg, description, price } = donation;

    const handleAdd = () => {

        const mySavedArray = JSON.parse(localStorage.getItem("myDonations")) || [];

        const findData = mySavedArray.find(item => item.id == donation.id);
        if (findData) {
            toast('You have already donated');
        } else {
            mySavedArray.push(donation);

            localStorage.setItem("myDonations", JSON.stringify(mySavedArray));
            toast('Donation Successful');
        }
    };

    if (donation) {
        return (
            <>
                <section className="content-box max-w-6xl mx-auto my-20">
                    <div className="relative rounded-xl">
                        <img
                            src={large_picture}
                            className="w-full h-[450px] object-cover rounded-xl"
                            alt=""
                        />
                        <div className="button absolute bottom-0 p-10 bg-opacity-70  bg-black w-full border-none rounded-xl rounded-t-none">
                            <button
                                onClick={handleAdd}
                                style={{ backgroundColor: category_bg }}
                                className="btn text-white"
                            >
                                Donate ${price}
                            </button>
                        </div>
                    </div>

                    <div
                        className="rounded-lg flex flex-col justify-between "
                    >
                        <div className="flex justify-between items-center my-5">
                            <h2 className="card-title font-bold text-4xl">
                                {title}
                            </h2>
                        </div>

                        <p className=" text-base text-gray-600 font-normal  text-justify">
                            {description}
                        </p>
                    </div>
                    <ToastContainer />
                </section>
            </>
        );
    } else {
        return <ErrorPage></ErrorPage>;
    }

};

export default DonationDetails;