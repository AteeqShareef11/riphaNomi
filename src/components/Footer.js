
import { FaFacebook } from "react-icons/fa"
import { FaInstagramSquare } from "react-icons/fa"
import { Link } from "react-router-dom";
import RiphaLogo from "../assets/riphalogo.png"

const Footer = () => {
  return (
    <div className="w-full py-10 bg-bgColor">
      <div className="w-[80%] md:text-left text-center m-auto gap-8 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
        <div className="flex flex-col gap-4">
          <div className="flex items-center md:justify-start justify-center">
            <img className="w-full" src={RiphaLogo} alt="" />
          </div>
          <p className="text-[12px] text-white">
            Riphah International University is a private sector university, chartered by the Federal Government of Pakistan in 2002.
            The University was established with a view to produce professionals with Islamic moral and ethical values.
            It is sponsored by a not-for-profit trust namely Islamic International Medical College Trust (IIMCT), which was established in 1995
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-textColor font-bold custonFonts text-[22px]">
            Policy Links
          </h2>
          <div className="flex flex-col text-white gap-2">
            <p className="text-base hover:text-textColor transition-all ease-out delay-100 cursor-pointer">
              Privacy Policy
            </p>
            <p className="text-base hover:text-textColor transition-all ease-out delay-100 cursor-pointer">
              Terms & Conditions
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-textColor font-bold custonFonts text-[22px]">
            Quick Links
          </h2>
          <div className="flex flex-col text-white gap-2">
            <Link to="/admissions/latest">
              <div className="navbarLink">Latest News</div>
            </Link>
            <Link to="/admissions/merit">
              <div className="navbarLink">Merit List</div>
            </Link>
            <Link to="/admissions/program">
              <div className="navbarLink">Programs Finder</div>
            </Link>
            <Link to="/admissions/fee">
              <div className="navbarLink">Fee Structure</div>
            </Link>
            <Link to="/admissions/listofprograme">
              <div className="navbarLink">List Of Programs</div>
            </Link>
            <Link to="/admissions/contactAdmissions">
              <div className="navbarLink">Contact Admissions Office</div>
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h2 className="text-textColor font-bold custonFonts text-[22px]">
            Contact Details
          </h2>
          <div className="flex flex-col text-white gap-2">
            <p className="text-base  hover:text-textColor transition-all ease-out delay-100 cursor-pointer">
              Sector I-14, Hajj Complex, Islamabad.
            </p>
            <p className="text-base">
              <span className="text-textColor">Phone:</span>++92 (51) 844 6000-7
            </p>
            <p className="text-base">
              <span className="text-textColor">Mail:</span>ateeqshareef11@gmail.com
            </p>
            <p className="text-base">
              <span className="text-textColor">Whatsapp:</span>+92 (51) 844 6000-7
            </p>
          </div>
          <div className="w-full h-[1px] bg-white"></div>
          <div className="flex md:justify-start justify-center gap-4 items-center">
            <a target="_blank" to="/" rel="noopener noreferrer">
              <FaFacebook className="text-white text-2xl hover:text-textColor transition-all ease-out duration-150 cursor-pointer" />

            </a>

            <FaInstagramSquare className="text-white text-2xl hover:text-textColor transition-all ease-out duration-150 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
