import React from 'react';

const HigherOrderComponent = (WrappedComponent) => () => (
  <WrappedComponent name="World" />
);

export default HigherOrderComponent;
