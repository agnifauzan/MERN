import React from "react";
import { render } from "@testing-library/react";
import Breadcrumb from "../Breadcrumb/index";
import { BrowserRouter as Router } from "react-router-dom";

const setup = () => {
  const breadcrumbList = [
    { pageTitle: "Home", pageHref: "" },
    { pageTitle: "House Details", pageHref: "" },
  ];

  const { container } = render(
    <Router>
      <Breadcrumb data={breadcrumbList} />
    </Router>
  );
  const breadcrumb = container.querySelector(`.breadcrumb`);
  return {
    breadcrumb,
  };
};

test("should have ol with className .Breadcrumb and have text Home & House Details", () => {
  const { breadcrumb } = setup();

  expect(breadcrumb).toBeInTheDocument();
  expect(breadcrumb).toHaveTextContent("Home");
  expect(breadcrumb).toHaveTextContent("House Details");
});
