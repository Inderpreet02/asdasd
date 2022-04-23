import React from "react";
import "./Header.css";
import "./CancerForm.js";
import { Link } from "react-router-dom";


export default function Header(props) {
  return (
    <nav style={{ width: "100wv", margin: "auto" }}>
      <div class="menu-icon">
        <span class="fas fa-bars"></span>
      </div>
      <Link to="/">
        <div class="logo">HealthCare App</div>

      </Link>
      <div class="nav-items">
        <li style={{ paddingTop: "23px" }}>
          <a href="#">
            <Link to="/Contents">Home</Link>
          </a>
        </li>
        <li style={{ paddingTop: "23px" }}>
          <a href="#">
            <Link to="/Contents">About</Link>
          </a>
        </li>
        <li
          class="nav-item dropdown"
          style={{ color: "white", paddingTop: "2px" }}
        >
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Select disease type--
          </a>

          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li>
              <a class="dropdown-item" href="#">
                <span style={{ color: "black" }}>
                  <Link to="/CancerForm" style={{ color: "black" }}>
                    Cancer
                  </Link>
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <span style={{ color: "black" }}>
                  <Link to="/DiabetesForm" style={{ color: "black" }}>
                    Diabetes
                  </Link>
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <span style={{ color: "black" }}>
                  <Link to="/HeartForm" style={{ color: "black" }}>
                    Heart
                  </Link>
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <span style={{ color: "black" }}>
                  <Link to="/LiverForm" style={{ color: "black" }}>
                    Liver
                  </Link>
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <span style={{ color: "black" }}>
                  <Link to="/KidneyForm" style={{ color: "black" }}>
                    Kidney
                  </Link>
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <span style={{ color: "black" }}>
                  <Link to="/MalariaForm" style={{ color: "black" }}>
                    Malaria
                  </Link>
                </span>
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="#">
                <span style={{ color: "black" }}>
                  <Link to="/PneumoniaForm" style={{ color: "black" }}>
                    Pneumonia
                  </Link>
                </span>
              </a>
            </li>
          </ul>
        </li>
      </div>
      <form class="d-flex">
        <button
          class="btn btn-outline-light"
          type="submit"
          placeholder="Get your report mailed"
          aria-label="Get your report mailed"
        >
          Get your report mailed
        </button>
      </form>
    </nav>
  );
}
