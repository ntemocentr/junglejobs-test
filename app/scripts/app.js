import React from 'react';
import Main from './containers/App.js';

window.React = React;
const mountNode = document.getElementById('app');

React.render(<Main/>, mountNode);
