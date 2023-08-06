import Product from "../Product";
import About from "./About";
import "./App.css";
import Header from "./Header";
import Hoc from "./Hoc";

function App() {
  return (
    <>
      <Header />
      <About />
      {/* <Product /> */}
    </>
  );
}

export default Hoc(App);
