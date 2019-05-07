import React, { Component } from "react";
import { mealDetail } from "./components/Meals/MealsList";

const MealsContext = React.createContext();

class MealsProvider extends Component {
  state = {
    meals: [],
    mealDetail: mealDetail,
    cart: [],
    cartSubTotal: 0,
    cartTax: 0,
    cartTotal: 0
  };

  componentDidMount() {
    this.setMeals();
  }
  setMeals = () => {
    let tempMeals = [];
    mealDetail.forEach(item => {
      const singleItem = { ...item };
      tempMeals = [...tempMeals, singleItem];
    });
    this.setState(() => {
      return { meals: tempMeals };
    });
  };

  getMeal = id => {
    const meal = this.state.meals.find(item => item.id === id);
    return meal;
  };
  handleDetail = id => {
    const meal = this.getMeal(id);
    this.setState(() => {
      return { mealDetail: meal };
    });
  };

  addToCart = id => {
    let tempMeal = [...this.state.meals];
    const index = tempMeal.indexOf(this.getMeal(id));
    const meal = tempMeal[index];
    meal.inCart = true;
    meal.count = 1;
    const price = meal.price;
    meal.total = price;

    this.setState(
      () => {
        return { meals: tempMeal, cart: [...this.state.cart, meal] };
      },
      () => {
        this.addTotals();
      }
    );
  };

  increment = id => {
    let tempCart = [...this.state.cart];
    const selectedMeal = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedMeal);
    const meal = tempCart[index];

    meal.count = meal.count + 1;
    meal.total = meal.count * meal.price;

    this.setState(
      () => {
        return { cart: [...tempCart] };
      },
      () => {
        this.addTotals();
      }
    );
  };
  decrement = id => {
    let tempCart = [...this.state.cart];
    const selectedMeal = tempCart.find(item => item.id === id);
    const index = tempCart.indexOf(selectedMeal);
    const meal = tempCart[index];

    meal.count = meal.count - 1;
    if (meal.count === 0) {
      this.removeItem(id);
    } else {
      meal.total = meal.count * meal.price;
      this.setState(
        () => {
          return { cart: [...tempCart] };
        },
        () => {
          this.addTotals();
        }
      );
    }
  };

  removeItem = id => {
    let tempMeal = [...this.state.meals];
    let tempCart = [...this.state.cart];

    tempCart = tempCart.filter(item => item.id !== id);

    const index = tempMeal.indexOf(this.getMeal(id));
    let removedMeal = tempMeal[index];
    removedMeal.inCart = false;
    removedMeal.count = 0;
    removedMeal.total = 0;

    this.setState(
      () => {
        return {
          cart: [...tempCart],
          meals: [...tempMeal]
        };
      },
      () => {
        this.addTotals();
      }
    );
  };

  clearCart = id => {
    this.setState(
      () => {
        return { cart: [] };
      },
      () => {
        this.setMeals();
        this.addTotals();
      }
    );
  };

  addTotals = () => {
    let subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    const tempTax = subTotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subTotal + tax;
    this.setState(() => {
      return {
        cartSubTotal: subTotal,
        cartTax: tax,
        cartTotal: total
      };
    });
  };

  render() {
    return (
      <MealsContext.Provider
        value={{
          ...this.state,
          handleDetail: this.handleDetail,
          addToCart: this.addToCart,
          increment: this.increment,
          decrement: this.decrement,
          removeItem: this.removeItem,
          clearCart: this.clearCart
        }}
      >
        {this.props.children}
      </MealsContext.Provider>
    );
  }
}

const MealsConsumer = MealsContext.Consumer;

export { MealsProvider, MealsConsumer };
