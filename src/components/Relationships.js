import React, { Component } from "react";

class Relationships extends Component {
  render() {
    return (
      <React.Fragment>
        <div className='titleSkills d-flex justify-content-center text-center'>
          <h1>
            About my relationships with
            <br /> web-development
          </h1>
        </div>
        <div className='titles d-grid mt-5'>
          <div className='row mr-auto ml-auto'>
            <div className='col-sm'>
              <img src='imgs/html.svg' logo='html' />
              <h4>I’m in love with HTML</h4>
              <h5>
                Hypertext Markup Language(HTML) is the standard markup language
                for creating web pages and web applications.
              </h5>
            </div>
            <div className='col-sm'>
              <img src='imgs/css.svg' logo='css' />
              <h4>CSS is my best friend</h4>
              <h5>
                Cascading Style Sheets(CSS) is a style sheet language used for
                describing the presentation of a document written in a markup
                language like HTML
              </h5>
            </div>
            <div className='col-sm'>
              <img src='imgs/javascript.svg' logo='javascript' />
              <h4>JavScript is my passion</h4>
              <h5>
                JavaScript is a high-level, interpreted programming language. It
                is a language which is also characterized as dynamic, weakly
                typed, prototype-based and multi-paradigm.
              </h5>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Relationships;
