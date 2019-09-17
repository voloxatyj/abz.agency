import React, { Component } from "react";
import background2 from "../imgs/bg-2.jpg";
import laptopMan from "../imgs/man-laptop-v1.svg";

class Requirements extends Component {
  render() {
    return (
      <div className='RequirementsContainer d-flex justify-content-center text-center'>
        <img src={background2} className='img' alt='background' />
        <h1>General requirements for the test task</h1>
        <div className='RequirementsContainerText p-5'>
          <div className='col p-5'>
            <p className='mt-3'>
              Users want to find answers to their questions quickly and data
              shows that people really care about how quickly their pages load.
              The Search team announced speed would be ranking signal for
              desktop searches in 2010 and as of this month (July 2018), page
              speed will be a ranking factor for mobile searches too.
              <br />
              <br />
              If you’re a developer working on a site, now is a good time to
              evaluate your performance using our speed tools. Think about how
              performance affects the user experience of your pages and consider
              measuring a variety of real-world user-centric performance
              metrics.
              <br />
              <br />
              Are you shipping too much JavaScript? Too many images? Images and
              JavaScript are the most significant contributors to the page
              weight that affect page load time based on data from HTTP Archive
              and the Chrome User Experience Report - our public dataset for key
              UX metrics as experienced by Chrome users under real-world
              conditions.
            </p>
          </div>
          <div className='col-image'>
            <img src={laptopMan} alt='logo' className='img' />
          </div>
        </div>
      </div>
    );
  }
}

export default Requirements;
