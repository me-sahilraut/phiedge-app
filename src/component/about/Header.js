import React from 'react'

const Header = () => {
    return (
        <div className='bg-img2   pt-[10rem] space-y-7 flex lg:flex-row flex-col  '>
            <div className='lg:w-2/4 lg:pb-[10rem] space-y-3 ' data-aos="fade-right">
                <div className="   mx-10 ">
                    <h1 className='text-white text-5xl font-semibold font-mono '>
                        CATALYZING BUSINESS<br /><span className='text-[#f5891d]'>PERFORMANCE</span>
                    </h1>
                </div>
                <div className='  mx-10   '>
                    <p className='text-white text-xl font-medium'>Incorporated in 2010, Phi Edge Talent Enhancers has had a significant growth under the leadership of the directors and business heads together bringing in over decades of people expertise from across sectors and geographies. Today, the firm (head quartered in Pune) has grown to a team of 25 + employees with a pan India presence. Over the years, their services have expanded from Core HR (End To End HR) to include Strategic HR, Talent Acquisition and Catalyst(Business Performance and review system) catering to various industries namely Manufacturing, Financial Services, Real-estate, Hospitality, Construction, Academics, and Information Technology, etc.</p>
                </div>
            </div>

            <div className='lg:w-2/5 pb-[5rem] ' >
                <div className=' flex flex-wrap gap-10 justify-center   ' data-aos="zoom-in">
                    <div className='w-[11rem] h-[10rem] bg-[#0B2350] rounded-lg text-center pt-8 space-y-2'   >
                        <h1 className='text-6xl font-bold text-white '>15%</h1>
                        <p className='text-white font-medium'>
                            INCREASE IN PRODUCTIVITY
                        </p>
                    </div>
                    <div className='w-[11rem] h-[10rem] bg-[#0B2350] rounded-lg text-center pt-8 space-y-2' >
                        <h1 className='text-6xl font-bold text-white '>17%</h1>
                        <p className='text-white font-medium'>
                            IMPROVED ENGAGEMENT
                        </p>
                    </div>
                    <div className='w-[11rem] h-[10rem] bg-[#0B2350] rounded-lg text-center pt-8 space-y-2' >
                        <h1 className='text-6xl font-bold text-white '>20%</h1>
                        <p className='text-white font-medium'>
                            REDUCED ATTRITION
                        </p>
                    </div>
                    <div className='w-[11rem] h-[10rem] bg-[#0B2350] rounded-lg text-center pt-8 space-y-2' >
                        <h1 className='text-6xl font-bold text-white '>98%</h1>
                        <p className='text-white font-medium'>
                            CLIENT RETENTION
                        </p>
                    </div>
                </div>
            </div >
        </div >
    )
}

export default Header