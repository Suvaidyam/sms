import React from 'react';
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


interface ImageSliderProps { }

const ImageSlide: React.FC<ImageSliderProps> = () => {
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
      <div className='w-full h-[700px]'>
        <img className='w-full h-full ' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/220px-Image_created_with_a_mobile_phone.png" alt="Image 1" />
      </div>
      <div className='w-full h-[700px]'>
        <img className='w-full h-full ' src="https://deep-image.ai/blog/content/images/size/w1000/2022/09/underwater-magic-world-8tyxt9yz.jpeg" alt="Image 2" />
      </div>
      <div className='w-full h-[700px]'>
        <img className='w-full h-full ' src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/09/instagram-image-size.jpg" alt="Image 3" />
      </div>
    </Slider>
    </div>
  );
};

export default ImageSlide;
