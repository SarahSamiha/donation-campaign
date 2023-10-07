import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const Donation = ({ donation, from }) => {

    const { id, picture, title, category, category_bg, price } = donation;
    

    if (from === 'home') {
        return (
            <Link
                to={`/${id}`}
                style={{ backgroundColor: category_bg + "20" }}
                className="card shadow-xl"
            >
                <figure>
                    <img src={picture} alt="Picture" className="w-full" />
                </figure>

                <div className="card-body">
                    <div
                        style={{ backgroundColor: category_bg + "40",  color: category_bg}}
                        className="badge badge-secondary border-none font-semibold"
                    >
                        {category}
                    </div>
                    <h2 style={{ color: category_bg }} className="card-title">
                        {title}
                    </h2>

                </div>
            </Link>

        );
    }
    else if (from === 'myDonations') {
        return (
            <Link
                to={`/${id}`}
                style={{ backgroundColor: category_bg + "20" }}
                className="card shadow-xl flex-row"
            >
                <figure>
                    <img src={picture} alt="Picture" className="h-full" />
                </figure>

                <div className="card-body flex-1">
                    <div
                        style={{ backgroundColor: category_bg + "40",  color: category_bg}}
                        className="badge badge-secondary border-none font-semibold"
                    >
                        {category}
                    </div>
                    <h2 style={{ color: category_bg }} className="card-title">
                        {title}
                    </h2>
                    <h2 style={{ color: category_bg }} className='font-semibold'>${(price.toFixed(2))}</h2>

                    <button style={{ backgroundColor: category_bg }}
                        className="btn text-white w-1/2 p-1">
                        View Details
                    </button>

                </div>
            </Link>

        );
    }
};
Donation.propTypes = {
    donation: PropTypes.object.isRequired,
    from: PropTypes.string.isRequired,
}

export default Donation;