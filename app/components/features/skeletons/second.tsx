"use client"
import { cn } from '@/lib/utils'
import { IconCircleCheckFilled, IconCircleDashedCheck, IconLoader2, IconRipple } from '@tabler/icons-react'
import React from 'react'
import { Badge } from './first'

export const SkeletonSecond = ({

}) => {
  return (
    <div
      style={{
        transform: "rotateX(10deg) rotateY(30deg) rotateZ(-30deg)"
      }}
      className={cn('group max-w-[85%] h-full my-auto bg-neutral-100 dark:bg-neutral-900 mx-auto w-full p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 shadow-2xl', "perspective-distant translate-x-8 mask-radial-from-50% mask-b-from-60%", "[--pattern-fg:var(--color-neutral-900)]/5 dark:[--pattern-fg:var(--color-white)]/10 flex flex-col ")}>
      <div className="flex gap-3 items-center ">
        <IconCircleDashedCheck className='size-4' />
        <p className='text-sm font-normal'>Campaign Planner</p>
      </div>
      <div className='relative flex-1 mt-4 bg-neutral-200/30 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 rounded-2xl '>
        <Pattern />
        <div className='absolute translate-x-4 -translate-y-4 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 inset-0 bg-white dark:bg-neutral-900 h-full w-full divide-y divide-neutral-300 dark:divide-neutral-700 rounded-2xl shadow overflow-hidden'>
          <Row icon={<IconCircleCheckFilled className='size-5 text-green-600/80' />} text="Fetching Data..." time='10s' />
          <Row icon={<IconCircleCheckFilled className='size-5  text-green-600/80' />} text="Processing Data..." time='20s' />
          <Row icon={<IconCircleCheckFilled className='size-5 text-green-600/80' />} text="Performing Action" time='30s' />
          <Row icon={<IconCircleCheckFilled className='size-5 text-green-600/80' />} text="Waiting" time='40s' />
          <Row icon={<IconLoader2 className='size-5 text-yellow-600/70 animate-spin' />} text="Generating Report" time='50s' />
        </div>
      </div>
    </div>
  )
}


export const Row = ({ icon, text, time }: {
  icon: React.ReactNode,
  text: string,
  time: string
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center gap-2">
        <div className='flex items-center justify-center size-5'>

          {icon}
        </div>
        <p className='text-neutral-500 font-medium text-sm'>{text}</p>
      </div>
      <div className='flex items-center gap-1 text-neutral-400'>
        <IconRipple className='size-4' />
        <p className='text-[10px] font-bold'>{time}</p>
      </div>
    </div>
  )
}

const Pattern = () => {
  return (
    <div className='absolute inset-0  bg-[repeating-linear-gradient(315deg,var(--pattern-fg)_0,var(--pattern-fg)_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] bg-fixed [--pattern-fg:rgba(0,0,0,0.08)] dark:[--pattern-fg:rgba(255,255,255,0.1)]'></div>
  )
}