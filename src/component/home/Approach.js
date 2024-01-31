import React from 'react'

const Approach = () => {
    return (
        <div className='flex flex-col md:flex-row pt-[10rem] pb-[10rem]'>
            <div className='md:w-2/4 bg-[#0C262A] h-[40rem] px-8 space-y-10 pt-16'>
                <h1 className='text-5xl text-white font-semibold   ' data-aos="fade-down">PHI EDGE'S <span className='text-[#f5891d]'>3D APPROACH</span></h1>
                <div className='flex space-x-7' data-aos="fade-right">
                    <img src='https://phiedge.co.in/wp-content/uploads/catalyst.png' className='bg-[#f5891d] w-[5rem] h-[5rem] rounded-full' alt='' />
                    <span className='text-white '>
                        <h1 className='text-2xl font-bold'>DIAGNOSIS</h1>
                        <p className='text-lg'>A detailed and in-depth study of the issue</p>
                    </span>
                </div>

                <div className='flex space-x-7' data-aos="fade-right">
                    <img src='https://phiedge.co.in/wp-content/uploads/core-hr.png' className='bg-[#f5891d] w-[5rem] h-[5rem] rounded-full' alt='' />
                    <span className='text-white '>
                        <h1 className='text-2xl font-bold'>DESIGN</h1>
                        <p className='text-lg'>Customised and practical solutions</p>
                    </span>
                </div>

                <div className='flex space-x-7' data-aos="fade-right">
                    <img src='https://phiedge.co.in/wp-content/uploads/talent-aqui.png' className='bg-[#f5891d] w-[5rem] h-[5rem] rounded-full' alt='' />
                    <span className='text-white '>
                        <h1 className='text-2xl font-bold'>DELIVERY</h1>
                        <p className='text-lg'>PHI Edge consultants work closely along with company managers, implement and track outcome</p>
                    </span>
                </div>
            </div>

            <div className='md:w-2/4 h-[40rem] relative md:absolute md:right-0  '>

                <img src='https://kit.baliniz.com/hiro/wp-content/uploads/sites/24/2022/05/selective-focus-of-recruiters-looking-at-employee-showing-clipboard-during-job-interview.jpg' alt='' className='h-full w-full object-cover' />
                <div className='absolute bottom-10 md:bottom-20  flex flex-wrap gap-4 justify-center'>
                    <div className='w-[17rem] h-[14rem] bg-[#0B2350] rounded-lg text-center pt-14 space-y-2' data-aos="zoom-in">
                        <h1 className='text-6xl font-bold text-white '>15%</h1>
                        <p className='text-white font-medium'>
                            INCREASE IN PRODUCTIVITY
                        </p>
                    </div>
                    <div className='w-[17rem] h-[14rem] bg-[#0B2350] rounded-lg text-center pt-14 space-y-2' data-aos="zoom-in">
                        <h1 className='text-6xl font-bold text-white '>17%</h1>
                        <p className='text-white font-medium'>
                            IMPROVED ENGAGEMENT
                        </p>
                    </div>
                    <div className='w-[17rem] h-[14rem] bg-[#0B2350] rounded-lg text-center pt-14 space-y-2' data-aos="zoom-in">
                        <h1 className='text-6xl font-bold text-white '>20%</h1>
                        <p className='text-white font-medium'>
                            REDUCED ATTRITION
                        </p>
                    </div>
                    <div className='w-[17rem] h-[14rem] bg-[#0B2350] rounded-lg text-center pt-14 space-y-2' data-aos="zoom-in">
                        <h1 className='text-6xl font-bold text-white '>98%</h1>
                        <p className='text-white font-medium'>
                            CLIENT RETENTION
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Approach