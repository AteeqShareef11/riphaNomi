import React from 'react'
import Ranking1 from "../assets/ranking1.png";
import Ranking2 from "../assets/ranking2.png";
import Ranking3 from "../assets/ranking3.png";
import Ranking4 from "../assets/ranking4.png";
import Ranking5 from "../assets/ranking5.png";
import SectionTitle from '../Common/SectionTitle';


const Ranking = () => {
    return (
        <div className='py-20'>
            <div className='bg-bgColor py-10'>
                <SectionTitle title="University Ranking" para="Explore Ranking" />
            </div>
            <div className='flex w-[80%] mx-auto flex-col gap-2 py-10'>
                <h1 className='custonFonts text-[22px] text-bgColor font-bold'>University Ranking and Quality Certification</h1>
                <p>Riphah International University, Islamabad was included in “W” Category Universities by the Higher Education Commission (HEC) of Pakistan in 2005 and soon was included in the top five universities in the private sector who qualify to receive research grants from the Government of Pakistan through the HEC. Recently, Riphah is ranked at the second position among all the private national universities of the general category. Further, the Quality Enhancement Cell of the University got the first position in the private sector “W” Category Universities of the Country according to the scorecard formulated by the HEC. Riphah is the first university of the Country that has been certified under ISO 9001:2008 Standard announced by the UK based Lloyd’s Register, which is one of the top five global independent risk management and safety assurance organizations.</p>
            </div>
            <div className='grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1  w-[80%] mx-auto '>
                <div className='flex items-center justify-center' >
                    <img width="50%" className='hover:scale-125 cursor-pointer transition-all ease-in' src={Ranking1} alt='' />
                </div>
                <div className='flex items-center justify-center'>
                    <img width="50%" className='hover:scale-125 cursor-pointer transition-all ease-in' src={Ranking2} alt='' />
                </div>
                <div className='flex items-center justify-center'>
                    <img width="50%" className='hover:scale-125 cursor-pointer transition-all ease-in' src={Ranking3} alt='' />
                </div>
                <div className='flex items-center justify-center'>
                    <img width="50%" className='hover:scale-125 cursor-pointer transition-all ease-in' src={Ranking4} alt='' />
                </div>
                <div className='flex items-center justify-center'>
                    <img width="50%" className='hover:scale-125 cursor-pointer transition-all ease-in' src={Ranking5} alt='' />
                </div>
            </div>
        </div>
    )
}

export default Ranking