import { Navigation, Pagination, Mousewheel, EffectFade } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const swiperOptions = {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: true,
  pagination: true,
  effect: "fade",
  speed: 1000,
};

import {
  Champion,
  Welcome,
  ChampionDetail,
  Trailer,
  Credit,
} from "../component/home-section";

import { championsData } from "../assets/dummy";

export default function Home() {
  return (
    <>
      <Swiper
        {...swiperOptions}
        modules={[Navigation, Pagination, Mousewheel, EffectFade]}
      >
        <SwiperSlide>
          {({ isActive }) => <Welcome isActive={isActive} />}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => <Champion isActive={isActive} />}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => <Trailer isActive={isActive} />}
        </SwiperSlide>

        <SwiperSlide>
          {({ isActive }) => <Credit isActive={isActive} />}
        </SwiperSlide>
      </Swiper>

      {championsData.map((item, index) => (
        <ChampionDetail key={index} item={item} id={index}></ChampionDetail>
      ))}

      <div className="scroll">
        <span>Scroll to see effect</span>
      </div>
    </>
  );
}
