import React from 'react'

import { IoMdArrowDropright } from "react-icons/io";
const Ability = () => {

    return (
        // Section-2
        <div className='bg-[#f9f9f9] py-20'>
            <div className='flex lg:flex-row flex-col md:px-[7rem]  justify-center  overflow-hidden '>
                <div className=' gap-2  shadow-xl border border-black-100  lg:w-1/3   mt-16 ml-10 mx-5  os-block-2 ' data-aos="fade-right">
                    <h1 className='  text-[#003459] font-bold mt-5 text-3xl text-center'>STRENGTHS</h1>
                    <ul>
                        <li className='mt-3 text-[#003459] text-justify text-base  flex '><span ><IoMdArrowDropright className='w-[2rem] h-[2rem] ' /></span> 70+ collective Years of experience in people management brought by our directors and business heads</li>
                        <li className='mt-3 text-[#003459] text-justify text-base  flex '><span ><IoMdArrowDropright className='w-[2rem] h-[2rem] ' /> </span> Improved productivity and reduced attrition for our clients.</li>
                        <li className='mt-3 text-[#003459] text-justify text-base  flex '><span ><IoMdArrowDropright className='w-[2rem] h-[2rem] ' /> </span> Knowledge driven process supported by Technology</li>
                        <li className='mt-3 text-[#003459] text-justify text-base  flex '><span ><IoMdArrowDropright className='w-[2rem] h-[2rem] ' /> </span> One stop HR solutions provider</li>
                        <li className='mt-3 text-[#003459] text-justify text-base  flex '><span ><IoMdArrowDropright className='w-[2rem] h-[2rem] ' /> </span>  Wide sectorial expertise</li>
                        <li className='mt-3 text-[#003459] text-justify text-base  flex '><span ><IoMdArrowDropright className='w-[2rem] h-[2rem] ' /> </span> Unique 3D approach</li>
                        <li className='mt-3 text-[#003459] text-justify text-base  flex '><span ><IoMdArrowDropright className='w-[2rem] h-[2rem] ' /> </span>   98% client retention</li>
                        <li className='mt-3 text-[#003459] text-justify text-base  flex '><span ><IoMdArrowDropright className='w-[2rem] h-[2rem] ' /> </span>   Pan India presence</li>
                    </ul>
                </div>

                <div className=' gap-5  shadow-xl border border-black-100   lg:w-1/3  mt-16 ml-10 mx-5 os-block-2 ' data-aos="fade-up">
                    <h1 className='  text-[#003459] font-bold mt-5 text-3xl text-center'>PRESENCE</h1>
                    <p className='mt-3 text-[#003459] text-justify text-base   '>We have a pan-India presence dominantly in sectors notably Manufacturing, Start-up e-Commerce, Financial Services, Hospitality, IT, Construction & Realty, Academics.
                    </p>
                    <img src='https://phiedge.co.in/wp-content/uploads/piechart.jpg' className='pt-[3rem]' alt='pie-chart' />
                </div>

                <div className='  gap-5  shadow-xl border border-black-100   lg:w-1/3  mt-16 ml-10 mx-5 os-block-2 ' data-aos="fade-left">
                    <img src='https://phiedge.co.in/wp-content/uploads/India-Map.png' className='pt-[3rem]' alt='graph' />
                </div>



            </div>
        </div>
    )
}

export default Ability