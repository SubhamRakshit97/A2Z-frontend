import React from "react";
import Slider from "react-slick";
import rightarrow from "../../assets/images/arrowright.png";
import leftarrow from "../../assets/images/arrowleft.png";
import { useDispatch } from "react-redux";
import { push } from "connected-react-router";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useHistory } from "react-router";
import shirt1 from "../../assets/images/shirt-1.png";
import shirt2 from "../../assets/images/shirt-2.png";
import shirt3 from "../../assets/images/shirt-3.png";
import shirt4 from "../../assets/images/shirt-4.png";
import shirt5 from "../../assets/images/shirt-5.png";
import shirt6 from "../../assets/images/shirt-6.png";
const Featured = () => {
  const dispatch = useDispatch();
  const history = useHistory();
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

    slidesToShow: 4,
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
  const signupbtn = () => {
    dispatch(history.push("/sign-up"));
  };
  return (
    <div class="page-wrapper">
      <h4 class="todaysdetails">Amazing-Today's Deals</h4>
      <Slider {...settings}>
        <div class="post">
          <div className="greybackground">
            <img src={shirt1} class="slider-image" />
          </div>

          <div class="post-info">
            <h2 class="productnames">
              Mandelbaum’s
              <br />
              $19.99
            </h2>
            <button
              class="cartbutton"
              onClick={() => {
                history.push("/sign-up");
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div class="post">
          <div className="greybackground">
            <img src={shirt2} class="slider-image" />
          </div>

          <div class="post-info">
            <h2 class="productnames">
              Winter Camp
              <br />
              $19.99
            </h2>
            <button
              class="cartbutton"
              onClick={() => {
                history.push("/sign-up");
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div class="post">
          <div className="greybackground">
            <img src={shirt3} class="slider-image" />
          </div>

          <div class="post-info">
            <h2 class="productnames">
              Cycling
              <br />
              $19.99
            </h2>
            <button
              class="cartbutton"
              onClick={() => {
                history.push("/sign-up");
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>

        <div class="post">
          <div className="greybackground">
            <img src={shirt4} class="slider-image" />
          </div>

          <div class="post-info">
            <h2 class="productnames">
              Robo Ninja
              <br />
              $19.99
            </h2>
            <button
              class="cartbutton"
              onClick={() => {
                history.push("/sign-up");
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
        <div class="post">
          <div className="greybackground">
            <img src={shirt5} class="slider-image" />
          </div>

          <div class="post-info">
            <h2 class="productnames">
              Winter Camp
              <br />
              $19.99
            </h2>
            <button
              class="cartbutton"
              onClick={() => {
                history.push("/sign-up");
              }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Featured;
