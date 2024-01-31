import React, { useEffect, useState } from 'react'
let timer;
const Goal = () => {
    const [counterState, setCounter] = useState(0)
    useEffect(() => {
        clearInterval(timer)
        timer = setInterval(() => {
            if (counterState === 100) {
                clearInterval(timer)
                return
            }
            setCounter(prev => prev + 1)


        }, 10)

        return () => clearInterval(timer)
    }, [counterState])
    return (
        // Section-3
        <div className='  overflow-hidden bg-image3 '>

            <div>{counterState}</div>
            <div className='flex flex-wrap flex-col md:flex-row  gap-5 md:justify-center  items-center mb-10 mx-auto md:mx-[1rem] pb-[8rem] pt-[5rem] '>
                <div className="flip-card w-[24rem] h-[20rem] sm:w-[28rem] sm:h-[23rem]   " data-aos="zoom-in-up">
                    <div className="flip-card-inner">
                        <div className="flip-card-front bg-white py-10 rounded-md  os-block-2 shadow-xl border border-black-100  ">
                            <h1 className='text-[#003459] font-bold uppercase text-4xl py-[4rem]'>VISION</h1>
                        </div>
                        <div className="flip-card-back text-left py-5 rounded-md text-2xl font-medium pt-5 px-4 shadow-lg border border-black-100 bg-white">
                            <div className='w-[23rem] mx-auto'>
                                <img alt='vision_image' src='https://phiedge.co.in/wp-content/uploads/vision-min.jpg' className='w-[23rem] h-[16rem] object-fill' />
                                <p className='text-left  font-medium  text-[#003459] text-lg'>To be among the top 10 people consulting & technology company in India catering to SMEs. </p>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="flip-card w-[24rem] h-[20rem] sm:w-[28rem] sm:h-[23rem]   ">
                    <div className="flip-card-inner">
                        <div className="flip-card-front bg-white py-10 rounded-md  os-block-2 shadow-xl border border-black-100  " data-aos="zoom-in-up">
                            <h1 className='text-[#003459] font-bold uppercase text-4xl py-[4rem]'>MISSION</h1>
                        </div>
                        <div className="flip-card-back text-left py-5 rounded-md  pt-5 px-4 shadow-lg border border-black-100 bg-white">
                            <div className='w-[23rem] mx-auto'>
                                <img alt='vision_image' src='https://phiedge.co.in/wp-content/uploads/mission-min.jpg' className='w-[27rem] h-[16rem] object-fill' />
                                <p className='text-left text-lg font-medium text-[#003459]'>To provide well researched people solutions to clients through technology thus improving people ROI. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Goal