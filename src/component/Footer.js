import React from 'react'
import logo from "../asset/logo.png"
const Footer = () => {
    return (
        <div className=' bg-[hsl(227,33%,8%)] bg-img w-screen h-screen flex justify-center'>
            <div className='space-y-5 pt-10 w-4/5'>
                <img src={logo} alt='' className='mx-auto' />
                <div>
                    <h1 className='text-4xl font-bold text-white text-center'>Catalyzing Business <span className='text-[#f5891d]'> Performance</span></h1>
                </div>
                <div className='flex justify-between pt-20'>
                    <div className='text-white space-y-3'>
                        <h1 className='text-2xl font-bold text-[#f5891d]'>MENU</h1>
                        <ul className='text-lg font-medium space-y-2'>
                            <li className='  hover:underline  hover:underline-offset-8 cursor-pointer'>Home</li>
                            <li className='  hover:underline  hover:underline-offset-8 cursor-pointer'>About Us</li>
                            <li className='  hover:underline  hover:underline-offset-8 cursor-pointer'>Business Verticals</li>
                            <li className='  hover:underline  hover:underline-offset-8 cursor-pointer'>Clients</li>
                            <li className='  hover:underline  hover:underline-offset-8 cursor-pointer'>Career</li>
                            <li className='  hover:underline  hover:underline-offset-8 cursor-pointer'>News & Events</li>
                            <li className='  hover:underline  hover:underline-offset-8 cursor-pointer'>Blog</li>
                            <li className='  hover:underline  hover:underline-offset-8 cursor-pointer'>Contact Us</li>
                        </ul>
                    </div>

                    <div className='text-white w-[20rem] space-y-3'>
                        <h1 className='text-2xl font-bold text-[#f5891d]'>ADDRESS</h1>
                        <p className='text-lg font-medium'>Office 605, B Wing, Amar Business zone, Veerbhadra Nagar, Baner, Pune, Maharashtra 411045.</p>
                    </div>

                    <div className='text-white space-y-3'>
                        <h1 className='text-2xl font-bold text-[#f5891d]'>EMAIL</h1>
                        <p className='text-lg font-medium'>admin@phiedge.co.in</p>
                    </div>

                    <div className='text-white space-y-3'>
                        <h1 className='text-2xl font-bold text-[#f5891d]'>CONTACT</h1>
                        <ul className='text-lg font-medium space-y-3'>
                            <li>+91-8149425450</li>
                            <li>+91-9923043450</li>
                            <li>+91-7276214928</li>
                        </ul>
                    </div>
                    {/* <div>
                        <h1>FOLLOW US ON</h1>

                    </div> */}
                </div>

            </div>
        </div >
    )
}

export default Footer