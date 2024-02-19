import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Http from '../../../Services/Http';


interface ImageSliderProps { }

const ImageSlide: React.FC<ImageSliderProps> = () => {
  const [imageData, setimageData] = useState([]);
  // console.log(imageData);

  useEffect(() => {
    const fatchData = async () => {
      try {
        let res = await Http({
          url: `/image/getimage`,
          method: "get",
          data: {}
        });
        setimageData(res?.data?.image)
      } catch (error) {

      }
    }
    fatchData()
  }, [])


  let settings = {
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
        {
          imageData?.map((item: any, index: any) => (
            <div className='w-full h-[700px]'>
              <img className='w-full h-full ' src={`http://localhost:2000/${item?.image}`} alt="Image 1" />
            </div>
          ))
        }

      </Slider>
    </div>
  );
};

export default ImageSlide;
