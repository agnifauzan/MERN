import React, { Component } from "react";

import landingPage from "../json/landingPage.json";

import Header from "../parts/header";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";
import Categories from "../parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "../parts/Footer";

export default class landingpage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
  }
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }
  render() {
    return (
      <>
        {/* menerima semua props yg ada */}
        <Header {...this.props}></Header>
        <Hero refMostPicked={this.refMostPicked} data={landingPage.hero}></Hero>
        <MostPicked
          data={landingPage.mostPicked}
          refMostPicked={this.refMostPicked}
        ></MostPicked>
        <Categories data={landingPage.categories} />
        <Testimony data={landingPage.testimonial}></Testimony>

        <Footer />
      </>
    );
  }
}
