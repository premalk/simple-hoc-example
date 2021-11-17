import React from 'react';

import HigherOrderComponent from './HOC/index';

const App = (props) => {
    return (
        `Hello ${props.name}`
    );
};

export default HigherOrderComponent(App);
