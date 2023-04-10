// import { useEffect } from "react";
import Card from "./Card";
import "./styles/Shop.scss";
// import hunterDreamSound from "./assets/sounds/hunter-dream.mp3";

const Shop = ({ catalog, addToCart }) => {
  // useEffect(() => {
  //   const themeSound = new Audio(hunterDreamSound);
  //   themeSound.volume = 0.5;
  //   themeSound.play();
  // }, []);

  const listedIItems = catalog.map((item) => (
    <Card
      key={item.id}
      id={item.id}
      imgSrc={item.images.big}
      name={item.name}
      price={item.price}
      addToCart={addToCart}
    />
  ));

  return (
    <div className="shop-page">
      <div className="card-container">{listedIItems}</div>
    </div>
  );
};

export default Shop;
