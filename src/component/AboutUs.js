import React from 'react'
import Header from './about/Header'
import Director from './about/Director'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
const AboutUs = () => {
    useEffect(() => {
        Aos.init({
            delay: 200,
            duration: 1200,
            once: false,
        })
    }, []);
    return (
        <div>
            <Header />
            <Director />
        </div>
    )
}

export default AboutUs