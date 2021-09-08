import axios from "axios";
import React from "react";
import Cards from "../Cards/Cards.js";
import "./Container.css";
class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards_list: {},
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://api.exchangeratesapi.io/v1/latest?access_key=ea27f11e67cc1a6cb6d066300def6963&format=1"
      )
      .then((response) => {
        let rates = response.data.rates;
        this.setState({ cards_list: rates });
      });
  }
  render() {
    //   let listOf= Object.keys(this.state.cards_list);
    let listOf = [];
    for (var key in this.state.cards_list) {
      console.log("Key:" + key + "Value:" + this.state.cards_list[key]);
      let temp = {
        name: key,
        price: this.state.cards_list[key],
      };
      listOf.push(temp);
    }
    return (
      <div className="grid-wrapper">
        {listOf.map((card, idx) => (
          <Cards id_card={idx} name={card.name} price={card.price} />
        ))}
      </div>
    );
  }
}

export default Container;
