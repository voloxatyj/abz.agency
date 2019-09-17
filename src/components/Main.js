import React, { Component } from "react";
import { ButtonContainer } from "./components";
import background from "../imgs/bg-1.jpg";

class Main extends Component {
  render() {
    return (
      <div className='main d-sm-flex justify-content-center'>
        <img src={background} className='img-fluid' alt='background' />
        <div className='mainText d-flex flex-column bd-highlight ml-5 p-3'>
          <div className='textMain bd-highlight'>
            <h1>Test assignment for Frontend Developer position</h1>
            <p>
              We kindly remind you that your test assignment should be submitted
              as a link ti github/bitbucket repository. Please be patient, we
              consider and respond to every application that meets minimum
              requirements. We look forward to your submission. Good Luck!
            </p>
            <ButtonContainer>
              <h3 className='signUp'>Sign Up</h3>
            </ButtonContainer>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
