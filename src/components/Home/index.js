import React from "react";
import Benefits from "../Benefits";
import Header from "../Header";
import HomeBlock from "../HomeBlock";
import Roadmap from "../Roadmap";
import Welcome from "../Welcome";
import WelcomTwo from "../WelcomeTwo";
import Events from "../Events";
import "./index.scss";
import Company from "../Company";
import Network from "../Network";
import Wallets from "../Wallets";
import Team from "../Team";
import Charts from "../Charts";
import Miner from "../Miner";
import EventsTen from "../EventsTen";
import Donate from "../Donate";
import Footer from "../Footer";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <HomeBlock />
      <Welcome />
      <Benefits />
      <WelcomTwo />
      <Roadmap />
      <Events />
      <Company />
      <Network />
      <Wallets />
      <Team />
      <Charts />
      <Miner />
      <EventsTen />
      <Donate />
      <Footer />
    </div>
  );
};

export default Home;
