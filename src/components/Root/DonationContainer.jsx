import PropTypes from 'prop-types';
import Donation from "./Donation";

const DonationContainer = ({ donations }) => {

    return (
        <>
            <div className="content-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
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

