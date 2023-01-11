import React from 'react'
import RiphaVideo from "../assets/riphaVideo.mp4"

const LifeAtRipha = () => {

    return (
        <div className='w-full py-10 bg-white'>
            <div className="flex flex-col pb-4  gap-4">
                <div className="flex flex-col mx-auto justify-center ">
                    <h4 className="text-[12px] text-bgColor">Explore Life with us</h4>
                    <h2 className="text-[34px]  text-bgColor font-bold custonFonts">
                        Life At Ripha
                    </h2>
                    <div className="w-[40px] flex justify-start items-start h-[1px] bg-bgColor"></div>

                </div>
            </div>
            <div className='w-full flex items-center justify-center'>
                <video width="80%" height="500" controls muted
                    autoPlay
                    loop  >
                    <source src={RiphaVideo} type="video/mp4"
                    />
                </video>
            </div>
            <div className='w-[80%] py-10 mx-auto flex flex-col gap-2'>
                <h1 className='custonFonts text-[22px] text-bgColor font-bold'>IT & Computer Services</h1>
                <p>IT and Computer Services department provides a wide range of services, facilities and support including high speed network access, high specification PCs and laptops and high quality help, advice and training to the students, faculty and staff members. The University is using 30MB fiber-optic internet connectivity through the HEC’s PERN project. This facility is providing state-of-the-art communication infrastructure to meet the requirement of the networking and internet relating to the learning and research. This facilitates audio/video conferencing and access to the digital library resources and to the University Information Portal. All the campuses and hostels are linked through fiber-optic and alongside Wi-Fi internet access is also available at several locations. A structured program for using computers in the field of medical education; namely “Computer Assisted Learning Program” is also introduced to enhance the computing skills of the students. Top of the line Campus Management and Learning Management Systems have also been installed to ensure quick and online academic services to all the stakeholders.
                </p>
                <h1 className='custonFonts text-[22px] text-bgColor font-bold'>Cafeteria</h1>
                <p>Cafeteria services catering with hygienic snacks, full meals and drinks are provided on payment on all the campuses of the University. Separate café for girls and boys on all campuses.</p>
                <h1 className='custonFonts text-[22px] text-bgColor font-bold'>Prayer Area</h1>
                <p>Mosques are established at all campuses while separate prayer areas for females are also located in all campuses.
                </p>
                <h1 className='custonFonts text-[22px] text-bgColor font-bold'>Book Shop</h1>
                <p>Bookshops are located in all the constituent campuses of the university to make available the textbooks, learning materials, photocopy services, and stationary items besides secretarial facility for both the students and faculty/staff.</p>
                <h1 className='custonFonts text-[22px] text-bgColor font-bold'>Internet Access</h1>
                <p>All the campuses and hostels are linked through fiber optic and alongside Wi-Fi internet access is also available at several locations.</p>
                <h1 className='custonFonts text-[22px] text-bgColor font-bold'>Transport</h1>
                <p>Riphah International University is providing transport facility to their students from Islamabad, Rawalpindi, Texila and Wah. The facility is provided at I-14 Main Campus Islamabad, Al-Mizan Campus Peshawar Road Rawalpindi WISH Campus H-8 and City Campus G-7 Islamabad for morning and evening both classes. Routes, maps, charges, timings details are available at Student Services Department. Transport is handled by operations department while forms are available at Student Services Department, charges are according to mileage.</p>
                <h1 className='custonFonts text-[22px] text-bgColor font-bold'>VLE & CMS</h1>
                <p>The university believes and is gradually moving towards the paper less environment. Therefore, a top of the line campus management system-CMS and learning management system, Virtual Learning Environment-VLE have been installed to ensure quick and online academics services to all the stakeholders. Through these systems, the lectures, class activities and teaching materials are made available on VLE. Assignments, quizzes, marks and results are uploaded on CMS. It also carries student’s bio data and the attendance record.</p>
                <h1 className='custonFonts text-[22px] text-bgColor font-bold'>Security</h1>
                <p>All campuses are well guarded by the round-the-clock-security services through active security guards, fenced boundary walls and equipped with the CCTV cameras to ensure safe environment for all the stakeholders.</p>
                <h1 className='custonFonts text-[22px] text-bgColor font-bold'>Class rooms & Auditorium</h1>
                <p>The classroom and auditoriums are fully furnished and are equipped with audio/video aids for better modern learning environment.

                </p>

            </div>
        </div>
    )
}

export default LifeAtRipha