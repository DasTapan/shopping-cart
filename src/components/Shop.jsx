import Card from "./Card";
import "./styles/Shop.scss";

const Shop = ({ catalog, addToCart }) => {
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
