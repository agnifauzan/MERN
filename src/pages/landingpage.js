import React, { Component } from "react";
import Header from "../parts/header";

export default class landingpage extends Component {
  render() {
    return (
      <>
        {/* menerima semua props yg ada */}
        <Header {...this.props}></Header>
      </>
    );
  }
}
