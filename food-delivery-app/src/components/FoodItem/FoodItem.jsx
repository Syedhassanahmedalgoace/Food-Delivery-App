// import "./FoodItem.css";
// import { assets } from "../../assets/assets";
// import { useContext } from "react";
// import { StoreContext } from "../../context/StoreContext";

// const FoodItem = ({ id, name, price, description, image }) => {
//   const [cartItems, addToCart, removeCart] = useContext(StoreContext);
//   return (
//     <div className="food-item">
//       <div className="food-item-img-container">
//         <img src={image} alt="" className="food-item-img" />
//         {!cartItems[id] ? (
//           <img
//             className="add"
//             onClick={() => addToCart(id)}
//             src={assets.add_icon_white}
//           />
//         ) : (
//           <div className="food-item-counter">
//             <img
//               onClick={() => removeCart(id)}
//               src={assets.remove_icon_red}
//               alt=""
//             />
//             <p>{cartItems[id]}</p>
//             <img
//               onClick={() => addToCart(id)}
//               src={assets.add_icon_green}
//               alt=""
//             />
//           </div>
//         )}
//       </div>
//       <div className="food-item-info">
//         <div className="food-item-name-rating">
//           <p>{name}</p>
//           <img src={assets.rating_starts} />
//         </div>
//         <p className="food-item-desc">{description}</p>
//         <p className="food-item-price">${price}</p>
//       </div>
//     </div>
//   );
// };
// export default FoodItem;

import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const context = useContext(StoreContext);

  console.log("StoreContext:", context);

  if (!context) {
    console.error("Error: StoreContext is not available!");
    return <p>Error Loading Food Item!</p>;
  }

  const { cartItems, addToCart, removeCart } = context;

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img src={image} alt={name} className="food-item-image" />
        {!cartItems[id] ? (
          <img
            className="add"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className="food-item-counter">
            <img
              onClick={() => removeCart(id)}
              src={assets.remove_icon_red}
              alt="Remove From Cart"
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Increase Quantity"
            />
          </div>
        )}
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating-stars" />
        </div>
        <p className="food-item-desc">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
