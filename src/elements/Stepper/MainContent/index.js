import React from "react";
import Fade from "react-reveral-Fade";

export default function MainContent({ data, current }) {
  return <Fade>{data[current] && data[current].content}</Fade>;
}
