import React from 'react'
import Nav from '../routes/nav'
import Home from '../sections/home'
import Fruits from '../sections/fruits'
import Veggies from '../sections/veggies'
import Checkout from '../sections/checkout'
import Contact from '../sections/contact'
import FruitsData from '../data/fruits'
import VeggiesData from '../data/veggies'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruits: this.props.fruits,
      veggies: this.props.veggies,
      buyFruits: this.props.buyFruits
    };
  }
  addNew(fruit) {
    this.setState({
      buyFruits: this.state.buyFruits.push(fruit)
    });
  }
  render() {
    return (
      <div>
        <Nav />
        <Home />
        <Fruits fruits={this.state.fruits} buyFruits={this.state.buyFruits} addNew={this.addNew.bind(this)}/>
        <Checkout buyFruits={this.state.buyFruits} />
        <Contact />
      </div>
    );
  }
}
App.PropTypes = {
  fruits: React.PropTypes.array.isRequired,
  veggies: React.PropTypes.array.isRequired,
  buyFruits: React.PropTypes.array.isRequired
}
App.defaultProps = {
  fruits: FruitsData(),
  veggies: VeggiesData(),
  buyFruits: []
}