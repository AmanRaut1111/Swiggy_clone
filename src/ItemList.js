const ItemList = ({ items }) => {

    return <div>
        <div>
            {items.map((item) => {
                return (
                    <div className="acc-box" key={item.card.info.id}>
                        <div>

                            <span>{item.card.info.name} </span>
                            <span>{item.card.info.price} </span>


                        </div>

                        <p>{item.card.info.description}</p>
                    </div>
                )


            })}
        </div>
    </div>

}

export default ItemList