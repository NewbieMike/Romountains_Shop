import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


import clsx from 'clsx';

import { connect } from 'react-redux';
import { getAll, fetchAllProducts } from '../../../redux/productsRedux.js';

import styles from './ProductsList.module.scss';



const Component = ({ className, products, fetchAllProducts }) => {

  useEffect(() => {
    fetchAllProducts();
  });

  console.log('products', products);

  return (
    <>
      {products.map((product) => (
        <div key={product._id} className={clsx(className, styles.product_card)}>
          <img src={product.image} alt={product.name} />
          <div className={clsx(className, styles.product_card_content)}>
            <h5>{product.name}</h5>
            {/* <p>{product.description}</p> */}
            <div className={clsx(className, styles.product_card_content_buttons)}>
              <button>Add to cart</button>
              <button>{product.price} $</button>
            </div>
          </div>
        </div>
      )
      )}
    </>
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
  Container as ProductsList,
  Component as ProductsListComponent,
};
