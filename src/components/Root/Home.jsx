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
            
            <section>
                <DonationContainer donations={donations}></DonationContainer>
            </section>
        </>
    );
};

export default Home;