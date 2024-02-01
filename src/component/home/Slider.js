import React, { useEffect, useState } from 'react'
import { data } from '../../mockData/sliderData';

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0);
    const handelPrevImage = () => {
        if (slideIndex === 0) {
            setSlideIndex(data.length - 1)
        } else {
            setSlideIndex(slideIndex - 1);
        }
    }

    const handelNextSlide = () => {
        setSlideIndex((slideIndex + 1) % data.length);
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            handelNextSlide()
        }, 7000);
        return () => {
            clearTimeout(timer);
        }
    }, [slideIndex]);
    return (
        <div className=''>
            {/* <button className='font-bold text-lg' onClick={() => handelPrevImage()} >prev</button> */}
            <div className='w-3/5 h-full  pt-[20rem] px-7 pb-[16rem]'>
                <h1 className='text-white text-6xl font-semibold ' data-aos="fade-right">{data[slideIndex]}</h1>

            </div>
            {/* <button className='font-bold text-lg' onClick={() => handelNextSlide()}>next</button> */}
        </div>
    )
}

export default Slider