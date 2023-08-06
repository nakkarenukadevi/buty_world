import { useEffect, useState } from "react";
import { Product_Api } from "./Componts/utils";
import Product_list from "./Componts/ProductList";

const Product = () => {
  let [product, setproduct] = useState([]);
  useEffect(() => {
    getdata();
  }, []);

  const getdata = async () => {
    let data = await fetch(Product_Api);
    let json = await data.json();
    console.log(json);
    setproduct(json);
  };

  return (
    <>
      <div className="container">
        {product.map((item) => {
          return <Product_list key={item.id} item={item} />;
        })}
      </div>
    </>
  );
};
export default Product;
