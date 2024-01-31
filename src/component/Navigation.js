import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from 'react-router-dom';
import logo from "../asset/logo.png"
const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [offset, setOffset] = useState(0);


    const [width, setWidth] = useState(window.innerWidth)
    const breakpoint = 1024;

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset);
        };
    }, []);
    var headerStyle;


    if (offset > 200) {

        headerStyle = " fixed top-0 z-10 w-full  fade-down ";

    }
    else {

    }


    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
        // subscribe to window resize event "onComponentDidMount"
        window.addEventListener("resize", handleResizeWindow);
        return () => {
            // unsubscribe "onComponentDestroy"
            window.removeEventListener("resize", handleResizeWindow);
        };
    }, []);
    return width > breakpoint ? (
        <div className='overflow-hidden'>
            <div className={headerStyle}   >
                <div className='flex justify-between shadow-2xl bg-white z-10 ' data-aos="fade-down">
                    <a href='#'><img src={logo} alt='' className=' my-2 md:ml-[3rem] ' /></a>
                    <div className='text-center flex flex-col text-[#003459] my-auto'>

                        <ul className=' flex space-x-5 mr-[7rem] '>
                            <li className=' font-medium hover:underline hover:underline-offset-8 cursor-pointer  '> <Link to="/" className='text-[#003459] hover:text-[#C059C5]' >
                                Home
                            </Link>


                            </li>

                            <li className='text-[#003459] font-medium hover:underline hover:underline-offset-8 cursor-pointer'>
                                <Link to="/about" className="hover:text-[#AC75D2]" aria-current="page" >About Us</Link>
                            </li>

                            <li className='text-[#003459] font-medium hover:underline hover:underline-offset-8 cursor-pointer'>
                                <Link to='' className="hover:text-[#AC75D2]" aria-current="page" >Business Verticals</Link>
                            </li>

                            <li className='text-[#003459] font-medium hover:underline hover:underline-offset-8 cursor-pointer'>
                                <Link to="" className='hover:text-[#AC75D2]'>Clients</Link>
                            </li>


                            <li className='text-[#003459] font-medium hover:underline hover:underline-offset-8 cursor-pointer'>
                                <Link to="" className='hover:text-[#AC75D2]'> Career</Link>
                            </li>

                            <li className='text-[#003459] font-medium hover:underline hover:underline-offset-8 cursor-pointer'>
                                <Link to="" className="hover:text-[#AC75D2]" aria-current="page">News & Events</Link>

                            </li>
                            <li className='text-[#003459] font-medium hover:underline hover:underline-offset-8 cursor-pointer'>
                                <Link to="" className="hover:text-[#AC75D2]" aria-current="page">Blog</Link>
                            </li>
                            <li className='text-[#003459] font-medium hover:underline hover:underline-offset-8 cursor-pointer'>
                                <Link to="" className="hover:text-[#AC75D2]" aria-current="page">Contact Us</Link>
                            </li>
                        </ul>
                    </div>




                </div>
            </div >

        </div>
    ) : (
        <div className='flex justify-between bg-white'>
            <div className='flex px-4 my-auto space-x-3'>
                <div className='hamburger'>
                    <GiHamburgerMenu className='inline w-[2rem] h-[3rem] my-2 text-[#003459] ' onClick={() => setIsOpen((prev) => !prev)}
                    />{isOpen && (
                        <div className=" absolute top-[3rem] flex flex-col items-start  p-2 w-[50%] rounded-md bg-white" onMouseLeave={() => setIsOpen(false)}>
                            <ul className='text-[#003459] space-y-8 mx-3'>
                                <Link to="/">  <li className='font-semibold  text-base  text-[#003459]'>Home</li></Link>
                                <Link to="/about"> <li className='font-semibold  text-base text-[#003459]'>About Us</li></Link>
                                <Link to=""> <li className='font-semibold  text-base text-[#003459]'></li>Business Verticals</Link>
                                <Link to=""> <li className='font-semibold  text-base text-[#003459]'>Clients </li></Link>
                                <Link to=""> <li className='font-semibold  text-base text-[#003459]'>Career</li></Link>
                                <Link to=""> <li className='font-semibold  text-base text-[#003459]'>News & Events</li></Link>
                                <Link to=""> <li className='font-semibold  text-base text-[#003459]'>Blog</li></Link>
                                <Link to=""> <li className='font-semibold  text-base text-[#003459]'>Contact Us</li></Link>
                                <Link to=""> <li className='font-semibold  text-base text-[#003459]'>Shop</li></Link>

                            </ul>
                        </div>
                    )}
                </div>
                <img src={logo} alt='' className='my-2 md:ml-[3rem] ' />

            </div>

            <div className='flex px-4 my-auto space-x-4'>

            </div>

        </div>
    )
}
export default Navigation