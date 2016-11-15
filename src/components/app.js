import React, { Component } from 'react';

import Item from './Item';
import ShoppingBasket from './ShoppingBasket';

import styles from './app.css';

class App extends Component {
    constructor () {
        super();
        this.state = {
            itemsList: [
                { name: 'Apples',  price: 25, id: 1, promo: false },
                { name: 'Oranges', price: 30, id: 2, promo: false },
                { name: 'Bananas', price: 15, id: 3, promo: false },
                { name: 'Papayas', price: 50, id: 4, promo: true  }
            ],
            basket: {}
        }
        this.addToBasket = this.addToBasket.bind(this);
    }

    addToBasket (e) {
        this.state.itemsList.map((item) => {
            if (e.target.id == item.id) {
                const { basket } = this.state;
                basket[item.id] = basket[item.id] + 1 || 1;

                this.setState({
                    basket: basket
                })
            }
        })
    }

    render () {
        return (
            <div className={styles.container}>
                <h1 className={styles.title}>Let's do some shopping!</h1>
                <div className={styles.wrapper}>
                    <div className={styles.itemsList}>
                        {this.state.itemsList.map(({name, price, id}) => (
                            <Item
                                key={id}
                                id={id}
                                name={name}
                                price={price}
                                addToBasket={this.addToBasket}
                            />
                        ))}
                    </div>
                    <ShoppingBasket
                        basket={this.state.basket}
                        itemsList={this.state.itemsList}
                    />
                </div>
            </div>
        )
    }
}
export default App;