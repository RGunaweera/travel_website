import React from "react";
import { Button } from "./Button";
import "./HeroSection.css";
import "../App.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="/videos/beach2.mp4" autoPlay loop muted />
      <div className="home-card">
        
            <h1>ADVENTURE AWAITS...</h1>
            <p>Book Your Holiday</p>

            <div className="hero-btns">
            <Button
                className="btns"
                buttonStyle="btn--outline"
                buttonSize="btn--large"
            >
                GET STARTED
            </Button>
            <Button
                className="btns"
                buttonStyle="btn--primary"
                buttonSize="btn--large"
            >
                WATCH TRAILER  <i className="fa fa-play-circle" />
            </Button>
            
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
