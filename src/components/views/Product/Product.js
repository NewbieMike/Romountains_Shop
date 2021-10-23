import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import swal from 'sweetalert';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOne, fetchOneFromAPI } from '../../../redux/productsRedux.js';
import { addToCart } from '../../../redux/cartRedux.js';

import styles from './Product.module.scss';




const Component = ({ className, product, fetchOneFromAPI, addToCart,  ...props }) => {

  useEffect(() => {
    fetchOneFromAPI(props.match.params.id);
  }, [fetchOneFromAPI, props.match.params.id]);

  console.log('product', product);

  const addItemToCartObject = {
    _id: product && product._id,
    name: product && product.name,
    image: product && product.image,
    description: product && product.description,
    price: product && product.price,
  };

  const handleAddToCart = e => {
    e.preventDefault();
    addToCart(addItemToCartObject);
    swal(`${product.name} added successfully to cart!`);
  };

  return (
    <div className={clsx(className, styles.product_view)}>
      {!product ? (
        <div className={styles.loading_screen}>
          <p>Loading...</p>
        </div>
      ) : (
        <div className={clsx(className, styles.product_data)}>
          <h1>{product.name} </h1>
          <div className={clsx(className, styles.flex_row)}>
            <img src={product.image} alt={product.name} />
            <div className={clsx(className, styles.content)}>
              <p>{product.description}</p>
              <p>Price: {product.price}$</p>
              <div className={clsx(className, styles.buttons)}>
                <button onClick={handleAddToCart}>
                  Add {product.name} to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
  match: PropTypes.object,
  product: PropTypes.object,
  fetchOneFromAPI: PropTypes.func,
  addToCart: PropTypes.func,
};

const mapStateToProps = state => ({
  product: getOne(state),
});

const mapDispatchToProps = dispatch => ({
  fetchOneFromAPI: (id) => dispatch(fetchOneFromAPI(id)),
  addToCart: arg => dispatch(addToCart(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Product,
  Container as Product,
  Component as ProductComponent,
};
