import background_img from "../Componts/Images/background_img.jpg";
import product_1 from "../Componts/Images/product-1.jpg";
import product_2 from "../Componts/Images/product-2.jpg";
import product_3 from "../Componts/Images/product-3.jpg";
import product_4 from "../Componts/Images/product-4.jpg";
import morning_powder from "../Componts/Images/morning_powder.jpg";

const About = () => {
  return (
    <>
      <div className="container-fulid about">
        <img src={background_img} />
        <div className="container">
          <div className=" row heading text-center">
            <div className="col-lg-12">
              <h3>
                VU Natural | Your Gateway to 100% Organic Skincare for All Skin
                Types
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fulid featured-div">
        <div className="container">
          <div className="row text-center ">
            <h1 className="my-3">FEATURED PRODUCTS</h1>

            <div className=" col-sm-6 col-lg-3 featured ">
              <img
                src={product_1}
                alt="..."
                style={{ width: "250px", height: "300px" }}
                className="my-2"
              />
              <div>
                <h5 className="mt-2">Vu Natural</h5>
                <h6 className="text-success">Moringa Elixir Face Serum</h6>
                <p className="fw-bold">$ 39.99</p>
              </div>
            </div>

            <div className=" col-sm-6 col-lg-3 featured">
              <img
                src={product_2}
                alt="..."
                style={{ width: "250px", height: "300px" }}
                className="my-2"
              />
              <div>
                <h5 className="mt-2">Vu Natural</h5>
                <h6 className="text-success">The Healing Face cream</h6>
                <p className="fw-bold">$ 45.99</p>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 featured">
              <img
                src={product_3}
                alt="..."
                style={{ width: "250px", height: "300px" }}
                className="my-2"
              />
              <div>
                <h5 className="mt-2 ">Vu Natural</h5>
                <h6 className="text-success">Iluminator Face Cream</h6>
                <p className="fw-bold">$ 39.99</p>
              </div>
            </div>
            <div className=" col-sm-6 col-lg-3 featured">
              <img
                src={product_4}
                alt="..."
                style={{ width: "250px", height: "300px" }}
                className="my-2"
              />
              <div>
                <h5 className="mt-2">Vu Natural</h5>
                <h6 className="text-success">Magic Eye Contour Cream</h6>
                <p className="fw-bold">$ 39.99</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="container">
          <div className="row my-3 ">
            <div className="col-6">
              <img src={morning_powder} style={{ width: "500px" }} />
            </div>
            <div className="col-6">
              <h6>MORINGA POWDER </h6>
              <p className="fs-5 ">
                Experience the remarkable benefits of Moringa Powder in our skin
                care products. Derived from the nutrient-rich Moringa tree, this
                botanical treasure offers a multitude of advantages for your
                skin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
