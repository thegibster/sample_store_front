import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Costumer from './class/Costumer';
import Product from './class/Product';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import CardExpandable from './component/CardExpandable';
// console.log(Jerry.getCart());
// console.log(Jerry.getCartTotal());


class App extends Component {

  state = {
    costumers : []
  }

   componentDidMount(){
    let Jerry = new Costumer("Jerry");
    let snickerbar = new Product(2.50,"08gf82b2f","SnickersBar");
    let milk = new Product(4.00,"35g3g24","Milk");
    Jerry.addToCart(snickerbar);
    Jerry.addToCart(milk);
    let Canter = new Costumer("Canter");
    let rice = new Product(5.50,"vb2o38","Rice");
    let waffles = new Product(14.00,"35g3g24","Waffles");
    Canter.addToCart(rice);
    Canter.addToCart(waffles);
    this.setState({
      costumers: [...this.state.costumers, Jerry, Canter]
    })
  }
  render() {
    return (
      <div className="App">
      <MuiThemeProvider>
        <div className="row">
          {
            this.state.costumers.map((customer) => {
              return (
                <div style={{width: '200px'}}>
                  <CardExpandable  name={customer.name} total={customer.getCartTotal()} items={customer.getCart()}/>
                </div>
                )
            })
          }
          </div>
        </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
