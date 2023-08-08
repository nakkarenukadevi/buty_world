import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className=" container-fluid header">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-sm-6">
              {/* <form role="search">
                <div className="d-flex justify-content-center">
                  <input
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-primary" type="submit">
                    Search
                  </button>
                </div>
              </form> */}
            </div>
            <div className="col-lg-6 col-sm-12 ">
              <div className="links d-flex   justify-content-sm-end">
                <div className="link">
                  <Link to="/">Home</Link>
                </div>
                <div className="link">
                  <Link to="about">About</Link>
                </div>
                <div className="link">
                  <Link to="contact">Contact</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
