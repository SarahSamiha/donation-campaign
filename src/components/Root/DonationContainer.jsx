import PropTypes from 'prop-types';
import Donation from "./Donation";
import { useState } from 'react';

const DonationContainer = ({ donations, from }) => {
    const [dataLength, setDataLength] = useState(4);

    if (from === 'home') {
        return (
            <>
                <div className="content-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
                    {
                        donations.map(donation => (
                            <Donation key={donation.id} donation={donation} from={from}></Donation>
                        ))
                    }
                </div>
            </>
        )
    }
    else if (from === 'myDonations') {
        return (
            <>
                <div className="content-box grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {
                        donations.slice(0, dataLength).map(donation => (
                            <Donation key={donation.id} donation={donation} from={from}></Donation>
                        ))
                    }
                </div>
                <div className={dataLength === donations.length && 'hidden'} >
                    <div className="text-center mt-6">
                        <button
                            onClick={() => setDataLength(donations.length)}
                            className="btn hover:bg-red-400 bg-[#FF444A] border-none text-white">Show All</button>
                    </div>
                </div>
            </>
        );
    }
};

// return (
//     <>
//         <div className="content-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
//             {
//                 donations.map(donation => (
//                     <Donation key={donation.id} donation={donation}></Donation>
//                 ))
//             }
//         </div>
//     </>
// );


DonationContainer.propTypes = {
    donations: PropTypes.array.isRequired,
    from: PropTypes.string.isRequired,
}


export default DonationContainer;

