"use client"

import { log } from 'console'
import React from 'react'
import { motion } from 'motion/react'
const LandingCloud = () => {
    const logos= [
        { title: 'Hello Machine' },
        { title: 'Granola' },
        { title: 'Vercel' },
        { title: 'Resend' },
        { title: 'Supabase' },
        { title: 'Raycast' },
    ]
  return (
    <section className='mt-4'>
        <h2 className='max-w-2xl mx-auto text-lg text-neutral-600 dark:text:400 text-center font-medium'>Trusted by modern operators across industries. <br /><span className='text-neutral-400'>From pilot to scale without chaos.</span></h2>
        <div className='grid grid-cols-2 md:grid-cols-3 max-w-3xl mx-auto mt-10'>
            {logos.map((logo, index) => (
                <motion.div
                key={index+logo.title}
                initial={{opacity:0,y:-10,filter:"blur(10px)"}}
                whileInView={{opacity:1,y:0,filter:"blur(0px)"}}
                transition={{delay:index*0.1 + 0.2,duration:0.3,ease:"easeInOut"}}
                className='mx-auto'
                >
                <div key={index}  className='p-4 grayscale hover:grayscale-0 transition-all duration-200 ease-in-out cursor-pointer mx-auto'>
                    <p className='text-neutral-500 text-2xl '>{logo.title}</p>
                </div>
                </motion.div>
            ))}
        </div>
    </section>
  )
}

export default LandingCloud