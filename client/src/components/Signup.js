import React, { Component } from "react";
import styled from "styled-components";
import iziToast from "izitoast";

export default class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Email: "",
      Password: "",
      Passwordc: ""
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangePasswordc = this.onChangePasswordc.bind(this);

    this.onSignUp = this.onSignUp.bind(this);
  }

  validateForm() {
    return (
      this.state.email.length > 0 &&
      this.state.password.length > 6 &&
      this.state.password === this.state.confirmPassword
    );
  }

  onChangeEmail(event) {
    this.setState({
      Email: event.target.value
    });
  }

  onChangePassword(event) {
    this.setState({
      Password: event.target.value
    });
  }

  onChangePasswordc(event) {
    this.setState({
      Passwordc: event.target.value
    });
  }

  onSignUp() {
    const { Email, Password, Passwordc } = this.state;

    fetch("https://tri8-api.herokuapp.com/api/v1/auth", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: Email,
        password: Password,
        passwordc: Passwordc
      })
    })
      .then(res => res.json())
      .then(json => {
        let message = json;
        // console.log("json", json);
        let errors = message.errors.full_messages;
        let er1 = errors[1];
        let er2 = errors[2];
        iziToast.show({
          theme: "light",
          title: "Error",
          message: er1 || er2,
          position: "topCenter",
          color: "red",
          backgroundColor: "white",
          timeout: 5000
        });
      });
  }

  render() {
    const { Email, Password, Passwordc } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <h1 className="h3 mb-3 font-weight-normal text-capitalize">
              Sign Up
            </h1>
            <Form className="form-signup">
              <input
                className="form-control"
                type="email"
                label="Email"
                placeholder="email@email.com"
                value={Email}
                onChange={this.onChangeEmail}
                required
                autoFocus
              />
              <input
                className="form-control"
                type="password"
                label="Password"
                onChange={this.onChangePassword}
                value={Password}
                required
              />
              <input
                className="form-control"
                type="password"
                label="Confirm Password"
                value={Passwordc}
                onChange={this.onChangePasswordc}
                required
              />
              <button
                class="btn btn-m btn-primary btn-block"
                type="submit"
                onClick={this.onSignUp}
              >
                Sign Up
              </button>
            </Form>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const Form = styled.form`
  height: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  background: var(--mainWhite);

  .form-signup {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
  .form-signup input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signup input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  .form-signin .form-control {
    position: relative;
    box-sizing: border-box;
    height: auto;
    padding: 10px;
    font-size: 16px;
  }
`;
