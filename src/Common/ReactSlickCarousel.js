import { Link } from "react-router-dom";
import Slider from "react-slick";
import Engineering from "../assets/engineer.jpg"
import Managment from "../assets/managment.jpg"
import Computer from "../assets/computer.jpg"
import Health from "../assets/health.jfif"
import Health3 from "../assets/health3.jpg"
import Pharma from "../assets/pharma.jpg"
import Media from "../assets/media.jpg"


const dataCarousel = [
  {
    id: 1,
    img: Engineering,
    title: "Engineering",
    link: "/categories/console",
  },
  {
    id: 2,
    img: Managment,
    title: "Managment",
    link: "/categories/chairs",
  },
  {
    id: 3,
    img: Computer,
    title: "Computer",
    link: "/categories/beds",
  },
  {
    id: 4,
    img: Health,
    title: "Health",
    link: "/categories/sofa",
  },

  {
    id: 6,
    img: Health3,
    title: "Health3",
    link: "/categories/dinnig",
  },
  {
    id: 7,
    img: Pharma,
    title: "Pharma",
    link: "/categories/dinnig",
  },
  {
    id: 8,
    img: Media,
    title: "Media",
    link: "/categories/dinnig",
  },
];

const ReactSlickCarousel = () => {

  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
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
    <div className="w-full overflow-hidden  my-10 text-white ">
      <Slider className="w-[80%] relative  m-auto " {...settings}>
        {dataCarousel.map((item) => (
          <div className=" px-8   " key={item.id}>
            <Link to={item.link}>
              <div className="relative rounded-t-md group   overflow-hidden">
                <img
                  className="w-full group-hover:scale-110 h-[400px]  ease-in duration-300 cursor-pointer  rounded-t-md"
                  src={item.img}
                  alt="img"
                />

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  group-hover:scale-90  ease-in duration-300 cursor-pointer z-10  w-[80%] h-[350px]  border rounded-t-md"></div>
              </div>
            </Link>
            <h1 className="text-textColor font-bold custonFonts text-[20px] hover:text-white cursor-pointer rounded-b-md bg-transparent w-full py-4 ">
              {item.title}
            </h1>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ReactSlickCarousel;
