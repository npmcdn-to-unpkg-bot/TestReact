import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import LoginBox from "./LoginBox";
import { render } from 'react-dom';
console.log( 123 );
render( <LoginBox/>, document.getElementById( 'root' ) );