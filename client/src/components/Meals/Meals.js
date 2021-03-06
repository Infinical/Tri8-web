import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { MealsConsumer } from "../../context";
import PropTypes from "prop-types";

export default class Meals extends Component {
  render() {
    const { id, title, img, inCart, price } = this.props.meals;
    return (
      <MealsWrap className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <MealsConsumer>
            {value => {
              return (
                <div
                  className="img-container p-5"
                  onClick={() => value.handleDetail(id)}
                >
                  <Link to="/details">
                    <img src={img} alt="Meals" className="card-img-top" />
                  </Link>
                  <button
                    className="card-btn"
                    disabled={inCart ? true : false}
                    onClick={() => {
                      value.addToCart(id);
                    }}
                  >
                    {inCart ? (
                      <p className="text-capitalize mb-0" disabled>
                        {" "}
                        inCart{" "}
                      </p>
                    ) : (
                      <i className="fas fa-cart-plus" />
                    )}
                  </button>
                </div>
              );
            }}
          </MealsConsumer>
          <div className="card-footer d-flex justify-content-between">
            <p className="align-self-center mb-0">{title}</p>
            <h5 className="text-red font-italic mb-0">
              <span className="mr-1">KSH{price}</span>
            </h5>
          </div>
        </div>
      </MealsWrap>
    );
  }
}

Meals.propTypes = {
  meal: PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    price: PropTypes.number,
    inCart: PropTypes.bool
  }).isRequired
};

const MealsWrap = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }
  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }
  .img-container {
    position: relative;
    overflow: hidden;
  }
  .img-container:hover .card-img-top{
    transform: scale(1.3)
  }
  .card-img-top{
    transition: all 1s linear;
  }
  .card-btn{
    position:absolute
    bottom: 0;
    right:0;
    padding: 0.2rem 0.4rem;
    background: var(--mainBlack);
    color:white;
    font-size: 1.4rem;
    border-radius: 0.6rem 0 0 0;
  }
`;
