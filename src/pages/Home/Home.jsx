import React from "react";
import "./Home.scss";
import cover from "../../images/articMonkeys.jpg";
const Home = () => {
  return (
    <main id="home">
      <div className="homePremium">
        <div className="content">
          <div className="text">
            <h1>spotify premium</h1>
            <h2>Get 3 months of Premium for free</h2>
            <p>
              Enjoy ad-free music listening, offline playback, and more. Cancel
              anytime.
            </p>
            <button>get 3 months free</button>
          </div>
          <div className="image">
            <img src={cover} alt="artic monkeys" />
          </div>
        </div>
      </div>
      <div className="homeFree">
        <div className="content">
          <h1>spotify free</h1>
          <h2>Listening is everything</h2>
          <p>Millions of songs and podcasts. No credit card needed.</p>
          <button>get spotify free</button>
        </div>
      </div>
    </main>
  );
};

export default Home;
