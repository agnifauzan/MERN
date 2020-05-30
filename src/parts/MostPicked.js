import React from "react";
import Button from "elements/Button";

export default function MostPicked(props) {
  return (
    <section className="container" ref={props.refMostPicked}>
      <h4 className="mb-3">
        <div className="text-gray-900">MostPicked</div>
      </h4>
      <div className="container-grid">
        {props.data.map((item, index) => {
          return (
            <div
              key={`mostpicked${index}`}
              className={`item column-4 ${index === 0 ? " row-2" : " row-1"}`}
            >
              <div className="card">
                <div className="card card-featured">
                  <div className="tag">
                    <span className="font-weight-700" style={{ fontSize: 18 }}>
                      ${item.price}{" "}
                    </span>
                    <span className="font-weight-light">/ {item.unit}</span>
                  </div>
                  <figure className="img-wrapper">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      className="img-cover"
                    />
                  </figure>
                  <div className="meta-wrapper">
                    <Button
                      type="link"
                      href={`properties/${item._id}`}
                      className="streched-link d-block text-white"
                    >
                      <h5>{item.name}</h5>
                    </Button>
                    <p className="tagP">
                      {item.city}, {item.country}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
