// import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import BannerMobileImage from "../assets/images/Banner-Mobile.png";
// import BannerImage from "../assets/images/Banner.png";
// import OfferImage001 from "../assets/images/offer001.png";
// import OfferImage002 from "../assets/images/offer002.png";
// import OfferImage003 from "../assets/images/offer003.png";
// import OfferImage004 from "../assets/images/offer004.png";
// import Empty from "../components/default/Empty";
import Footer from "../components/default/Footer";
import Header from "../components/default/Header";
// import CategoryCard from "../components/landing/CategoryCard";
// import { fetchCategories } from "../reducks/category/operations";
// import { getCategories } from "../reducks/category/selectors";
import Subscribe from "../components/default/Subscribe";
import React from "react";
import Amazon from "../components/slick/Amazon";
import Featured from "../components/slick/Featured";
import leftarrow from "../assets/images/arrowleft.png";
import rightarrow from "../assets/images/arrowright.png";
import "slick-carousel/slick/slick.css";

import "slick-carousel/slick/slick-theme.css";
import Banner from "../assets/images/banner copy.png";
import Slider from "react-slick";
import Headphones from "../assets/images/headphone.png";
import Watch from "../assets/images/watch.png";
import Shoes from "../assets/images/shoes.png";
import Luggage from "../assets/images/bag.png";
import Jacket from "../assets/images/jacket.png";

export default function Landing() {
  //   const dispatch = useDispatch();
  //   const selector = useSelector((state) => state);
  //   const categories = getCategories(selector);

  //   useEffect(() => {
  //     dispatch(fetchCategories());
  //     // eslint-disable-next-line
  //   }, []);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={"slick-arrow"}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      >
        <img src={rightarrow} class="nexts" alt="" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={"slick-arrow"}
        style={{
          ...style,
          display: "block",
        }}
        onClick={onClick}
      >
        <img src={leftarrow} class="previous" alt="" />
      </div>
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,

    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <Header />

      <>
        <section class="first">
          <img src={Banner} alt="" />
        </section>

        <section class="featuredrecomendations">
          <h3 class="heading1">
            Your recently viewed items & featured recomendations
          </h3>

          <div class="arrows">
            <div class="post-slider">
              <Slider {...settings}>
                <div class="item1">
                  <img src={Headphones} alt="" class="headphones" />
                  <h4 class="productname">Headphones</h4>
                  <h5 class="description">BEATS BY DR.DRE</h5>
                  <h3 class="cost">$200</h3>
                </div>
                <div class="item1" style={{ width: "250px" }}>
                  <img src={Watch} alt="" class="headphones" />
                  <h4 class="productname">Watch</h4>
                  <h5 class="description">BEATS BY DR.DRE</h5>
                  <h3 class="cost">$200</h3>
                </div>
                <div class="item1">
                  <img src={Shoes} alt="" class="headphones" />
                  <h4 class="productname">Shoes</h4>
                  <h5 class="description">BEATS BY DR.DRE</h5>
                  <h3 class="cost">$200</h3>
                </div>
                <div class="item1">
                  <img src={Luggage} alt="" class="headphones" />
                  <h4 class="productname">Luggage Bag</h4>
                  <h5 class="description">BEATS BY DR.DRE</h5>
                  <h3 class="cost">$200</h3>
                </div>
                <div class="item1">
                  <img src={Jacket} alt="" class="headphones" />
                  <h4 class="productname">Jacket</h4>
                  <h5 class="description">BEATS BY DR.DRE</h5>
                  <h3 class="cost">$200</h3>
                </div>
                <div class="item1">
                  <img src={Jacket} alt="" class="headphones" />
                  <h4 class="productname">Jacket</h4>
                  <h5 class="description">BEATS BY DR.DRE</h5>
                  <h3 class="cost">$200</h3>
                </div>
              </Slider>
            </div>
          </div>
        </section>
      </>

      <Amazon />
      <Featured />

      <Subscribe />
      <Footer />
    </>
  );
}
