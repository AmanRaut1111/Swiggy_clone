import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
    const { resData } = props;

    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo"
                src={
                    CDN_URL +
                    resData.cloudinaryImageId
                }
            />
            <h3>{resData.name}</h3>
            <h4>{resData.cuisines.join(" ,")}</h4>
            <h4> {resData.deliveryTime} </h4>
            <h4>{resData.avgRating}</h4>

            <h4> {resData.costForTwo} </h4>
        </div>
    );
};

export default RestaurantCard