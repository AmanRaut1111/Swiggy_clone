import RestaurantCard, { withPromottedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filterdRestaurant, setFilteredRestaurant] = useState([]);
    const [searchtext, setSearchText] = useState("");
    const ResCardPromotted = withPromottedLabel(RestaurantCard)


    console.log("body render", listOfRestaurant);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const result = await data.json();
        setListOfRestaurant(
            result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
        setFilteredRestaurant(
            result?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
                ?.restaurants
        );
    };

    //conditional redering

    // if (listOfRestaurant === 0) {
    //     return <Shimmer />
    // }

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false)
        return (
            <h1>
                Oppps.. Looks like you are offline... Please check your internet
                connection
            </h1>
        );

    return listOfRestaurant.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="search-container">
                <div className="search">
                    <input
                        type="text"
                        className="search-box"
                        value={searchtext}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button
                        className="search-btn"
                        onClick={() => {
                            console.log(searchtext);
                            const filterRestaurant = listOfRestaurant.filter((res) => {
                                return res.info.name.includes(searchtext);
                            });
                            setFilteredRestaurant(filterRestaurant);
                        }}
                    >
                        search
                    </button>
                </div>
            </div>
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        //filter Logic
                        const filterList = filterdRestaurant.filter((res) => {
                            return res.info.avgRating > 4.4;
                        });
                        console.log(filterList);
                        setFilteredRestaurant(filterList);
                    }}
                >
                    {" "}
                    Top Rated Restaurant
                </button>
            </div>
            <div className="res-container">
                {filterdRestaurant.map((restaurant) => {
                    return (
                        <Link
                            className="resLink"
                            key={restaurant.info.id}
                            to={"/restaurant/" + restaurant.info.id}
                        >
                            {" "}
                            {
                                restaurant.info.isOpen ? <ResCardPromotted resData={restaurant} /> : <RestaurantCard resData={restaurant} />
                            }

                        </Link>
                    );
                })}
            </div>
        </div>
    );
};




export default Body;
