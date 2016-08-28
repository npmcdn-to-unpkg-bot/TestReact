import React from "react";
import MainLayout from "../layouts/MainLayout";

export default class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <MainLayout {...this.props}>
                {this.props.children}
            </MainLayout>
        );
    }
}
