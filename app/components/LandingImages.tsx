"use client"
import { cn } from '@/lib/utils'
import { delay } from 'motion'
import { motion } from 'motion/react'
import React from 'react'


const LandingImages = () => {
    return (
        // <div className='relative min-h-72 sm:min-h-80 md:min-h-100 lg:min-h-140 w-full pt-30 perspective-distant '>
        //     {/* <div className='absolute inset-x-0 bg-red-500 w-full h-full  z-50'></div> */}
        //     <motion.div
        //     initial={{opacity:0,y:-100}}
        //     animate={{opacity:1,y:0}}
        //     transition={{
        //         duration:0.2,
        //         ease:"easeInOut"
        //     }}
        //      className='perspective-[4000px]'>
        //         <img className={cn('absolute inset-0 rounded-md mask-r-from-30% mask-b-from-30% shadow')} 
        //         style={{transform:"rotateY(30deg) rotateX(20deg) rotateZ(-20deg)"}} height={400} src="./dashboard@3x.webp" alt="dashboardImg" />
        //     </motion.div>
        //     <motion.div
        //     initial={{opacity:0,y:-100}}
        //     animate={{opacity:1,y:0}} 
        //     transition={{
        //         delay:0.1,
        //         duration:0.5 ,
        //         ease:"easeInOut",
        //     }}
        //     className='perspective-[4000px] translate-x-30 -translate-y-40 md:-translate-y-40'>
        //         <img className={cn('absolute inset-0 rounded-md mask-r-from-50% mask-b-from-70% shadow')} 
        //         style={{transform:"rotateY(30deg) rotateX(20deg) rotateZ(-20deg)"}}  height={400} src="./dashboard@3x.webp" alt="dashboardImg" />
        //     </motion.div>
        // </div>

        <div className='relative min-h-200 pt-15 py-10 overflow-hidden mask-b-from-50%'>
            <img  src="./dashboard@3x.webp" alt="dashboardImg" />
            {/* <img className={cn('absolute inset-0 rounded-md mask-r-from-30% mask-b-from-30%  translate-x-30 translate-y-30 shadow')} src="./dashboard@3x.webp" alt="dashboardImg" /> */}
        </div>
    )
}

export default LandingImages


