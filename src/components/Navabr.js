
import { BiChevronDown } from "react-icons/bi";
import React from "react";
import { motion } from "framer-motion";
import { GoThreeBars } from "react-icons/go";
import RiphaLogo from "../assets/riphalogo.png"
import { Link } from "react-router-dom";





const Navbar = () => {
  const [isHover, toggleHover] = React.useState(false);
  const [sideShow, setSideShow] = React.useState(false);
 
  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.5,
      },
      display: "block",
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
        delay: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  return (
    <div className="w-full relative flex-col">


      <div className="w-full  bg-bgColor text-white">
        <div className="md:w-[90%] w-[80%] p-2 m-auto flex items-center justify-between">
          <div className="md:w-[20%] w-[50%] items-center flex ">
            <div className="w-full" onClick={() => setSideShow(true)}>
              <GoThreeBars className="text-textColor md:hidden flex text-3xl" />
            </div>
            <Link to="/">
              <div className=" w-full cursor-pointer">
                <img className="w-full" src={RiphaLogo} alt="logo" />
              </div>
            </Link>
          </div>
          <div className="md:flex text-[14px] hidden items-center  md:gap-4 lg:gap-6 xl:gap-12">
            <Link to="/">
              Home
            </Link>
            <Link to="/about">
              About
            </Link>
            <motion.div
              onMouseOver={() => {
                toggleHover(true)
              }}
              className="flex relative cursor-pointer items-center group"
              onMouseLeave={() => { toggleHover(false) }}
            >
              <div>
                Admissions
              </div>
              <BiChevronDown className="text-3xl group-hover:text-textColor" />
              <motion.div
                className="absolute bg-bgColor   text-white top-10 left-0 !w-48 !p-8  z-50 !flex !flex-col gap-4 "
                initial="exit"
                animate={isHover ? "enter" : "exit"}
                variants={subMenuAnimate}
              >
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
              </motion.div>
            </motion.div>
            <Link to="/colleges">
              Colleges

            </Link>
            <Link to="/acadamic">
              Acadamic
            </Link>
            <Link to="/qec">
              Qec
            </Link>

            <Link to="/login"
              className="text-white navbarLink bg-bgColor lg:px-12 md:px-6 text-[16px] hover:bg-textColor transition-all ease-out duration-500 hover:text-bgColor py-4 rounded-full"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;