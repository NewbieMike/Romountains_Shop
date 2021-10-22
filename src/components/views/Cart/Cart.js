import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, fetchAllProducts } from '../../../redux/productsRedux.js';

import styles from './Cart.module.scss';
// import { Link } from 'react-router-dom';



const Component = ({ className, products, fetchAllProducts }) => {

  useEffect(() => {
    fetchAllProducts();
  });

  console.log('products', products);

  return (
    <div className={clsx(className, styles.cart_view)}>
      <h2>.</h2>
      <h1>Cart view</h1>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  products: PropTypes.array,
  fetchAllProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  fetchAllProducts: () => dispatch(fetchAllProducts()),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as ProductsList,
  Container as Cart,
  Component as CartComponent,
};
