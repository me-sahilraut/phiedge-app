import React from 'react'
import Slider from './Slider'
// import { CircularProgressbar } from 'react-circular-progressbar';
// import img from "../../asset/download.png"
// const percentage = 66;
const Header = () => {
    return (

        <div className='  bg-[#0E111C] bg-img'>
            {/* <CircularProgressbar value={percentage} text={`${percentage}%`} className='w-[2rem] h-[2rem]' />; */}
            <div >

                {/* <img src={img} alt='' /> */}
                <Slider />
            </div>
        </div>
    )
}

export default Header