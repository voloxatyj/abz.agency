import React, { Component } from "react";
import { ButtonContainer } from "./components";
import logo from "../logo/abz.png";
import mail from "../icons/mail.svg";
import phone from "../icons/phone.svg";
import cellphone from "../icons/cellphone.svg";
import fb from "../icons/facebook.svg";
import linkedin from "../icons/linkedin.svg";
import instagram from "../icons/instagram.svg";
import twitter from "../icons/twitter.svg";
import pinterest from "../icons/pinterest.svg";

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      phone: "",
      name: "",
      hasAgreedName: false,
      hasAgreedEmail: false,
      hasAgreedPhone: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    if (value.length > 4 && name === "name") {
      this.setState({
        hasAgreedName: true
      });
    } else {
      this.setState({
        hasAgreedName: false
      });
    }
    if (value.length > 11 && name === "phone") {
      this.setState({
        hasAgreedPhone: true
      });
    } else {
      this.setState({
        hasAgreedPhone: false
      });
    }
    emailRegex.test(value)
      ? this.setState({
          hasAgreedEmail: true
        })
      : this.setState({
          hasAgreedEmail: false
        });

    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    e.preventDefault();

    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }
  render() {
    return (
      <React.Fragment>
        <div className='signUpContainer pt-5'>
          <div className='signUpContainer d-flex justify-content-center'>
            <h1 className='bd-highlight'>Register to get a work</h1>
            <h4 className='p-3 bd-highlight mt-5'>
              Attention! After successful registration and alert, update the
              list of users in the block from the top
            </h4>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div className='group row mx-auto'>
              <div className='col-sm-4'>
                <span className='title'>Name</span>
                <input
                  type='text'
                  name='name'
                  value={this.state.name}
                  onChange={this.handleChange}
                  className={
                    this.state.hasAgreedName === false
                      ? "form-control form-control-lg text-dark is-invalid"
                      : "form-control form-control-lg text-dark is-valid"
                  }
                  id='name'
                  placeholder='Your name'
                />
                {this.state.hasAgreedName === false ? (
                  <div className='invalid-feedback d-flex justify-content-center'>
                    you need more characters
                  </div>
                ) : (
                  <div className='valid-feedback d-flex justify-content-center'>
                    Looks good!
                  </div>
                )}
              </div>
              <div className='col-sm-4'>
                <span className='title'>Email</span>
                <input
                  type='email'
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChange}
                  className={
                    this.state.hasAgreedEmail === false
                      ? "form-control form-control-lg text-dark is-invalid"
                      : "form-control form-control-lg text-dark is-valid"
                  }
                  id='colFormLabelLg'
                  placeholder='Your email'
                />
                {this.state.hasAgreedEmail === false ? (
                  <div className='invalid-feedback d-flex justify-content-center'>
                    don’t forget about doggy, it’s important
                  </div>
                ) : (
                  <div className='valid-feedback d-flex justify-content-center'>
                    Alright!
                  </div>
                )}
              </div>
              <div className='col-sm-4'>
                <span className='title'>Phone</span>
                <input
                  type='number'
                  name='phone'
                  value={this.state.phone}
                  onChange={this.handleChange}
                  className={
                    this.state.hasAgreedPhone === false
                      ? "form-control form-control-lg text-dark is-invalid"
                      : "form-control form-control-lg text-dark is-valid"
                  }
                  id='colFormLabelLg'
                  placeholder='+38( _ _ _ ) _ _ _  _ _  _ _'
                />
                {this.state.hasAgreedPhone === false ? (
                  <div className='invalid-feedback d-flex justify-content-center'>
                    must be more numbers and don’t forget start with `+`
                  </div>
                ) : (
                  <div className='valid-feedback d-flex justify-content-center'>
                    Okay!
                  </div>
                )}
              </div>
            </div>
            <div className='group row mx-auto'>
              <select className='col-sm form-control-lg'>
                <option>Select your position</option>
                <option>trainee/junior</option>
                <option>middle</option>
                <option>senior</option>
              </select>
              <div className='load-group col-sm'>
                <div className='d-inline-flex'>
                  <input
                    type='photo'
                    className='input form-control form-control-lg text-dark'
                    id='colFormLabelLg'
                    placeholder='Upload your photo'
                  />
                  <ButtonContainer>Upload</ButtonContainer>
                </div>
                <small id='helper' className='form-text text-muted'>
                  File format jpg up to 5 MB, the minimum size of 70x70px
                </small>
              </div>
            </div>
            <div className='buttonContainer d-flex justify-content-center'>
              <ButtonContainer>SignUp</ButtonContainer>
            </div>
          </form>
        </div>
        <div className='footerContainer mt-3'>
          <nav className='navbar-icons navbar-expand-lg  d-inline-flex justify-content-around align-items-center pt-1 pb-1'>
            <a
              className='navbar-brand-logo pl-4 d-inline-flex align-items-start mt-2 ml-3'
              href='#'>
              <img src={logo} width='30' height='30' alt='logo' />
              <h4 className='text-white p-1'>abz.agency</h4>
            </a>
            <div className='containerContacts d-flex mr-4 justify-content-around'>
              <a className='navbar-brand-icons' href='#'>
                <h5>About me</h5>
              </a>
              <a className='navbar-brand-icons' href='#'>
                <h5>Relationships</h5>
              </a>
              <a className='navbar-brand-icons' href='#'>
                <h5>Requirements</h5>
              </a>
              <a className='navbar-brand-icons' href='#'>
                <h5>Users</h5>
              </a>
              <a className='navbar-brand-icons' href='#'>
                <h5>Sign Up</h5>
              </a>
            </div>
          </nav>
          <div className='footer d-inline-flex justify-content-center'>
            <div className='footerContacts d-grid mt-3'>
              <div className='mail d-inline-flex p-3 ml-4'>
                <img src={mail} alt='mail' />
                <h4 className='pl-2 mt-2'>work.of.future@gmail.com</h4>
              </div>
              <div className='phone d-inline-flex p-3 ml-4'>
                <img src={phone} alt='phone' />
                <h4 className='pl-2 mt-2'>+38 (050) 789 24 98</h4>
              </div>
              <div className='cellphone d-inline-flex p-3 ml-4'>
                <img src={cellphone} alt='cellphone' />
                <h4 className='pl-2 mt-2'>+38 (095) 556 08 45</h4>
              </div>
            </div>
            <div className='linkOnSite d-flex p-1 mt-4 mr-4'>
              <div className='col-6 col-md-3'>
                <h5>News</h5>
                <h5>Blog</h5>
                <h5>Partners</h5>
                <h5>Shop</h5>
              </div>
              <div className='col-6 col-md-3'>
                <h5>Overview</h5>
                <h5>Design</h5>
                <h5>Code</h5>
                <h5>Collaborate</h5>
              </div>
              <div className='col-6 col-md-3'>
                <h5>Tutorials</h5>
                <h5>Resources</h5>
                <h5>Guides</h5>
                <h5>Examples</h5>
              </div>
              <div className='col-6 col-md-3'>
                <h5>FAQ</h5>
                <h5>Terms</h5>
                <h5>Conditions</h5>
                <h5>Help</h5>
              </div>
            </div>
          </div>
          <div className='info d-flex mb-5 align-content-center'>
            <p className='p2 p-2 ml-4'>
              <i className='far fa-copyright'>
                abz.agency specially for the test task
              </i>
            </p>
            <div className='infoIcons d-flex justify-content-around mr-4'>
              <img
                src={fb}
                width='30'
                height='30'
                alt='facebook'
                className='icons'
              />
              <img
                src={linkedin}
                width='30'
                height='30'
                alt='linkedin'
                className='icons'
              />
              <img
                src={instagram}
                width='30'
                height='30'
                alt='instagram'
                className='icons'
              />
              <img
                src={twitter}
                width='30'
                height='30'
                alt='twitter'
                className='icons'
              />
              <img
                src={pinterest}
                width='30'
                height='30'
                alt='pinterest'
                className='icons'
              />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SignUp;
