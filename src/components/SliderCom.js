import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const formatDateTime = (timestamp) => {
  const date = new Date(timestamp * 1000);

  const formattedDate = date.toLocaleDateString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });

  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return `${formattedDate}, ${formattedTime}`;
};

export const SliderCom = ({ dataSlider }) => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="w-full mx-auto px-4 md:px-8">
      <div className="mt-5 md:mt-10">
        <Slider {...settings}>
          {dataSlider.list.map((item, index) => {
            const formattedDateTime = formatDateTime(item.dt);
            return (
              <div key={index} itemId={index} className="px-2 p-1">
                <div
                  className="bg-white bg-opacity-10 p-6 md:p-8 rounded-lg border border-white border-opacity-30 text-center min-w-[200px] md:min-w-[250px] lg:min-w-[300px] flex flex-col justify-between transform transition-transform hover:scale-105 hover:bg-opacity-30 overflow-hidden box-border"
                  style={{ padding: '1rem', boxSizing: 'border-box' }}
                >
                  <div className="flex-grow flex flex-col justify-center">
                    <p className="text-sm md:text-md lg:text-xl text-gray-300 mt-2 mb-2">PM2.5</p>
                    <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{item.components.pm2_5}</p>
                  </div>
                  <p className="text-xs md:text-sm lg:text-md text-gray-400 mt-auto font-light">
                    {formattedDateTime}
                  </p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};
