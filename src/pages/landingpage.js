import React, { Component } from "react";
import Header from "../parts/header";
import landingPage from "../json/landingPage.json";
import Hero from "../parts/Hero";

export default class landingpage extends Component {
  render() {
    return (
      <>
        {/* menerima semua props yg ada */}
        <Header {...this.props}></Header>
        <Hero data={landingPage.hero}></Hero>
      </>
    );
  }
}
