import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

import { HashLink } from 'react-router-hash-link';
import basket from '../../../media/basket.svg';
// import { connect } from 'react-redux';
// import { getAll, fetchAllProducts } from '../../../redux/productsRedux.js';

import styles from './Header.module.scss';




const Component = ({ className }) => {

  return (
    <nav className={clsx(className, styles.navigation_bar)}>
      <div className={clsx(className, styles.header_column)}>
        <HashLink to='/#Home' smooth>Romountains</HashLink>
      </div>
      <div className={clsx(className, styles.header_column)}>
        <HashLink to='/#Home' smooth>Home</HashLink>
        <HashLink to='/#Shop' smooth>Shop</HashLink>
        <HashLink to='/' smooth>About</HashLink>
        <HashLink to='/' smooth>Contact</HashLink>
      </div>
      <div className={clsx(className, styles.header_column)}>
        <HashLink to='/' smooth><img src={basket} alt='basket'/>Cart</HashLink>
      </div>
    </nav>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

// const mapStateToProps = state => ({
//   products: getAll(state),
// });

// const mapDispatchToProps = dispatch => ({
//   fetchAllProducts: () => dispatch(fetchAllProducts()),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Header,
  //Container as ProductsList,
  Component as HeaderComponent,
};
