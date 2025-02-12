import React, { Component } from "react";
import Fade from "react-reveal/Fade";

import Header from "../parts/Header";
import Button from "../elements/Button";

import Stepper, {
  Numbering,
  Meta,
  MainContent,
  Controller,
} from "../elements/Stepper";

import BookingInformation from "../parts/Checkout/BookingInformation";
import Payment from "../parts/Checkout/Payment";
import Completed from "../parts/Checkout/Completed";

import ItemDetails from "../json/itemDetails.json";

export default class Checkout extends Component {
  state = {
    data: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      proopPayment: "",
      bankName: "",
      bankHolder: "",
    },
  };

  onChange = (event) => {
    this.setState({
      data: {
        ...this.state.data,
        [event.target.name]: event.target.value,
      },
    });
  };

  componentDidMount() {
    window.scroll(0, 0);
  }
  render() {
    const { data } = this.state;

    const checkout = {
      duration: 2,
    };

    const steps = {
      bookingInformation: {
        title: "Booking Information",
        description: "Please fill up the blank fields bellow",
        content: (
          <BookingInformation
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },
      payment: {
        title: "Payment",
        description: "Kindly follow the instructions below",
        content: (
          <Payment
            data={data}
            checkout={checkout}
            ItemDetails={ItemDetails}
            onChange={this.onChange}
          />
        ),
      },
      completed: {
        title: "Booking Succes !",
        description: null,
        content: <Completed />,
      },
    };
    return (
      <>
        <Header isCentered />
        <Stepper steps={steps}>
          {/* console.log(steps={steps}) */}
          {(prevStep, nextStep, CurrentStep, steps) => (
            <>
              {/* console.log(steps) */}
              <Numbering
                data={steps}
                current={CurrentStep}
                style={{ marginBottom: 50 }}
              />
              <Meta data={steps} current={CurrentStep} />
              <MainContent data={steps} current={CurrentStep} />
              {CurrentStep === "bookingInformation" && (
                <Controller>
                  {data.firstName !== "" &&
                    data.lastName !== "" &&
                    data.email !== "" &&
                    data.phone !== "" && (
                      <Fade>
                        <Button
                          className="btn mb-3"
                          type="button"
                          isBlock
                          isPrimary
                          hasShadow
                          onClick={nextStep}
                        >
                          Continue to book
                        </Button>
                      </Fade>
                    )}
                  <Button
                    className="btn"
                    style={{ display: "flex", justifyContent: "center" }}
                    type="link"
                    isBlock
                    isLight
                    href={`/properties/${ItemDetails._id}`}
                    // href=""
                  >
                    Cancel
                  </Button>
                </Controller>
              )}
              {CurrentStep === "payment" && (
                <Fade>
                  <Controller>
                    {data.proopPayment !== "" &&
                      data.bankName !== "" &&
                      data.bankHolder !== "" && (
                        <Fade>
                          <Button
                            className="btn mb-3"
                            type="button"
                            isBlock
                            isPrimary
                            hasShadow
                            onClick={nextStep}
                          >
                            {" "}
                            Continue to book
                          </Button>
                        </Fade>
                      )}
                    <Button
                      className="btn"
                      type="button"
                      isBlock
                      isLight
                      onClick={prevStep}
                    >
                      Cancel
                    </Button>
                  </Controller>
                </Fade>
              )}
              {CurrentStep === "completed" && (
                <Controller>
                  <Button
                    className="btn"
                    type="link"
                    style={{ display: "flex", justifyContent: "center" }}
                    isBlock
                    isPrimary
                    hasShadow
                    href=""
                  >
                    Back to home
                  </Button>
                </Controller>
              )}
            </>
          )}
        </Stepper>
      </>
    );
  }
}
