import React, {Component, PropTypes} from 'react';
import TopBar from "./TopBar";
import styles from './MainLayout.less';

export default class MainLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.continer}>
                <TopBar/>
            </div>
        )
    }
};

MainLayout.propTypes = {
    children: PropTypes.element.isRequired,
};