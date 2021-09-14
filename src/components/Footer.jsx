import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">

                <div className="row text-white">
                    <div className="col-4 d-flex align-items-center">
                        <img src="/assets/icons/check.svg" alt="" />
                        <span className="d-inline-block ml-3">30 day <b>money back guarantee</b></span>
                    </div>
                    <div className="col-4 d-flex align-items-center">
                        <img src="/assets/icons/support.svg" alt="" />
                        <span className="d-inline-block ml-3"><b>Support</b> teams across the world</span>
                    </div>
                    <div className="col-4 d-flex align-items-center">
                        <img src="/assets/icons/secure.svg" alt="" />
                        <span className="d-inline-block ml-3"><b>{'Safe & Secure '}</b> online payment</span>
                    </div>
                </div>
                <div className="logo-img">
                    <img src="/assets/icons/w-LOGO.svg" className="mx-auto d-block" alt="" />
                </div>
                <div className="line"></div>

                <div className="menus">
                    <div className="row text-white">
                        <div className="col">
                            <h5>WHO WE ARE</h5>
                            <ul className="flex-column nav mt-3">
                                <li className="nav-item"><Link to="/" className="nav-link">About</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Team</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Work With Us</Link></li>
                            </ul>
                        </div>

                        <div className="col">
                            <h5>WOOCOMMERCE</h5>
                            <ul className="flex-column nav mt-3">
                                <li className="nav-item"><Link to="/" className="nav-link">Features</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Payments</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Marketing</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Shipping</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Extension Store</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">eCommerce blog</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Development blog</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Mobile App</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Community</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Style Guide</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Email Newsletter</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5>OTHER PRODUCTS</h5>
                            <ul className="flex-column nav mt-3">
                                <li className="nav-item"><Link to="/" className="nav-link">Storefront</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">WooSlider</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Sensei</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Sensei Extensions</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5>SUPPORT</h5>
                            <ul className="flex-column nav mt-3">
                                <li className="nav-item"><Link to="/" className="nav-link">Documentation</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Customizations</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Support Policy</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Contact</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">COVID-19 Resources</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Privacy Notice for</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">California Users</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <h5>WE ARE RECOMMEND</h5>
                            <ul className="flex-column nav mt-3">
                                <li className="nav-item"><Link to="/" className="nav-link">WooExperts</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Hosting Solutions</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Pre-sales FAQ</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Success Stories</Link></li>
                                <li className="nav-item"><Link to="/" className="nav-link">Design Feedback Group</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bottom-part px-5 py-4 bg-white">
                <div className="bottom-content d-flex justify-content-between align-items-center">
                    <div className="social-net d-flex">
                        <Link>
                            <img src="/assets/icons/skype.svg" className="mx-3" alt="" />
                        </Link>
                        <Link>
                            <img src="/assets/icons/facebook.svg" className="mx-3" alt="" />
                        </Link>
                        <Link>
                            <img src="/assets/icons/wifi.svg" className="mx-3" alt="" />

                        </Link>
                        <Link>
                            <img src="/assets/icons/instagram.svg" className="mx-3" alt="" />
                        </Link>

                    </div>

                    <p className="mb-0">{'COPYRIGHT WOOCOMMERCE 2020 - TERMS & CONDITIONS  PRIVACY POLICY'}</p>

                    <img src="/assets/icons/automatic.svg" alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;