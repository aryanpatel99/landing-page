"use client"
import React from 'react'
import Container from '../Container'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { SkeletonOne } from './skeletons/first'
import { SkeletonTwo } from './skeletons/second'


export const FeaturesSecondary = () => {
    return (
        <section className='pt-10 md:pt-20 lg:pt-32  relative overflow-hidden mb-8'>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 divide-x divide-neutral-200 dark:divide-neutral-800">
                    <div className='p-8 pb-0 h-full flex flex-col items-start'>
                        <h2 className='text-lg font-bold text-neutral-800 dark:text-neutral-400'>Audit Trail</h2>
                        <CardDescription className='text-neutral-600 mt-2'>Tracks every agent action with full input-output visibility and timestamps.</CardDescription>
                        <CardSkeleton className='mt-4 w-full'>
                            <SkeletonOne />
                        </CardSkeleton>
                    </div>
                    <div className='p-8 pb-0 h-full flex flex-col items-start'>
                        <h2 className='text-lg font-bold text-neutral-800 dark:text-neutral-400'>Role-Based Access</h2>
                        <CardDescription className='text-neutral-600 mt-2'>Controls who can launch, review, or manage agents based on roles.</CardDescription>
                        <CardSkeleton className='mt-4 w-full'>
                            <SkeletonTwo />
                        </CardSkeleton>
                    </div>
                </div>
            </Container>
        </section>
    )
}



export const CardDescription = ({
    className,
    children
}: {
    className?: string,
    children: React.ReactNode
}) => {
    return (
        <p className={cn(" text-neutral-600 mt-2 max-w-sm text-balance", className)}>{children}</p>
    )
}


export const CardSkeleton = ({
    className,
    children
}: {
    className?: string,
    children?: React.ReactNode
}) => {
    return (
        <div className={cn('relative h-40  sm:h-60 flex flex-col md:h-80 overflow-hidden perspective-distant', className)}>
            {/* <div className="absolute inset-0 h-full w-full z-40 bg-white"></div> */}
            {children}
        </div>
    )
}