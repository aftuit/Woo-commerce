import React from 'react';
import Slider from "react-slick";
const Owners = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="owners position-relative">
            <img src="/assets/images/mage.png" className="image position-absolute" alt="" />
            <img src="/assets/images/image1.png" className="image1 position-absolute" alt="" />
            <img src="/assets/images/image2.png" className="image2 position-absolute" alt="" />
            <img src="/assets/images/image3.png" className="image3 position-absolute" alt="" />
            <img src="/assets/images/image4.png" className="image4 position-absolute" alt="" />
            <img src="/assets/images/image5.png" className="image5 position-absolute" alt="" />
            <div className="d-flex justify-content-center">
                <h1 className="content-title">{"Trusted by Agencies & Store Owners"}</h1>
            </div>
            <Slider {...settings} className="carousel__wrapper">
                <div className="carousel__card bg-white mx-auto d-block">

                    <img src="/assets/images/verguls.png" alt="" className="position-absolute vergul" />
                        <p className="mt-5">
                            No other eCommerce platform allows people to
                            start for free and grow their store as their
                            business grows. More importantly, WooCommerce doesn't charge
                            you a portion of your profits as your business grows!
                        </p>
                </div>
                <div className="carousel__card bg-white mx-auto d-block">
                    <img src="/assets/images/verguls.png" alt="" className="position-absolute vergul" />
                        <p className="mt-5">
                            No other eCommerce platform allows people to
                            start for free and grow their store as their
                            business grows. More importantly, WooCommerce doesn't charge
                            you a portion of your profits as your business grows!
                        </p>
                </div>
            </Slider>
        </div>
    );
};

export default Owners;