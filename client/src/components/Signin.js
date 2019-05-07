import React, { Component } from "react";
import iziToast from "izitoast";
import styled from "styled-components";

export default class Signin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Email: "",
      Password: ""
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.onSignIn = this.onSignIn.bind(this);
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.Password.length > 6;
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

  onSignIn() {
    const { Email, Password } = this.state;

    fetch("https://tri8-api.herokuapp.com/api/v1/auth/sign_in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: Email,
        password: Password
      })
    })
      .then(res => res.json())
      .then(json => {
        let message = json;
        let errors = message.errors;
        errors = errors.toString();
        iziToast.show({
          theme: "light",
          title: "Error",
          message: errors,
          position: "topCenter",
          color: "red",
          backgroundColor: "white",
          timeout: 5000
        });
      });
  }
  render() {
    const { Email, Password } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <h1 className="h3 mb-3 font-weight-normal text-capitalize">
              Sign In
            </h1>
            <Form className="form-signin">
              <label>Email Address</label>

              <input
                className="form-control"
                type="email"
                label="Email"
                placeholder="Email Address"
                value={Email}
                onChange={this.onChangeEmail}
                required
                autoFocus
              />
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                label="Password"
                onChange={this.onChangePassword}
                value={Password}
                placeholder="Password"
                required
              />
              <button
                class="btn btn-m btn-primary btn-block"
                type="submit"
                onClick={this.onSignIn}
              >
                Sign In
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

  .form-signin {
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
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
