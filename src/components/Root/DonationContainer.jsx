import PropTypes from 'prop-types';
import Donation from "./Donation";

const DonationContainer = ({ donations }) => {
    console.log(donations);


    return (
        <>
            <div className="content-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {
                    donations.map(donation => (
                        <Donation key={donation.id} donation={donation}></Donation>
                    ))
                }
            </div>
        </>
    );
};

DonationContainer.propTypes = {
    donations: PropTypes.array.isRequired,
}

export default DonationContainer;

