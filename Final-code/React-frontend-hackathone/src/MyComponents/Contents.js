import React, { useContext } from "react";
import "./Contents.css";

import { TransactionContext } from "../context/TransactionContext";

const Content = () => {

  const { connectWallet, currentAccount } = useContext(TransactionContext);



  // console.log(value);

  return (
    <div className="main-con">
      <div className="content">
        <div className="quote">
          <h3
            style={{
              fontWeight: "bold",
              fontStyle: "italic",
              animation: "animate 2s linear indefinite",
            }}
          >
            Effective use of technology is important to deliver healthcare.By
            leveraging technology, we can bring down lack of access and cost of
            healthcare.
          </h3>
        </div>
      </div>

      <div className="slider">
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <h4 style={{ textAlign: "center", fontWeight: "bold" }}>
                Details
              </h4>
              <br />
              <h6 style={{ textAlign: "center", fontSize: "20px" }}>
                Welcome to the home page of the app.This is mainly based on as
                the application of the machine learning,meant to be employed in
                the remote and the downtrodden area.
              </h6>
            </div>
            <div class="carousel-item">
              <h4 style={{ textAlign: "center", fontWeight: "bold" }}>
                Overview
              </h4>
              <br />
              <h6 style={{ textAlign: "center", fontSize: "20px" }}>
                In todays time we see a lot of the shortage of the doctors in
                the world especially in India.A lot of people are suffering a
                lot without the help of the proper medical checkup.Also most of
                the cases many cases arise leading to dealth due to lack of
                timely medical checkup So to cope up with all of those problems
                this app is designed which would prove its benefits upto much
                extent.
              </h6>
            </div>
            <div class="carousel-item">
              <h4 style={{ textAlign: "center", fontWeight: "bold" }}>
                Application
              </h4>
              <br />
              <h12 style={{ textAlign: "center", fontSize: "20px" }}>
                <ul style={{}}>To remove the dependencies on the doctors</ul>
                <ul>
                  To help out the poor and helpless people with the normal
                  medical checkup
                </ul>
                <ul>
                  To help people avoid paying huge amount to the doctors
                  unnecessarily
                </ul>
                <ul>
                  To extend the role of the technology in the medical field
                </ul>
              </h12>
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      {!currentAccount ? (
        <button className="btn1" type="button" onClick={connectWallet}>
          Connect Wallet
        </button>
      ) : (
        <p className="btn1">
          Connected!!
        </p>
      )
      }
    </div>
  );
};

export default Content;
