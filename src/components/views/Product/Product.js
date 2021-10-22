import React, { useEffect } from 'react';
import PropTypes from 'prop-types';


import clsx from 'clsx';

import { connect } from 'react-redux';
import { getOne, fetchOneFromAPI } from '../../../redux/productsRedux.js';

import styles from './Product.module.scss';
// import { Link } from 'react-router-dom';



const Component = ({ className, product, fetchOneFromAPI, ...props }) => {

  useEffect(() => {
    fetchOneFromAPI(props.match.params.id);
  }, [fetchOneFromAPI, props.match.params.id]);

  console.log('product', product);

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
                <button>Add {product.name} to cart</button>
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
};

const mapStateToProps = state => ({
  product: getOne(state),
});

const mapDispatchToProps = dispatch => ({
  fetchOneFromAPI: (id) => dispatch(fetchOneFromAPI(id)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as Product,
  Container as Product,
  Component as ProductComponent,
};
