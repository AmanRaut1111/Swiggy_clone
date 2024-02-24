import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { MENU_API } from "../utils/constants";


const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState();

    const { resId } = useParams()


    useEffect(() => {
        console.log("api is called");
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const menuData = await data.json();

        setResInfo(menuData.data);
    };

    const { name, costForTwo, cuisines, price } =
        resInfo?.cards[2]?.card?.card?.info ?? {};

    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ?? {};

    console.log(itemCards);






    return (
        <div className=" Menu">
            <h2>{name}</h2>
            <h2>{cuisines ? cuisines.join(' ,') : cuisines}  </h2>
            <h2>{costForTwo}</h2>

            <ul>
                {itemCards && Array.isArray(itemCards) && itemCards.map((item) => {
                    return <li key={item.card.info.id}> {item.card.info.name} -{item.card.info.price}</li>;
                })}
            </ul>
        </div>
    );
};

export default RestaurantMenu;
