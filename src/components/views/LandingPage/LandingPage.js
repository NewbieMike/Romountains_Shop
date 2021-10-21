import React from 'react';
import PropTypes from 'prop-types';
import Aos from 'aos';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './LandingPage.module.scss';
import { HashLink } from 'react-router-hash-link';


const Component = ({ className, children }) => {
  Aos.init({duration: 1500});
  return(
    <div className={clsx(className, styles.root_landingPage)} id='Home'>
      <div className={clsx(className, styles.landingPage_text_content)}>
        <h1>romountains</h1>
        <h3>discover the undiscovered</h3>
      </div>
      <div className={clsx(className, styles.color_box)}>
        <HashLink to='/#Contact' smooth>Contact Us!</HashLink>
      </div>
      <div className={clsx(className, styles.color_box)}>
        <HashLink to='/#About' smooth>About</HashLink>
      </div>
      <div className={clsx(className, styles.color_box)}>
        <HashLink to='/#Shop' smooth>Shop</HashLink>
      </div>
    </div>
  );
  
};

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
  Component as LandingPage,
  // Container as Homepage,
  Component as LandingPageComponent,
};
