import React, { Component } from "react";
import { MealsConsumer } from "../context";
import { Link } from "react-router-dom";
import { Button } from "./Button";
export default class Details extends Component {
  render() {
    return (
      <MealsConsumer>
        {value => {
          const { id, title, img, info, price, inCart } = value.mealDetail;
          return (
            <div className="container py-5">
              {/* start title */}
              <div className="row">
                <div className="col-10 mx-auto text-center text-slanted text-red my-5">
                  <h1>{title}</h1>
                </div>
              </div>
              {/* end title */}
              {/* product info */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <img src={img} className="img-fluid" alt="meal" />
                </div>
              </div>
              {/* product text */}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h2>Desc:{title}</h2>
                  <h4 className="test-title text-uppercase text-muted mt-3 mb-2">
                    <strong>
                      price: <span>KSH</span>
                      {price}
                    </strong>
                  </h4>
                  <div className="text-capitalize fint-weight-bold mt-3 mb-0">
                    {info}
                  </div>
                  <div>
                    <Link to="/">
                      <Button>Back to Meals</Button>
                    </Link>

                    <Button
                      disabled={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </MealsConsumer>
    );
  }
}
