import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
    const { resData } = props;



    return (
        <div className="res-card">
            <img
                className="res-logo"
                alt="res-logo"
                src={CDN_URL + resData.info.cloudinaryImageId}
            />
            <h3>{resData.info.name}</h3>
            <h4>{resData.info.cuisines.join(" ,")}</h4>
            <h4> {resData.info.deliveryTime} </h4>
            <h4>
                {resData.info.avgRating} <span className="fa fa-star checked"></span>{" "}
            </h4>

            <h4> {resData.info.costForTwo} </h4>
        </div>
    );
};



//higher order component


export const withPromottedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="label">Promotted</label>
                <RestaurantCard {...props}></RestaurantCard>
            </div>
        )
    }
}


export default RestaurantCard;
