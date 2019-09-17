import React, { Component } from "react";
import { ButtonContainer } from "./components";

class Users extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      buttonAppearance: false
    };
  }
  fetchData = () => {
    let currentComponent = this;
    fetch(
      "https://frontend-test-assignment-api.abz.agency/api/v1/users?page=1&count=5"
    )
      .then(response => {
        return response.json();
      })
      .then(data => {
        console.log(data.users);
        console.log("process success response");
        currentComponent.setState({
          users: data.users,
          buttonAppearance: true
        });
      });
  };
  render() {
    return (
      <div className='usersContainer mt-5 mx-auto p-4'>
        <div className='usersMain d-flex justify-content-center pt-5'>
          <h1 className='p-2 bd-highlight'>Our cheerful users</h1>
          <h4 className='pt-5 bd-highlight mt-5'>
            Attention! Sorting users by registration date
          </h4>
        </div>
        <div className='usersMembers '>
          <div className='usersRow d-grid'>
            <div className='col-sm-6 d-inline-flex p-4'>
              <img src='imgs/user-noah-2x.jpg' className='usersImg' />
              <div className='usersInfo ml-1 mt-4'>
                <h3>Noah</h3>
                <p className='p2'>
                  Leading specialist of the Control Department
                  <br />
                  noah.controldepartment@gmail.com
                  <br />
                  +38 (050) 678 03 24
                </p>
              </div>
            </div>
            <div className='col-sm-6 d-inline-flex p-4'>
              <img src='imgs/user-adolph-2x.png' className='usersImg' />
              <div className='usersInfo ml-1 mt-4 '>
                <h3>Adolph Baine Charles David Earl</h3>
                <p className='p2'>
                  The contextual advertising specialist
                  <br />
                  adolph.blainecharles-davidearl@gmail.com
                  <br />
                  +38 (095) 556 08 45
                </p>
              </div>
            </div>
            <div className='col-sm-6 d-inline-flex p-4'>
              <img src='imgs/user-liam-2x.jpg' className='usersImg' />
              <div className='usersInfo ml-1 mt-4 '>
                <h3>Liamgrieescasey Smith Wiam</h3>
                <p className='p2'>
                  Lead designer
                  <br />
                  liamgrievescasey@example.com
                  <br />
                  +38 (050) 273 93 32
                </p>
              </div>
            </div>
            <div className='col-sm-6 d-inline-flex p-4'>
              <img src='imgs/user-elizabeth-2x.jpg' className='usersImg' />
              <div className='usersInfo ml-1 mt-4 '>
                <h3>Elizabet</h3>
                <p className='p2'>
                  Frontend developer
                  <br />
                  elisabet.frontend@gmail.com
                  <br />
                  +38 (095) 924 66 37
                </p>
              </div>
            </div>
            <div className='col-sm-6 d-inline-flex p-4'>
              <img src='imgs/user-alexander-2x.jpg' className='usersImg' />
              <div className='usersInfo ml-1 mt-4 '>
                <h3>Alexander</h3>
                <p className='p2'>
                  Backend developer
                  <br />
                  alexander.backend@gmail.com
                  <br />
                  +38 (050) 789 24 09
                </p>
              </div>
            </div>
            <div className='col-sm-6 d-inline-flex p-4'>
              <img src='imgs/user-mason-2x.jpg' className='usersImg' />
              <div className='usersInfo ml-1 mt-4'>
                <h3>Mason</h3>
                <p className='p2'>
                  QA
                  <br />
                  mason.qa@gmail.com
                  <br />
                  +38 (095) 283 27 00
                </p>
              </div>
            </div>
            {this.state.buttonAppearance === false ? (
              <ButtonContainer onClick={this.fetchData}>
                Show more
              </ButtonContainer>
            ) : (
              this.state.users.map(item => {
                return (
                  <div className='col-sm-6 d-inline-flex p-4' key={item.id}>
                    <img src={item.photo} className='usersImg' />
                    <div className='usersInfo ml-1 mt-4 '>
                      <h3>{item.name}</h3>
                      <p className='p2'>
                        {item.position}
                        <br />
                        {item.email}
                        <br />
                        {item.phone}
                      </p>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Users;
