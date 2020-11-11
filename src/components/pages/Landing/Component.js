import React from 'react';
import { Canvas } from '../../layouts';
import { SearchPanel } from '../../common/';
import { PlotlyCard } from '../../common';
import CardContainer from '../../common/CardContainer';
import '../../../styles/LandingPage.less';

// these functions are acting as jsx return statements, can be compartmentalized later.
function titleContainer() {
  return <div></div>;
}
function title() {
  return (
    <div className="landing-container">
      <div className="title">
        {' '}
        Welcome To Citrics <br></br> City Comparison
        <SearchPanel />
      </div>

      <h3>Popular Comparisons:</h3>
      <section>
        <div className="pop-item">
          <div className="pop-pic">
            <img
              src="https://cdn.pixabay.com/photo/2016/11/22/19/17/architecture-1850129_1280.jpg"
              alt="New York City"
            />
          </div>
          <p>New York, NY</p>
          {/* <CardContainer Card={PlotlyCard} /> */}
        </div>
        <div className="vs">VS</div>
        <div className="pop-item">
          <div className="pop-pic">
            <img
              src="https://cdn.pixabay.com/photo/2015/06/11/00/23/los-angeles-805393__480.jpg"
              alt="Los Angeles"
            />
          </div>
          <p>Los Angeles, CA</p>
          {/* <CardContainer Card={PlotlyCard} /> */}
        </div>
        <div className="break"></div>
        <div className="pop-item">
          <div className="pop-pic">
            <img
              src="https://cdn.pixabay.com/photo/2015/05/14/17/27/denver-767050_1280.jpg"
              alt="Denver"
            />
          </div>
          <p>Denver, CO</p>
          {/* <CardContainer Card={PlotlyCard} /> */}
        </div>
        <div className="vs">VS</div>
        <div className="pop-item">
          <div className="pop-pic">
            <img
              src="https://cdn.pixabay.com/photo/2015/08/01/13/47/seattle-870282_1280.jpg"
              alt="Seattle"
            />
          </div>
          <p>Seattle, WA</p>
          {/* <CardContainer Card={PlotlyCard} /> */}
        </div>
      </section>

      <div className="info">
        Citrics is a tool that allows you to easily compare cities across the
        United States. What you choose to compare them by is completely up to
        you, simply apply the preferences or filters you prefer.
        <br></br>When you create an account with Citrics, you will have the
        ability to save your preferences and favorite cities to pick up where
        you left off. <br></br>Add your home city to your profile and share with
        your contacts! Citrics is constantly evolving to add more detailed
        breakdowns of cities, and will soon offer international locations.
      </div>
    </div>
  );
}

export default ({ styles }) => (
  // <Canvas Side={[SearchPanel, title]} Main={titleContainer} />
  <Canvas Main={title} />
);
