import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';


import clsx from 'clsx';

import styles from './About.module.scss';
import { Link } from 'react-router-dom';



const Component = ({ className }) => {
  
  return (
    <div className={clsx(className, styles.about)} id='About'>
      <h1>About Romountains</h1>
      <div className={clsx(className, styles.about_container)}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras porttitor quis nibh sed tincidunt. Sed et tortor interdum, pretium justo a, varius ante. Mauris vitae gravida ipsum. Duis sodales varius urna sit amet convallis. Sed pretium a lorem ac consectetur. Proin at volutpat tellus, vel eleifend velit. Proin massa sem, feugiat nec elit nec, ornare fringilla nisl. Nulla porttitor urna a dui molestie imperdiet. Pellentesque posuere molestie facilisis.
Proin ut mauris tempor, malesuada metus in, sodales odio. Phasellus viverra ullamcorper condimentum. Curabitur feugiat lorem et erat blandit elementum. Cras non dui nisl. Sed luctus sagittis quam, nec tempor dui dapibus at. Nunc blandit fringilla felis. Sed eget nunc vel urna feugiat tempus. Aliquam ullamcorper lectus metus, sit amet efficitur ante efficitur eu. Curabitur ut tincidunt augue. Mauris id molestie tortor, vel pellentesque lorem. Donec eu ipsum vulputate ex suscipit volutpat eu id purus.
Proin fermentum magna et dignissim luctus. Nullam suscipit dapibus metus, sodales porttitor odio consectetur a. Nullam porttitor laoreet nisl, sit amet varius nisi placerat at. Maecenas mi mauris, faucibus et gravida vitae, faucibus ac libero. Sed ac porta arcu. Vivamus laoreet vitae dui vitae pellentesque. Proin laoreet quam lectus, non vehicula enim vehicula non. Nulla porttitor pretium tempor.</p>
        <img src='https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940' alt='about'/>
      </div>
    </div>
  );
};

Component.propTypes = {
  className: PropTypes.string,
};

export {
  Component as About,
  //Container as About,
  Component as AboutComponent,
};
