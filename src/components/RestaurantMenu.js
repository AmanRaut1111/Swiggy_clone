import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { MENU_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
    // const [resInfo, setResInfo] = useState(null);

    // useEffect(() => {
    //     console.log("api is called");
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     const data = await fetch(MENU_API + resId);
    //     const menuData = await data.json();

    //     setResInfo(menuData.data);
    // };

    const [showIndex, setShowIndex] = useState(false);

    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);

    if (resInfo === null) return <Shimmer />;

    const { name, cuisines, costForTwoMessage } =
        resInfo?.cards[0]?.card?.card?.info ?? {};

    const { itemCards } =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
            ?.card ?? {};

    const category =
        resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (e) =>
                e.card?.card?.["@type"] ===
                "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    console.log("category", category);

    return (
        <div className=" menu">
            <h2>{name}</h2>

            <h3>
                {cuisines ? cuisines.join(" ,") : cuisines} - {costForTwoMessage}
            </h3>

            {category.map((category, index) => {
                return (
                    <RestaurantCategory
                        key={category?.card?.card?.title}
                        showitems={false}
                        data={category?.card?.card}
                    // setShowIndex={() => setShowIndex(index)}
                    />
                );
            })}
        </div>
    );
};

export default RestaurantMenu;
