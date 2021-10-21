import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Shop.module.scss';

import { ProductsList } from '../ProductList/ProductList';
import { HashLink } from 'react-router-hash-link';

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
const Component = ({className, children}) => (
  <div className={clsx(className, styles.root_shop)}>
    <Carousel responsive={responsive} className={clsx(className, styles.car)}>
      <HashLink className={clsx(className, styles.carousel_item)} to='/#Shop' smooth>
        <img src='https://images.pexels.com/photos/640947/pexels-photo-640947.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' />
        <div className={clsx(className, styles.carousel_text)}>
            Check out our special -50% SALE!
        </div>
      </HashLink>
      <HashLink className={clsx(className, styles.carousel_item)} to='/#Shop' smooth>
        <img src='https://images.pexels.com/photos/949193/pexels-photo-949193.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' />
        <div className={clsx(className, styles.carousel_text)}>
            Buy one get one free!
        </div>
      </HashLink>
      <HashLink className={clsx(className, styles.carousel_item)} to='/#Shop' smooth>
        <img src='https://images.pexels.com/photos/266451/pexels-photo-266451.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' />
        <div className={clsx(className, styles.carousel_text)}>
            Register to out newsletter and get 10% off!
        </div>
      </HashLink>
      <HashLink className={clsx(className, styles.carousel_item)} to='/#Shop' smooth>
        <img src='https://images.pexels.com/photos/395196/pexels-photo-395196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='' />
        <div className={clsx(className, styles.carousel_text)}>
            New collection arrived!
        </div>
      </HashLink>
    </Carousel>
    <div className={clsx(className, styles.productList_container)} id='Shop'>
      <ProductsList />
    </div>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Shop,
  // Container as Shop,
  Component as ShopComponent,
};
