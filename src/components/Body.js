import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);

    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        //filter Logic
                        const filterList = listOfRestaurant.filter((res) => {
                            return res.avgRating > 4.4;
                        });
                        console.log(filterList);
                        setListOfRestaurant(filterList);
                    }}
                >
                    {" "}
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {listOfRestaurant.map((restaurant) => {
                    return <RestaurantCard key={restaurant.id} resData={restaurant} />;
                })}
            </div>
        </div>
    );
};

export default Body;
