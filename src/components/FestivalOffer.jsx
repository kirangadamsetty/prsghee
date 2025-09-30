import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function FestivalOffer() {
  return (
    <div className="container-fluid bg-light min-vh-100 d-flex flex-column justify-content-center align-items-center text-center py-5">
      {/* Logo / Header */}
      <div className="d-flex align-items-center mb-4">
        <div
          className="rounded-circle d-flex align-items-center justify-content-center text-white fw-bold"
          style={{
            width: "50px",
            height: "50px",
            background:
              "linear-gradient(135deg, #fbbc05, #ea4335, #34a853, #4285f4)",
          }}
        >
          G
        </div>
        <h1 className="ms-3 fw-bold text-dark">Analytics Pro</h1>
      </div>

      {/* Card Section */}
      <div className="card shadow-lg border-0" style={{ maxWidth: "500px" }}>
        <div className="card-body p-5">
          <h2 className="card-title text-warning fw-bold mb-3">
            🎉 Huge Festival Price Drop!
          </h2>
          <p className="card-text text-muted mb-4">
            Get advanced analytics tools at a never-before price, exclusively
            for India this festive season.
          </p>

          {/* Pricing */}
          <div className="mb-4">
            <p className="fs-4 text-decoration-line-through text-secondary">
              ₹9,000
            </p>
            <p className="fs-1 fw-bold text-success">₹2,000</p>
          </div>

          {/* Button */}
          <a href="#buy" className="btn btn-success btn-lg px-5 fw-semibold">
            Grab Offer
          </a>
        </div>
      </div>
    </div>
  );
}

export default FestivalOffer;
