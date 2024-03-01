import ItemList from "../ItemList";

import { useState } from "react";

const RestaurantCategory = ({ data }) => {
    const [showitems, setShowitems] = useState(false);

    console.log(showitems);
    const handleClick = () => {
        setShowitems(!showitems);
    };

    return (
        <div className=" acc">
            <div className="accodian-container">
                <div className="acc-conatiner" onClick={handleClick}>
                    <h3 className="as">
                        {data.title} ({data.itemCards.length})
                    </h3>
                    <span>⬇️</span>
                </div>
                {showitems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    );
};

export default RestaurantCategory;
