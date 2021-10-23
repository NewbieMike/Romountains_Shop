import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import swal from 'sweetalert';
import clsx from 'clsx';

import { connect } from 'react-redux';
import { getCartItems, cleanCartItems } from '../../../redux/cartRedux.js';
import { getPersonalData, addOrderInAPI, cleanOrderForm, updateOrderForm } from '../../../redux/orderRedux.js';

import styles from './Order.module.scss';
// import { Link } from 'react-router-dom';



const Component = ({ className, cartItems, updateOrderForm, addOrderInAPI, personalData, cleanCartItems, cleanOrderForm}) => {

  const [ orderFormData, setOrderFormData ] = useState('');
  const [ subtotalPrice, setSubtotalPrice ] = useState(0);

  useEffect(() => {
    updateOrderForm(orderFormData);
    let price = 0;
    cartItems.forEach(item => {
      price += parseInt(item.price);
    });
    setSubtotalPrice(price);
  }, [orderFormData, updateOrderForm, cartItems]);

  const handleOrderFormData = event => {
    setOrderFormData({...orderFormData,
      [event.target.name]: event.target.value,
    });
  };

  let deliveryFee = 12;

  if (subtotalPrice > 99) {
    deliveryFee = 0;
  }

  let totalPrice = subtotalPrice + deliveryFee;

  const order = {
    orderItems: cartItems,
    personalData: personalData,
  };

  const handleAddOrder = event => {
    event.preventDefault();
    addOrderInAPI(order);
    cleanCartItems();
    cleanOrderForm();
    swal(`Order send! Thank you for choosing us!`);
  };
  return (
    <div className={clsx(className, styles.order_view)}>
      <div className={clsx(className, styles.inputs_container)}>
        <label>first name*</label>
        <input
          type='text'
          id='firstName'
          name='firstName'
          onChange={handleOrderFormData}
          required
        />
        <label>last name*</label>
        <input
          type='text'
          id='lastName'
          name='lastName'
          onChange={handleOrderFormData}
          required
        />
        <label>street*</label>
        <input
          type='text'
          id='street'
          name='street'
          onChange={handleOrderFormData}
          required
        />
        <label>number*</label>
        <input
          type='text'
          id='number'
          name='number'
          onChange={handleOrderFormData}
          required
          minLength='2'
          maxLength='19'
        />
        <label>city*</label>
        <input
          type='text'
          id='city'
          name='city'
          onChange={handleOrderFormData}
          required
        />
        <label>phone number*</label>
        <input
          type='text'
          id='phone'
          name='phone'
          onChange={handleOrderFormData}
          required
          minLength='9'
          maxLength='14'
        />
        <label>* - required</label>
        {!cartItems.length ? (
          <p></p>
        ) : (
          <button onClick={handleAddOrder}>
              Order!
          </button>
        )}
      </div>
      {!cartItems.length ? (
        <p>Your cart is empty</p>
      ) : 
        <table>
          <thead>
            <tr>
              <td>Product Name</td>
              <td>Product Image</td>
              <td>Price ($)</td>
            </tr>
          </thead>
          <tbody>
            {cartItems.map(cartItem => (
              <tr key={cartItem._id}>
                <td>{cartItem.name}</td>
                <td><img src={cartItem.image} alt={cartItem.name}/></td>
                <td>{cartItem.price} $</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
      <div><h2>Products price: {subtotalPrice} $</h2>
        <h2>Delivery: {deliveryFee} $</h2>
        <h2>Products + delivery price: {totalPrice} $</h2>
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  updateOrderForm: PropTypes.func,
  addOrderInAPI: PropTypes.func,
  personalData: PropTypes.node,
  cleanCartItems: PropTypes.func, 
  cleanOrderForm: PropTypes.func,
  products: PropTypes.array,
  cartItems: PropTypes.array,
  fetchAllProducts: PropTypes.func,
};

const mapStateToProps = state => ({
  cartItems: getCartItems(state),
  personalData: getPersonalData(state),
});

const mapDispatchToProps = dispatch => ({
  updateOrderForm: arg => dispatch(updateOrderForm(arg)),
  addOrderInAPI: arg => dispatch(addOrderInAPI(arg)),
  cleanOrderForm: arg => dispatch(cleanOrderForm(arg)),
  cleanCartItems: arg => dispatch(cleanCartItems(arg)),
});

const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  //Component as ProductsList,
  Container as Order,
  Component as OrderComponent,
};
