import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuSidebar: false,
      user: []
    };
  }
  componentDidMount() {
    this.fetchData();
  }
  fetchData() {
    fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users/1")
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data);
        if (data.success) {
          this.setState({
            user: data.user
          });
        } else {
          console.log("proccess server errors");
        }
      });
  }
  render() {
    return (
      <React.Fragment>
        <nav className='navbar navbar-expand-sm align-items-center fixed-top justify-content-around'>
          <Link to='/' className='nav-link-logo p-4'>
            <img
              src='logo/logo.svg'
              alt='logo'
              className='navbar-brand-logo-title'
            />
          </Link>
          <ul className='navbar-nav align-items-center mt-3  ml-auto'>
            <li className='nav-item'>
              <Link to='/aboutMe' className='nav-link'>
                <h4>About Me</h4>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/relationships' className='nav-link'>
                <h4>Relationships</h4>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/requirements' className='nav-link'>
                <h4>Requirements</h4>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/users' className='nav-link'>
                <h4>Users</h4>
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/signUp' className='nav-link'>
                <h4>Sign Up</h4>
              </Link>
            </li>
          </ul>
          <Link to='/signUp' className='ml-auto '>
            <div className='text-logo d-inline-flex ml-auto justify-content-end'>
              <div className='text-logo-text d-flex justify-content-end align-items-center'>
                <h4>{this.state.user.name}</h4>
                <p>{this.state.user.email}</p>
              </div>
              <img
                src={this.state.user.photo}
                alt='superstar'
                className='photos ml-2'
              />
              <img src='icons/sign-out.svg' className='ml-3' />
            </div>
          </Link>
          <div className='align-items-center mr-1'>
            <img
              src='icons/line-menu.svg'
              alt='menu'
              className='icon-menu p-auto'
              onClick={() =>
                this.setState({
                  menuSidebar: true
                })
              }
            />
          </div>
        </nav>
        {this.state.menuSidebar ? (
          <div className='sidebar'>
            <div className='sidebar-heading'>
              <div className='menuSidebar d-flex justify-content-around'>
                <img
                  src={this.state.user.photo}
                  alt='superstar'
                  className='photos'
                />
                <i
                  className='far fa-times-circle'
                  onClick={() => {
                    this.setState({
                      menuSidebar: false
                    });
                  }}></i>
              </div>
              <div className='superstar d-grid p-2 ml-4 mb-5'>
                <h4 className='mt-2 mb-0'>{this.state.user.name}</h4>
                <p>{this.state.user.email}</p>
              </div>
              <span className='border-bottom-lg border-dark'></span>
            </div>
            <div className='list-group d-flex flex-column p-2 ml-4 text-left justify-content-start'>
              <a href='#'>
                <h4>About Me</h4>
              </a>
              <a href='#'>
                <h4>Relationships</h4>
              </a>
              <a href='#'>
                <h4>Requirements</h4>
              </a>
              <a href='#'>
                <h4>Users</h4>
              </a>
              <a href='#'>
                <h4>Sign Up</h4>
              </a>
            </div>
          </div>
        ) : (
          console.log("not in time")
        )}
      </React.Fragment>
    );
  }
}

export default Navbar;
