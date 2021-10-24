import React from 'react';
import PropTypes from 'prop-types';
import CookieConsent from 'react-cookie-consent';

import clsx from 'clsx';

// import { connect } from 'react-redux';
// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

import styles from './MainLayout.module.scss';

import {Header} from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Link } from '@material-ui/core';

const Component = ({className, children}) => (
  <div className={clsx(className, styles.root)}>
    <Header />
    {children}
    <Footer />
    <CookieConsent 
      //degub = true if we develope page, every refresh banner will appear
      debug={false}
      location='bottom'
      expires={365}
    >
      This site uses cookies. See our <Link>privacy policy</Link> for more informations.
    </CookieConsent>
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
  Component as MainLayout,
  // Container as MainLayout,
  Component as MainLayoutComponent,
};
