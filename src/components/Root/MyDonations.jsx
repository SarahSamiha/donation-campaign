import DonationContainer from "./DonationContainer";


const MyDonations = () => {
    const donations = JSON.parse(localStorage.getItem("myDonations")) || [];

    return (
        <>
            <section className="max-w-6xl mx-auto my-20">
                <DonationContainer donations={donations} from={'myDonations'}></DonationContainer>
            </section>
        </>
    );
};

export default MyDonations;