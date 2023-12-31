import portada_ from "../images/portada_.jpg";
import "../App.css";
import Products from "./Products";

const Home = () => {
  return (
    <div className="hero">
      <div className="card text-bg-dark text-white border-0">
        <img
          src={portada_}
          className="card-img"
          alt="Background"
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">
              Todo lo que buscas y mas
            </h5>
            <p className="card-text lead fs-2">Si lo necesitas lo tenemos</p>
          </div>
        </div>
      </div>
      <Products />
    </div>
  );
};

export default Home;
