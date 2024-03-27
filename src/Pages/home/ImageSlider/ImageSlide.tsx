import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Http from '../../../Services/Http';

interface ImageSliderProps { }

const ImageSlide: React.FC<ImageSliderProps> = () => {
  const [imageData, setImageData] = useState([]);
  console.log(imageData);
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await Http({
          url: `/image/getimage`,
          method: "get",
          data: {}
        });
        setImageData(res?.data?.image);
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    }
    fetchData();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className=''>
      <Slider {...settings}>
        {imageData.map((item:any, index) => (
          <div key={index} className='w-full h-[200px] sm:h-[400px] md:h-[500px] lg:h-[700px] mt-[55px] sm:mt-[100px] relative'>
            {/* Image */}
            <img className='w-full h-full' src={`http://localhost:2000/${item?.image}`} alt={`my ${index + 1}`} />
            {/* Title */}
            
            <h1 className='absolute top-0 left-0 z-40 text-white text-2xl sm:3xl md:text-5xl lg:text-7xl font-semibold px-10 sm:px-20 md:px-32 lg:px-44  py-10 sm:py-14 md:py-20 lg:py-24'>{item?.title}</h1>
            <h1 className='absolute top-0 left-0 z-40 text-white text-base sm:xl md:text-2xl lg:text-3xl font-normal px-10 sm:px-20 md:px-32 lg:px-44  pt-20 sm:pt-20 md:pt-32 lg:pt-44'>{item?.description}</h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlide;
