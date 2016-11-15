import React, { PropTypes} from 'react';

import ItemInBasket from './ItemInBasket';

import styles from './shoppingBasket.css';

const ShoppingBasket = ({ basket, itemsList }) => {
    const msg = (
        <div>
            <h2>Shopping Basket is empty</h2>
            <p>Add some item</p>
        </div>
    );

    const itemsInBasket = Object.keys(basket);

    const renderOrder = function (key) {
        const fruit = itemsList[key-1];
        const count = basket[key];

        return (
            <ItemInBasket
                key={key}
                name={fruit.name}
                count={count}
                price={fruit.price}
            />
        )
    };

    const total = itemsInBasket.reduce((prevTotal, key) => {
        const fruit = itemsList[key-1];
        const count = basket[key];

        return prevTotal + (count * fruit.price || 0)
    }, 0)






    const shoppingBasket = (
        <div>
            {itemsInBasket.map(renderOrder)}
            <div className={styles.totalBox}>
                <span>Total:</span>
                <span>{total}ct</span>
            </div>
        </div>
    );



    return (
        <div className={styles.container}>
            {itemsInBasket.length ? shoppingBasket : msg}
        </div>
    )
};





ShoppingBasket.propTypes = {
    basket: PropTypes.object,
    itemsList: PropTypes.array
}

export default ShoppingBasket;