import React from 'react'
import Header from './home/Header'
import Ability from './home/Ability'
import Goal from './home/Goal'
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Values from './home/Values';
import Approach from './home/Approach';

const Home = () => {
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
            <Ability />
            <Goal />
            <Values />
            <Approach />
        </div>
    )
}

export default Home