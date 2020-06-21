import React from "react";

import ReactHtmlParser from "react-html-parser";

import Fade from "react-reveal/Fade";

export default function PageDetailDescription({ data }) {
  return (
    <Fade bottom>
      <main>
        <h4>About The Place</h4>
        {ReactHtmlParser(data.description)}
        <div className="row" style={{ marginTop: 30 }}>
          {data.features.map((feature, index) => {
            return (
              <div
                key={`feature-${index}`}
                className="col-3"
                style={{ marginBottom: 20 }}
              >
                {/* `${index <= 3 ? * 1000 : 1000}` */}
                <Fade bottom delay={index * 200}>
                  <img
                    width="36"
                    className="d-block mb-2"
                    src={feature.imageUrl}
                    alt={feature.name}
                  />
                </Fade>

                <span>{feature.qty} </span>
                <span className="text-gray-500 font-weight-light">
                  {feature.name}
                </span>
              </div>
            );
          })}
        </div>
      </main>
    </Fade>
  );
}
