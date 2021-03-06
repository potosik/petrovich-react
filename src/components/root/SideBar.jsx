import React from 'react';
import placeholder from '../../assets/img/placeholders/placeholder.jpg';
import AppSettings from "../../constants/config";
import SideBarGroup from "./SideBarGroup";
import {getCurrentUserInfo} from "../../reducers";
import connect from "react-redux/es/connect/connect";
import Actions from "../../actions";

class SideBar extends React.Component {
    render() {
        let {currentUser, match} = this.props;
        
        return (
            <div className="sidebar sidebar-light sidebar-main sidebar-expand-md align-self-start">
                <div className="sidebar-mobile-toggler text-center">
                    <a href="#" className="sidebar-mobile-main-toggle">
                        <i className="icon-arrow-left8"/>
                    </a>
                    <span className="font-weight-semibold">Главное меню</span>
                    <a href="#" className="sidebar-mobile-expand">
                        <i className="icon-screen-full"/>
                        <i className="icon-screen-normal"/>
                    </a>
                </div>

                <div className="sidebar-content">
                    <div className="card card-sidebar-mobile">

                        <div className="card-header header-elements-inline">
                            <h6 className="card-title">Навигация</h6>
                        </div>

                        <div className="sidebar-user">
                            <div className="card-body">
                                <div className="media">
                                    <div className="mr-3">
                                        <img src={placeholder} width="38" height="38" className="rounded-circle"
                                             alt=""/>
                                    </div>

                                    <div className="media-body">
                                        <div className="media-title font-weight-semibold">{currentUser.fullName}</div>
                                        <div className="font-size-xs opacity-50">
                                            <i className="icon-user-tie font-size-sm"/> &nbsp;{currentUser.position}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card-body p-0">
                            <ul className="nav nav-sidebar" data-nav-type="accordion">
                                {
                                    AppSettings.sidebarConfig.groups.map(group => (
                                        <SideBarGroup key={group.title} navGroup={group} match={match}/>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
};

const mapStateToProps = (state) => ({
    currentUser: getCurrentUserInfo(state)
});

SideBar = connect(mapStateToProps)(SideBar);

export default SideBar;