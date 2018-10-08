import React from 'react';

const Header = () => (
    <div className="page-header">
        <div className="breadcrumb-line breadcrumb-line-light header-elements-md-inline">
            <div className="d-flex">
                <div className="breadcrumb">
                    <a href="/" className="breadcrumb-item">
                        <i className="icon-home2 mr-2"/> Домашняя
                    </a>

                    <span className="breadcrumb-item active">Панель управления</span>
                </div>
            </div>
        </div>
    </div>
);

export default Header;