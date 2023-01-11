
import React from "react";
// import SectionTitle from "../Common/SectionTitle";
import Aboutbg from "../assets/aboutBg.jpg"
import SectionTitle from "../Common/SectionTitle";
const AboutUs = () => {



    return (
        <div
            className="w-full h-full py-20 bg-bgColor"
            style={{
                backgroundImage: `url(${Aboutbg})`,
                boxShadow: "inset 0 0 0 2000px rgba(0, 0, 0, 0.8 )",
                width: "100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",

            }}
        >
            <SectionTitle title="About us" para="WHO WE ARE" />
            <div className="lg:w-[70%] h-full w-full  m-auto md:flex lg:flex-row flex-col ">
                <div className="lg:w-[40%] lg:h-[100vh]  w-[100%] flex flex-col justify-end">
                    <img className="w-full h-[100vh]" src={Aboutbg} alt="" />
                </div>
                <div className="lg:w-[60%] xl:h-[100vh] w-[100%] flex flex-col justify-end">
                    <div className="w-full xl:h-[90vh] lg:h-max  bg-white flex flex-col gap-4 p-14">
                        <h3 className="text-bgColor custonFonts text-[26px] font-bold">
                        University Ranking and Quality Certification
                        </h3>
                        <p className="text-[16px] font-normal text-[#999999] ">
                        Riphah International University, Islamabad was included in “W” Category Universities by the Higher Education Commission (HEC) of Pakistan in 2005 and soon was included in the top five universities in the private sector who qualify to receive research grants from the Government of Pakistan through the HEC. Recently, Riphah is ranked at the second position among all the private national universities of the general category. 
                        </p>
                        <div className="flex gap-10 text-[14px] font-bold">
                            <h3>Give us a Call: </h3>
                            <h3>+92 313 1221234</h3>
                        </div>
                        <h3 className=" signatureFont  text-[48px] text-bgColor">
                            Ateeq Shareef
                        </h3>
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[18px] font-bold">  Ateeq Shareef</h3>
                            <p className="text-[14px] font-normal text-[#333333]">
                                CEO and Founder of ripha
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;