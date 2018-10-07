import React from 'react';
import placeholder from '../assets/img/placeholders/placeholder.jpg';

const SideBar = () => {
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
                                    <img src={placeholder} width="38" height="38" className="rounded-circle" alt=""/>
                                </div>

                                <div className="media-body">
                                    <div className="media-title font-weight-semibold">Артем Потоцкий</div>
                                    <div className="font-size-xs opacity-50">
                                        <i className="icon-user-tie font-size-sm"/> &nbsp;Администратор
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card-body p-0">
                        <ul className="nav nav-sidebar" data-nav-type="accordion">

                            <li className="nav-item-header mt-0">
                                <div className="text-uppercase font-size-xs line-height-xs">Логирование</div>
                            </li>

                            <li className="nav-item nav-item-submenu">
                                <a href="#" className="nav-link">
                                    <i className="icon-database-time2"/>
                                    <span>Логи</span>
                                </a>

                                <ul className="nav nav-group-sub" data-submenu-title="Логи">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Просмотр логов</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item-header mt-0">
                                <div className="text-uppercase font-size-xs line-height-xs">Администрирование</div>
                            </li>

                            <li className="nav-item nav-item-submenu">
                                <a href="#" className="nav-link">
                                    <i className="icon-users"/>
                                    <span>Пользователи</span>
                                </a>

                                <ul className="nav nav-group-sub" data-submenu-title="Логи">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Активные пользователи</a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Удаленные пользователи</a>
                                    </li>
                                </ul>
                            </li>

                            <li className="nav-item-header mt-0">
                                <div className="text-uppercase font-size-xs line-height-xs">Склад</div>
                            </li>

                            <li className="nav-item nav-item-submenu">
                                <a href="#" className="nav-link">
                                    <i className="icon-office"/>
                                    <span>Товар</span>
                                </a>

                                <ul className="nav nav-group-sub" data-submenu-title="Логи">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Перечень товара</a>
                                    </li>

                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Добавить товар</a>
                                    </li>
                                </ul>
                            </li>


                            <li className="nav-item-header mt-0">
                                <div className="text-uppercase font-size-xs line-height-xs">Менеджер</div>
                            </li>

                            <li className="nav-item nav-item-submenu">
                                <a href="#" className="nav-link">
                                    <i className="icon-home4"/>
                                    <span>Товар</span>
                                </a>

                                <ul className="nav nav-group-sub" data-submenu-title="Логи">
                                    <li className="nav-item">
                                        <a href="#" className="nav-link">Перечень товара</a>
                                    </li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;