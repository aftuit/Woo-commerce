import React from 'react';
const Supports = () => {
    return (
        <div className="support-wrapper">
            <div className="text-center support-main position-relative">
                <h1 className="content-title w-100">Supported by real people</h1>
                <p className="mx-auto">Our team of Happiness Engineers works remotely from 58 countries providing customer support across multiple time zones.</p>
                <img src="/assets/images/people.png" className="w-75 mx-auto" alt="" />
                <img src="/assets/icons/yellow-circle.svg" className="circle-1 position-absolute" alt="" />
                <img src="/assets/icons/yellow-circle.svg" className="circle-2 position-absolute" alt="" />
                <img src="/assets/icons/yellow-circle.svg" className="circle-3 position-absolute" alt="" />
            </div>

            <div className="blue-area text-white d-flex justify-content-center position-relative">
            <img src="/assets/icons/yellow-circle.svg" className="circle-4 position-absolute" alt="" />
                <div className="content mx-auto d-flex align-items-center justify-content-between">
                <p>
                    WooCommerce - the most customizable eCommerce platform for building your online business.
                </p>
                <button className="btn text-white border-white" type="button">
                    <span>
                        Get Started
                    </span>
                </button>
                </div>
            </div>
        </div>
    );
};

export default Supports;