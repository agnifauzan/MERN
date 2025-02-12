import React from "react";

import Fade from "react-reveal/Fade";

import Star from "../elements/Star";
import Button from "../elements/Button";

export default function Testimony({ data }) {
  return (
    <Fade bottom>
      <section className="container">
        <div
          className="row align-items-center"
          style={{ justifyContent: "center" }}
        >
          <div className="col-auto" style={{ marginRight: 70 }}>
            <div
              className="testimonial-hero"
              style={{ margin: `30px 0 0 30px` }}
            >
              <img
                src={data.imageUrl}
                alt="Testimonial"
                className="position-absolute"
                style={{ zIndex: 1 }}
              />
            </div>
          </div>
          <div className="col-6" style={{ marginLeft: 20 }}>
            <h4 style={{ marginBottom: 40 }}>{data.name}</h4>
            <Star value={data.rate} width={40} height={40} spacing={4} />
            <h5 className="h2 font-weight-light line-height-2 my-3">
              {data.content}
            </h5>
            <span className="text-gray-500">
              {data.familyName}, {data.familyOccupation}
            </span>
            <div>
              <Button
                className="btn px-5"
                style={{ marginTop: 40 }}
                hasShadow
                isPrimary
                type="link"
                href={`/testimonial/${data._id}`}
              >
                Read story
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Fade>
  );
}
