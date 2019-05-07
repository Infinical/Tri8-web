import React, { Component } from "react";
import styled from "styled-components";
import img from "../assets/home.jpg";
import { Link } from "react-router-dom";
import Categories from "../components/Categories/Categories";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Header>
          <Section>
            <h1>Welcome to Tri-8</h1>
            <h5>ORDER ANYTIME ANYWHERE</h5>
            <Link to="/meals">
              <Button>ORDER FIRST MEAL</Button>
            </Link>
          </Section>
        </Header>
        <Categories />
      </div>
    );
  }
}

const Header = styled.header`
  background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.75),
      rgba(0, 0, 0, 0.09)
    ),
    url(${img});
  background-size: cover;
  height: 100vh;
  @media (max-width: 1000px) {
    height: 90vh;
  }
`;

const Section = styled.section`
  color: var(--mainRed);
  margin: 0 3%;
  position: absolute;
  top: 35%;
  font-size: 1.8vw;
  @media (max-width: 1000px) {
    top: 55%;
    font-size: 1.9vw;
  }
  @media (max-width: 800px) {
    top: 60%;
    font-size: 3.2vw;
    margin: 0 4em;
    text-align: center;
  }
`;
const Button = styled.button`
  font-size: 14px;
  letter-spacing: 1.9px;
  font-weight: 100;
  margin: 0.5em 0.5em 0.5em 0;
  padding: 12px 2em;
  color: var(--mainWhite);
  background-color: var(--mainRed);
  cursor: pointer;
  text-decoration: none;
  vertical-align: middle;
  font-family: Arial, sans-serif;
  border-radius: 2px;
  user-select: none;
  text-align: center;
  border: 0;
  &:hover {
    background-color: #e53935;
  }
`;
