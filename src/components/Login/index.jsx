import React, {Component} from 'react';
import styles from './Login.less';
import LoginBox from "./LoginBox";

export default class Login extends Component {
    render() {
        return (
            <div className={styles.bg}>
                <LoginBox/>
            </div>
        );
    }
}