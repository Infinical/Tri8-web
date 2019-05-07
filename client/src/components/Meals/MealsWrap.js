import React, { Component } from "react";
import Meals from "../Meals/Meals";
import Title from "../Title";
import { MealsConsumer } from "../../context";
export default class MealsWrap extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="py-5">
          <div className="container">
            <Title name="Available Meals" />
            <div className="row">
              <MealsConsumer>
                {value => {
                  return value.meals.map(meals => {
                    return <Meals key={meals.id} meals={meals} />;
                  });
                }}
              </MealsConsumer>
            </div>
          </div>
        </div>
      </React.Fragment>

      // <Meals />
    );
  }
}
