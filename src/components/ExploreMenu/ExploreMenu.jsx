import React from "react";
import "./ExploreMenu.css";

import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h2>Explore Our Menu</h2>
      <p className="explore-menu-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolor
        quibusdam distinctio eum dignissimos unde sint autem ipsam! Minus
        cupiditate quia adipisci magnam autem aspernatur laudantium! Culpa quas
        beatae fugit.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div key={index} className="explore-menu-list-item">
              <img src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
