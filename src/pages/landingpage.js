import React, { Component } from "react";
import Header from "../parts/header";
import landingPage from "../json/landingPage.json";
import Hero from "../parts/Hero";
import MostPicked from "../parts/MostPicked";
import Categories from "../parts/Categories";

export default class landingpage extends Component {
  constructor(props) {
    super(props);
    this.refMostPicked = React.createRef();
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
      </>
    );
  }
}
