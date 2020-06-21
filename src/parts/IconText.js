import React from "react";

import Button from "../elements/Button";

export default function IconText() {
  return (
    <Button className="brand-text-icon" href="" type="link">
      Hi
      <span className="text-gray-900">
        Beach<span style={{ color: "orange", fontSize: "35px" }}>.</span>
      </span>
    </Button>
  );
}
