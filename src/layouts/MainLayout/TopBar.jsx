import React, {Component, PropTypes} from 'react';
import styles from './MainLayout.less';

export default class MainLayout extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.top}>

            </div>
        )
    }
};

MainLayout.propTypes = {
    children: PropTypes.element.isRequired,
};