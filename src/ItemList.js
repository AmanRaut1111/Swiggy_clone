import { CDN_URL } from "../src/utils/constants";

const ItemList = ({ items }) => {
    return (
        <div>
            <div>
                {items.map((item) => {
                    return (
                        <div className="acc-box" key={item.card.info.id}>
                            <div className="acc-by">
                                <img
                                    className="acc-img"
                                    src={CDN_URL + item?.card?.info?.imageId}
                                />
                                <div>
                                    <button className="ac-btn"> Add +</button>
                                </div>
                            </div>
                            <div>
                                <span>{item.card.info.name} </span>
                                <span> ₹ {item.card.info.price / 100} </span>
                            </div>
                            <p>{item.card.info.description}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ItemList;
