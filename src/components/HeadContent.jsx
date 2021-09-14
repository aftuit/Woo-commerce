import React from 'react';
import { Link } from 'react-router-dom';

const HeadContent = () => {
    return (
        <div className="header-content">
            <div className="row">
                <div className="col-6 col-6-info">
                    <h1>Building exactly the eCommerce website you want.</h1>
                    <p>WooCommerce is a customizable, open-source eCommerce platform 
                        built on WordPress. Get started quickly and make your way.</p>
                    <div className="d-flex align-items-center">
                        <button className="btn btn-inc mr-2 round px-4">Get Started</button>
                            or
                        <Link to="/" className="ml-2 text-decoration-none link-blue">{'Customize & Extend ›'}</Link>
                    </div>
                </div>

                <div className="col-6">
                    <div className="col-6-content position-relative">
                        <img src="/assets/images/header-img.png" className="position-absolute"alt="" />
                         <img src="/assets/images/header-img2.png" className="position-absolute " alt="" />
                        <img src="/assets/images/brands.png" className="position-absolute " alt="" />
                        <img src="/assets/icons/cart.svg" className="position-absolute " alt="" />
                        <img src="/assets/icons/safe.svg" className="position-absolute " alt="" />
                        <img src="/assets/images/adds.png" className="position-absolute " alt="" />
                        <img src="/assets/icons/sale.svg" className="position-absolute " alt="" />
                        <img src="/assets/images/dots.png" className="position-absolute " alt="" />
                        <img src="/assets/images/dots-success.png" className="position-absolute " alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeadContent;