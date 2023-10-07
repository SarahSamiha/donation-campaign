import { useState } from "react";
import Banner from "./Banner";
import { useLoaderData } from "react-router-dom";
import DonationContainer from "./DonationContainer";


const Home = () => {
    const [donations, setDonations] = useState(useLoaderData());
    return (
        <>
            <section>
            <Banner setDonations={setDonations}></Banner>
            </section>

            <section  className="max-w-6xl mx-auto my-20">
                <DonationContainer donations={donations}></DonationContainer>
            </section>
        </>
    );
};

export default Home;