import React from 'react'
import './Hero.css';

import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup';
import {color, motion} from 'framer-motion'

const Hero = () => {
  return (
    <section id='hero' className='hero-wrapper'>
        <div className='paddings innerWidth flexCenter hero-container'>
            <div className="flexColStart hero-left">
                <div className="hero-title">
                    <div className="orange-circle"/>
                    
                    <motion.h1
                    initial={{y: "2rem", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{
                        duration: 3,
                        type: "spring"

                    }}
                     >
                        Revolutionizing BIM <br/><span className='blue-text'>with AI Powered </span><br/>
                         Precision
                    </motion.h1>
                </div>

                <div className="flexColStart hero-des">
                    <span className='md:text-lg lg:text-2xl text-[#8c8b8b] '>Transforming BIM Workflows with AI Innovation</span>
                    {/* <span className='secondaryText'>We transforms your vision into reality using cutting-edge technology and design</span> */}
                </div>

                


                <div className="flexCenter stats">
                    {/* <div className="flexColCenter stat"> */}
                        {/* <span>
                            <CountUp start={8800} end={9000} duration={4}/>
                            <span className='blue-text'>+</span>
                        </span> */}
                        {/* <span className='secondaryText'>
                            Premium Products
                        </span> */}
                    {/* </div> */}

                    {/* <div className="flexColCenter stat">
                        <span>
                            <CountUp start={1950} end={2000} duration={4}/>
                            <span className='blue-text'>+</span>
                        </span>
                        <span className='secondaryText'>
                            Happy Customers
                        </span>
                    </div> */}

                    {/* <div className="flexColCenter stat">
                        <span>
                            <CountUp end={29}/>
                            <span className='blue-text'>+</span>
                        </span>
                        <span className='secondaryText'>
                            Award Winning
                        </span>
                    </div> */}
                </div>
                <div className="flex gap-10">
                    <button  className='button'><a href='#value'>Our Services</a></button>
                    <button  className='button'><a href='#contact'>Get in Touch</a></button>
                    {/* <button href="#contact" className='button'></button> */}
                </div>
            </div>

            <motion.div
            initial={{x: "7rem", opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{
                duration: 3,
                type: "spring"
            }}
             className="flexCenter hero-right">
                {/* <div className='image-container'> */}
                    {/* <img src="./hero-image.png" alt="hero image" /> */}
                    {/* <img src="./osa-home.jpeg" alt="hero image" /> */}

                {/* </div> */}
                <div className='image-container'>
                    <video src="./osa-hero.mp4" autoPlay loop muted playsInline className="video-background" />
                </div>


            </motion.div>
        </div>
    </section>
  )
}

export default Hero
