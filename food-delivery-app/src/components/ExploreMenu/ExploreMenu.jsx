// import React from "react";
// import "./ExploreMenu.css";

// import { menu_list } from "../../assets/assets";

// const ExploreMenu = ({category , setCategory}) => {

//   return (
//     <div id="explore-menu" className="explore-menu">
//       <h1>Explore Our Menu</h1>
//       <p className="explore-menu-text">Choose from a diverse menu featuring a delectable array </p>
//       <div className="explore-menu-list">
//         {
//           menu_list.map((item, index) => {
//             return (
//               <div onClick={() => setCategory(prev=> prev === item.menu_name? "All" : item.menu_name)} key={index} className="explore-menu-list-item">
//                 <img className={category === item.menu_name? "active" : ""} src={item.menu_image} alt="" />
//                 <p>{item.menu_name}</p>
//               </div>
//             )
//           })
//         }
//       </div>
//       <hr />
//     </div>
//   )
// }

// export default ExploreMenu;

import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  console.log("Set Category Function ===> ", setCategory);

  return (
    <div className="explore-menu" id="explore-menu">
      <h2>Explore Our Menu</h2>
      <p className="explore-menu-text">
        Discover a variety of delicious dishes curated just for you.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              if (typeof setCategory === "function") {
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                );
              } else {
                console.error("Console.log isn't a function");
              }
            }}
            className="explore-menu-list-item"
          >
            <img
              className={`menu-image ${
                category === item.menu_name ? "selected" : ""
              }`}
              src={item.menu_image}
              alt={item.menu_name}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
