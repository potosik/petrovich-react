import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';

import NavBar from '../../components/root/NavBar';
import Header from '../../components/root/Header';
import Content from '../../components/root/Content';
import Footer from '../../components/root/Footer';

import {getCurrentUserIsFetching} from "../../reducers";
import connect from "react-redux/es/connect/connect";
import Actions from "../../actions";
import ApplicationLoading from "../../components/root/ApplicationLoading";

class Application extends React.Component {
    componentDidMount() {
        this.props.getCurrentUser();
    }

    render() {
        const {isFetching, store} = this.props;

        if (isFetching) {
            return <ApplicationLoading/>;
        }

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <NavBar/>
                        <Header/>
                        <Content/>
                        <Footer/>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

const mapStateToProps = (state) => ({
    isFetching: getCurrentUserIsFetching(state)
});

Application = connect(mapStateToProps, Actions.user)(Application);

export default Application;