import React from "react";
import ImageHero from "../assets/images/img-hero.jpg";
import IconHotel from "../assets/images/icons/icon-hotel.svg";
import IconBeach from "../assets/images/icons/icon-beach.svg";
import IconTreasure from "../assets/images/icons/icon-treasure.svg";
import numberFormat from "../utils/formatNumber";
import Fade from "react-reveal/Fade";

import Button from "../elements/Button";
export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <Fade bottom>
      <section className="container pt-4">
        <div className="row align-items-center">
          <div className="col-6 pr-5" style={{ height: "auto", width: 410 }}>
            <h1 className="font-weight-bold line-height-1 mb-3">
              Vacation, beach and lodging
              <span style={{ color: "orange", fontSize: "35px" }}>.</span>
            </h1>
            <p
              className="mb-4 font-weight-light text-gray-500 w-75"
              style={{ lineHeight: "170%" }}
            >
              Let's take a vacation with my beloved family. Use your time
              valuable for smile and have fun.
            </p>
            <Button
              className="btn px-5"
              isPrimary
              hasShadow
              onClick={showMostPicked}
            >
              Show Me Now
            </Button>
            <div className="row " style={{ marginTop: 80 }}>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36"
                  height="36"
                  src={IconHotel}
                  alt={`${props.data.hotels} hotels`}
                ></img>
                <h6 className="mt-3">
                  {numberFormat(props.data.hotels)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Hotels
                  </span>
                </h6>
              </div>
              <div className="col-auto" style={{ marginRight: 35 }}>
                <img
                  width="36"
                  height="36"
                  src={IconBeach}
                  alt={`${props.data.beach} beach`}
                ></img>
                <h6 className="mt-3">
                  {numberFormat(props.data.beach)}{" "}
                  <span className="text-gray-500 font-weight-light">Beach</span>
                </h6>
              </div>
              <div className="col-auto">
                <img
                  width="36"
                  height="36"
                  src={IconTreasure}
                  alt={`${props.data.treasures} Treasure`}
                ></img>
                <h6 className="mt-3">
                  {numberFormat(props.data.treasures)}{" "}
                  <span className="text-gray-500 font-weight-light">
                    Treasure
                  </span>
                </h6>
              </div>
            </div>
          </div>
          <div className="col-6 pl-5" style={{ height: "auto", width: 410 }}>
            <div>
              <img
                style={{ borderRadius: 10 }}
                width="100%"
                height="410px"
                src={ImageHero}
                alt="room with house"
              />
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
