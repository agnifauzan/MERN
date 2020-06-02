import React from "react";
import BrandIcon from "../parts/IconText";
import Button from "../elements/Button";

export default function Footer(props) {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-auto" style={{ width: 350, marginRight: 20 }}>
            <BrandIcon />
            <p className="brand-tagline">
              Let's take a vacation to the beach with your beloved family
            </p>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-3">For Beginers</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/register">
                  {" "}
                  New Acoount
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/proferties">
                  {" "}
                  Start Booking Room
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/Usepayment">
                  {" "}
                  Use Payment
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 mr-5">
            <h6 className="mt-3">Explore Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button type="link" href="/Career">
                  {" "}
                  Our Career{" "}
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/Privacy">
                  {" "}
                  Privacy{" "}
                </Button>
              </li>
              <li className="list-group-item">
                <Button type="link" href="/Term">
                  {" "}
                  Term{" "}
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-3">Connect Us</h6>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:agnifauzan@gmail.com"
                >
                  {" "}
                  agnifauzan@gmail.com
                </Button>
              </li>
              <li className="list-group-item">
                <Button isExternal type="link" href="tel:+6282123408038">
                  {" "}
                  0821-2340-8038
                </Button>
              </li>
              <li className="list-group-item">
                <span>Tasikmalaya, jawa barat</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col text-center copyrights">
            Copyright-2020 All rights reserved , HiBeach
          </div>
        </div>
      </div>
    </footer>
  );
}
