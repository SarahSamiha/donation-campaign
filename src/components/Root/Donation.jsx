import { Link } from "react-router-dom";


const Donation = ({ donation }) => {

    const { id, picture, large_picture, title, category, category_bg, description, price } = donation;

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
                    style={{ backgroundColor: category_bg + "80" }}
                    className="badge badge-secondary border-none"
                >
                    {category}
                </div>
                <h2 style={{ color: category_bg }} className="card-title">
                    {title}
                </h2>

            </div>
        </Link>

    );
};

export default Donation;