const Product_list = (props) => {
  let { category, description, price, image } = props.item;
  return (
    <div className="product_list ">
      <div className="card " style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" />
        <div className="card-body">
          <h5 className="card-title">{category}</h5>
          <h3>Price: {price}</h3>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
};
export default Product_list;
