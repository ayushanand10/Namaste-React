import { useState, useEffect } from "react";
import ShimmerUi from "./ShimmerUi";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/constants";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(MENU_URL + resId)

        const json = await data.json();

        setResInfo(json.data);
    }

    if (resInfo === null) return <ShimmerUi />;

    const { name, costForTwoMessage, cuisines } = resInfo?.cards[0]?.card?.card?.info;

    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

    return (
        <div className="menu">
            <h1 className="resName">{name}</h1>
            <p>{cuisines.join(', ')} - {costForTwoMessage} </p>
            <h2>Menu</h2>
            <ul>
                {itemCards.map((item) => (
                    <li key={item.card.info.id}>
                        {item.card.info.name} -  &#8377;{item.card.info.price / 100}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default RestaurantMenu;