import React from 'react';
import {browserHistory} from 'react-router';
import Routes from "../routes";
import {render} from 'react-dom';
import "./index.less";
render(
    <Routes history={browserHistory}/>,
    document.getElementById('root')
);