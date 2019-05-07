import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import styled from "styled-components";

export default class Navbar extends Component {
  render() {
    return (
      <Nav className="navbar navbar-expand-sm  navbar-dark px-sm-5">
        <Link to="/">
          <i className="fas fa-home" />
        </Link>
        <ul className="navbar-nav align-items-center">
          <li className="nav-item ml-5">
            <Link to="/meals" className="nav-link">
              Meals
            </Link>
          </li>
          <li>
            <Link to="/signin" className="nav-link">
              Sign In
            </Link>
          </li>
          <li>
            <Link to="/signup" className="nav-link">
              Sign Up
            </Link>
          </li>
        </ul>
        <Link to="/cart" className="ml-auto">
          <Button>
            <span className="mr-2">
              <i className="fas fa-cart-plus" />
            </span>
            My Orders
          </Button>
        </Link>
      </Nav>
    );
  }
}

const Nav = styled.nav`
  background: var(--mainBlack);
  .nav-link{
    color: var{--mainWhite}!important;
    font-size:1.1rem;
  }
`;
