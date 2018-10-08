import React from 'react';
import {Route} from 'react-router';
import SideBar from './SideBar';
import Dashboard from '../../views/dashboard/Dashboard';
import LogsList from "../../views/logs/LogsList";
import ActiveUsersList from "../../views/administration/ActiveUsersList";
import DeletedUsersList from "../../views/administration/DeletedUsersList";
import StorehouseProductsList from "../../views/storehouse/StorehouseProductsList";
import StorehouseAddProduct from "../../views/storehouse/StorehouseAddProduct";
import ManagerProductsList from "../../views/manager/ManagerProductsList";
import ChangePassword from "../../views/user/ChangePassword";

const Content = () => {
    return (
        <div className="page-content pt-0">
            <Route path="*" component={SideBar}/>

            <div className="content-wrapper">
                <div className="content">
                    <Route exact={true} path="/" component={Dashboard}/>

                    <Route exact={true} path="/user/changePassword" component={ChangePassword}/>

                    <Route exact={true} path="/logs" component={LogsList}/>

                    <Route exact={true} path="/admin/activeUsers" component={ActiveUsersList}/>
                    <Route exact={true} path="/admin/deletedUsers" component={DeletedUsersList}/>

                    <Route exact={true} path="/storehouse" component={StorehouseProductsList}/>
                    <Route exact={true} path="/storehouse/new" component={StorehouseAddProduct}/>

                    <Route exact={true} path="/manager" component={ManagerProductsList}/>
                </div>
            </div>
        </div>
    );
};

export default Content;