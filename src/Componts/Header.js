import "bootstrap/dist/css/bootstrap.min.css";
const Header = () => {
  return (
    <>
      <div className=" container-fluid header">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand-lg ">
              <div className="container-fluid d-flex justify-content-end ">
                <button
                  className="navbar-toggler "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse "
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2  mb-lg-0 ">
                    <li className="nav-link text-white">Home</li>
                    <li className="nav-link  text-white">About</li>

                    <li className="nav-link  text-white">Product</li>
                  </ul>
                  <form className="d-flex" role="search">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <button className="btn btn-primary" type="submit">
                      Search
                    </button>
                  </form>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
export default Header;
