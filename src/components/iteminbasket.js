import React, { PropTypes } from 'react';

import styles from './itemInBasket.css';

const ItemInBasket = ({name, count, price}) => {
    return (
        <div className={styles.itemBox}>
            <span>{name}</span>
            <span>{`${count} x ${price}ct`}</span>
        </div>
    )
}

ItemInBasket.propTypes = {
    name: PropTypes.string,
    count: PropTypes.number,
    price: PropTypes.number
}

export default ItemInBasket;