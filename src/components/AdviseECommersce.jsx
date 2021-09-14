import React from 'react';
import CommerceCard from './CommerceCard';
const AdviseECommersce = () => {
    return (
        <div className="e-commerce">
            <div className="d-flex justify-content-center">
                <h1 className="content-title">Your eCommerce made simple</h1>
            </div>
            <div className="row">
                <div className="col-4">
                    <CommerceCard 
                        img="/assets/images/img-1.png"
                        title="All You Need to Start" 
                        info="Add WooCommerce plugin to any WordPress 
                              site and set up a new store in minutes." 
                        link="Ecommerce for Wordpress ›">
                        <img src="/assets/icons/pay.svg" className="pay" alt="" />
                        <img src="/assets/images/img-1-doc.png" className="document" alt="" />        
                    </CommerceCard>
                </div>

                <div className="col-4 mt-70">
                    <CommerceCard 
                        img="/assets/images/img-2.png"
                        title="Customize and Extend" 
                        info="From subscriptions to gym classes to luxury cars, 
                              WooCommerce is fully customizable." 
                        link="Browse Extensions ›">
                        <img src="/assets/icons/square.svg" className="square" alt="" />
                        <img src="/assets/images/facebook.png" className="facebook" alt="" />
                        <img src="/assets/images/monkey.png" className="monkey" alt="" />
                        <img src="/assets/images/jetpack.png" className="jetpack" alt="" />
                        <img src="/assets/images/google-ads.png" className="google-ads" alt="" />
                    </CommerceCard>
                </div>

                <div className="col-4 mt-140">
                    <CommerceCard 
                        img="/assets/images/img-3.png"
                        title="Active Community" 
                        info="WooCommerce is one of the fastest-growing eCommerce communities." 
                        link="Check our Forums ›">
                        <img src="/assets/images/m-img.png" className="m-img" alt="" />
                        <img src="/assets/images/m-img1.png" className="m-img1" alt="" />
                        <img src="/assets/images/m-img2.png" className="m-img2" alt="" />
                        
                    </CommerceCard>
                </div>
            </div>
        </div>
    );
};

export default AdviseECommersce;