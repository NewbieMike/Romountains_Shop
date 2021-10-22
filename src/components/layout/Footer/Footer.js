import React from 'react';
import PropTypes from 'prop-types';
import { HashLink } from 'react-router-hash-link';
import clsx from 'clsx';

import styles from './Footer.module.scss';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
const Component = ({ className }) => {

  return (
    <div className={clsx(className, styles.container)}>
      <div className={styles.column_footer}>
        <h3>Navigation</h3>
        <HashLink to='/#Home' smooth>Home</HashLink>
        <HashLink to='/#Shop' smooth>Shop</HashLink>
        <HashLink to='/#About' smooth>About</HashLink>
      </div>
      <div className={styles.column_footer}>
        <h3>Contact</h3>
        <p>Cracow, Poland</p>
        <a href='tel:+123456789'>123456789</a>
        <a href='mailto:mail@mail.com'>romountains@romoutnains.com</a>
      </div>
      <div className={styles.column_footer}>
        <h3>Find us here!</h3>
        <div>
          <a href='/'><FacebookIcon /></a>
          <a href='/'><InstagramIcon /></a>
          <a href='/'><TwitterIcon /></a>
        </div>
      </div>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};



export {
  Component as Footer,
  //Container as Footer,
  Component as FooterComponent,
};
