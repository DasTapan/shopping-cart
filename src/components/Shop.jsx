import Card from "./Card";
const catalog = [
  {
    id: 1,
    name: "Saw Cleaver",
    price: 19_999,
    images: {
      small: "",
      big: "",
    },
  },
];

const Shop = () => {
  return (
    <div className="shop-page">
      This is the shopping page
      <Card />
    </div>
  );
};

export default Shop;
