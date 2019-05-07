import React, { Component } from "react";
import { foodCategories } from "./CategoriesList";
import { Link } from "react-router-dom";

export default class Categories extends Component {
  render() {
    return (
      <div className="py-5">
        <div className="container">
          <h1 className="text-align-center">Categories</h1>
          <ul>
            <div className="row">
              <li>
                <div className="card-deck mb-3 text-center">
                  <Link to="/meals">
                    <h2>Breakfast</h2>
                    <img src="https://picsum.photos/250/250/" />
                  </Link>
                </div>
              </li>
              <li>
                <div className="card-deck mb-3 text-center">
                  <Link to="/meals">
                    <h2>Breakfast</h2>
                    <img src="https://picsum.photos/250/250/" />
                  </Link>
                </div>
              </li>
              <li>
                <div className="card-deck mb-3 text-center">
                  <Link to="/meals">
                    <h2>Breakfast</h2>
                    <img src="https://picsum.photos/250/250/" />
                  </Link>
                </div>
              </li>
            </div>
            <div className="row">
              <li>
                <div className="card-deck mb-3 text-center">
                  <Link to="/meals">
                    <h2>Breakfast</h2>
                    <img src="https://picsum.photos/250/250/" />
                  </Link>
                </div>
              </li>
              <li>
                <div className="card-deck mb-3 text-center">
                  <Link to="/meals">
                    <h2>Breakfast</h2>
                    <img src="https://picsum.photos/250/250/" />
                  </Link>
                </div>
              </li>
              <li>
                <div className="card-deck mb-3 text-center">
                  <Link to="/meals">
                    <h2>Breakfast</h2>
                    <img src="https://picsum.photos/250/250/" />
                  </Link>
                </div>
              </li>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}
