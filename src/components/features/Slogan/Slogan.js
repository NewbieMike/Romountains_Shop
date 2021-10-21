import React from 'react';
import PropTypes from 'prop-types';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './Slogan.module.scss';



const Component = ({className, children, name}) => (
  <div className={clsx(className, styles.slogan_style)}>
    <h1>“Until you step into the unknown, you don’t know what you’re made of.”</h1>
  </div>
);

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string,
};

// const mapStateToProps = state => ({
//   someProp: reduxSelector(state),
// });

// const mapDispatchToProps = dispatch => ({
//   someAction: arg => dispatch(reduxActionCreator(arg)),
// });

// const Container = connect(mapStateToProps, mapDispatchToProps)(Component);

export {
  Component as Slogan,
  // Container as Homepage,
  Component as SloganComponent,
};
