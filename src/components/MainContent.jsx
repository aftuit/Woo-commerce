import React from 'react';
const MainContent = () => {
    return (
        <div className="main-content text-white">
            <div className="main-content-wrapper">
                <div className="left-part">
                    <img src="/assets/images/union.png" alt="" className="union" />
                    <img src="/assets/images/dots.png" alt="" className="dots" />
                    <img src="/assets/icons/yellow-circle.svg" className="little-cirlce" alt="" />
                    <img src="/assets/images/big-circle.png" className="big-cirlce" alt="" />
                    <div className="row">
                        <div className="col-4">
                            <img src="/assets/images/main-img.png" className="w-100" alt="" />
                        </div>
                        <div className="col-5">
                            <h1>Develop
                                Without Limits</h1>
                            <p>
                                WooCommerce is developer friendly, too.
                                Built with a REST API, WooCommerce is scalable and
                                can integrate with virtually any service. Design a complex store from scratch,
                                extend a store for a client, or simply add a single product to a
                                WordPress site—your store, your way.
                            </p>
                            <button type="button" className="btn btn-green round">Read the Documentation</button>
                        </div>
                    </div>
                </div>

                <div className="right-part d-flex justify-content-en">
                    <img src="/assets/icons/yellow-circle.svg" className="little-cirlce" alt="" />
                    <img src="/assets/images/big-circle.png" className="big-cirlce" alt="" />

                    <div className="row mt-70">
                        <div className="col-5">
                            <h1>Know our Global Community</h1>
                            <p>
                                WooCommerce is one of the fastest-growing
                                eCommerce communities. We’re proud that the helpfulness
                                of the community and a wealth of online resources are
                                frequently cited as reasons our
                                users love it. There are 80+ meetups worldwide!
                            </p>
                            <button type="button" className="btn btn-green round">Read the Documentation</button>
                        </div>
                        <div className="col-4">
                            <img src="/assets/images/main-img2.png" className="w-100" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainContent;