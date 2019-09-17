import React, { Component } from "react";

class AboutMe extends Component {
  render() {
    return (
      <div className='AboutMe d-flex justify-content-center '>
        <h1>Let’s get acquainted</h1>
        <div className='mainContainer'>
          <div className='d-flex flex-row bd-highlight justify-content-around m-5 p-3'>
            <img
              src='/imgs/man-mobile.svg'
              alt='logo'
              className='p-2 bd-highlight'
            />
            <div className='mainTextAboutMe p-2 bd-highlight'>
              <h4>I am cool frontend developer</h4>
              <h5>
                When real users have a slow experience on mobile, they're much
                less likely to find what they are looking for or purchase from
                you in the future. For many sites this equates to a huge missed
                opportunity, especially when more than half of visits are
                abandoned if a mobile page takes over 3 seconds to load
              </h5>
              <br />
              <h5>
                Last week, Google Search and Ads teams announced two new speed
                initiatives to help improve user-experience on the web.
              </h5>
              <br />
              <h4 className='signUpAboutMe'>Sign Up</h4>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMe;
