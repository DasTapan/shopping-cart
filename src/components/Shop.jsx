import { catalog } from "./Catalog";
import Card from "./Card";
import "./styles/Shop.scss";

const Shop = () => {
  const listedIItems = catalog.map((item) => (
    <Card key={item.id} imgSrc={item.images.big} name={item.name} />
  ));

  return (
    <div className="shop-page">
      <div className="card-container">{listedIItems}</div>
    </div>
  );
};

export default Shop;
