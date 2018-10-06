import React from 'react';

const Footer = () => (
    <div className="navbar navbar-expand-lg navbar-light fixed-bottom">
        <div className="text-center d-lg-none w-100">
            <button type="button" className="navbar-toggler dropdown-toggle" data-toggle="collapse"
                    data-target="#navbar-footer">
                <i className="icon-unfold mr-2"></i>
                Footer
            </button>
        </div>

        <div className="navbar-collapse collapse" id="navbar-footer">
			<span className="navbar-text">
				&copy; 2018. <a href="#">Limitless Web App Kit</a> by <a href="#" target="_blank">Eugene Kopyov</a>
			</span>
        </div>
    </div>
);

export default Footer;