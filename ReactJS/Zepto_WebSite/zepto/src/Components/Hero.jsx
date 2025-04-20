import React from "react";
import HeroImage from "../assets/Images/hero1.png";
import Certificate from "../assets/Images/certi.png";

const Hero = () => {
  return (
    <section className="container-fluid bg-light py-5">
      <div className="container py-5">
        <div className="row align-items-center">

          <div className="col-lg-6 mb-5 mb-lg-0">
            <h1 className="display-3 fw-bold mb-4 text-dark">
              Groceries delivered in <span className="text-primary">10 minutes</span>
            </h1>
            <p className="lead fw-medium mb-4 text-secondary">
              Get farm-fresh fruits, vegetables, dairy, snacks, and more – delivered lightning fast from your neighborhood store.
            </p>
            <div className="d-flex align-items-center mb-4">
              <img src={Certificate} alt="Certified" className="me-3" style={{ height: "50px" }} />
              <span className="fw-semibold text-dark">
                Rated 4.8★ by 1M+ happy customers
              </span>
            </div>
            <div className="d-flex gap-3">
              <button className="btn btn-danger btn-lg rounded-pill px-4">
                Order Now
              </button>
              <button className="btn btn-outline-danger btn-lg rounded-pill px-4">
                Explore Essentials
              </button>
            </div>
          </div>

          <div className="col-lg-6 text-center">
            <img
              src={HeroImage}
              alt="Zepto Delivery"
              className="img-fluid"
              style={{ maxHeight: "500px", objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
