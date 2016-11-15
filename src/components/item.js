import React, { PropTypes } from 'react';

import styles from './item.css';

const Item = ({ name, price, id, addToBasket }) => {
    return (
        <div className={styles.itemContainer}>
            <h2 className={styles.productName}>{name}
                <span className={styles.price}>{price}ct each</span>
            </h2>
            <button id={id} onClick={addToBasket} className={styles.addCartBtn}>Add to Cart</button>
        </div>
    )
}

Item.propTypes = {
    name: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.number,
    addToBasket: PropTypes.func
}

export default Item;