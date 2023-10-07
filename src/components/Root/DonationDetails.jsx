import { useLoaderData, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import ErrorPage from "../ErrorPage";


const DonationDetails = () => {
    const { id } = useParams();
    const donations = useLoaderData();
    const donation = donations.find(item => item.id == id);
    const {large_picture, title, category_bg, description, price } = donation;

    const handleAdd = () => {

        const mySavedArray = JSON.parse(localStorage.getItem("myDonations")) || [];

        const findData = mySavedArray.find(item => item.id == donation.id);
        if (findData) {
            toast.error("You have already donated");
        } else {
            mySavedArray.push(donation);

            localStorage.setItem("myDonations", JSON.stringify(mySavedArray));
            toast.success("Donation Successful");
        }
    };

    if (donation) {
        return (
            <>
                <section className="content-box max-w-6xl mx-auto my-20">
                    <div className="relative">
                        <img
                            src={large_picture}
                            className="w-full h-[450px] object-cover"
                            alt=""
                        />
                        <div className="button absolute bottom-0 p-10 bg-opacity-60  bg-stone-700 w-full">
                            <button
                                onClick={handleAdd}
                                style={{ backgroundColor: category_bg }}
                                className="btn text-white"
                            >
                                Donate{price}
                            </button>
                        </div>
                    </div>

                    <div
                        style={{ backgroundColor: category_bg + "25" }}
                        className="p-5 rounded-lg flex flex-col justify-between"
                    >
                        <div className="flex justify-between items-center">
                            <h2 style={{ color: category_bg }} className="card-title">
                                Dish Name : {title}
                            </h2>
                        </div>

                        <p className=" text-lg">
                            {description}
                        </p>
                    </div>
                </section>
            </>
        );
    } else {
        return <ErrorPage></ErrorPage>;
    }

};

export default DonationDetails;