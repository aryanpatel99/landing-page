"use client"
import React from 'react'
import Container from '../Container'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { SkeletonOne } from './skeletons/first'
import { SkeletonTwo } from './skeletons/second'
import { IntegrationIcon, WorkFlowIcon } from '@/icons'


export const FeaturesSecondary = () => {
    return (
        <section className='pt-10 md:pt-20 lg:py-32  relative overflow-hidden mb-8'>
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 border-y border-neutral-200 dark:border-neutral-800 md:divide-x divide-y md:divide-y-0 divide-neutral-200 dark:divide-neutral-800">
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
                        <CardSkeleton className='mt-4 w-full mask-radial-from-50% mask-t-from-70%'>
                            <SkeletonTwo />
                        </CardSkeleton>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-15 md:mt-20  px-3 lg:px-0">
                    <div>
                        <div className='flex items-center gap-2'>
                            <WorkFlowIcon />
                            <h3 className='font-bold text-lg text-neutral-600 dark:text-neutral-400'>Workflow Automation</h3>
                        </div>
                        <p className='text-neutral-500 text-base mt-2 '>Automate campaigns, tickets and CRM updates without manual handoffs.</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-2'>
                            <IntegrationIcon/>
                            <h3 className='font-bold text-lg text-neutral-600 dark:text-neutral-400'>Integration Fabric</h3>
                        </div>
                        <p className='text-neutral-500 text-base mt-2 '>Connect CRMs, service desks, data warehouses and cloud apps seamlessly.</p>
                    </div>
                    <div>
                        <div className='flex items-center gap-2'>
                            <WorkFlowIcon />
                            <h3 className='font-bold text-lg text-neutral-600 dark:text-neutral-400'>Human-in-the-Loop</h3>
                        </div>
                        <p className='text-neutral-500 text-base mt-2 '>Add reviews, approvals and escalations without slowing work.</p>
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