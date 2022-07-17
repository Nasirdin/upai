import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import User1 from "../../assets/img/user1.jpg";
import User2 from "../../assets/img/user2.jpg";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./index.scss";

const Team = () => {
  return (
    <div className="team">
      <div className="container">
        <div className="minTitle">
          <span className="line-block"></span>
          <p>02. team</p>
        </div>
        <h2 className="team__title title">Team & Advisors</h2>
        <p className="team__subtitle">
          With a team of top technology and finance professionals, the nonprofit Lymcoin expands access to low-cost
          financial services to fight poverty and maximize individual potential.
        </p>
        <Swiper
          className="team__swiper slider"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          slidesPerView={3}
          navigation
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide className="slider__item">
            <img className="slider__img" src={User1} alt="user-img" />
            <h4 className="slider__title titleh4">John Nelson</h4>
            <p className="slider__text">Account Manager</p>
          </SwiperSlide>
          <SwiperSlide className="slider__item">
            <img className="slider__img" src={User2} alt="user-img" />
            <h4 className="slider__title titleh4">John Nelson</h4>
            <p className="slider__text">Account Manager</p>
          </SwiperSlide>
          <SwiperSlide className="slider__item">
            <img className="slider__img" src={User1} alt="user-img" />
            <h4 className="slider__title titleh4">John Nelson</h4>
            <p className="slider__text">Account Manager</p>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Team;
