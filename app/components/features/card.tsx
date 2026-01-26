import { cn } from '@/lib/utils'
import React from 'react'

export const Card = ({
    className,
    children
}:{
    className?: string,
    children: React.ReactNode
}) => {
  return (
    <div className={cn(" max-w-lg mx-auto  bg-neutral-50 dark:bg-neutral-800 rounded-lg")}>{children} </div>
  )
}


export const CardContent = ({
    className,
    children
}:{
    className?: string,
    children: React.ReactNode
})=>{
    return (
        <div className={cn("px-4 pb-6 md:pb-12 flex items-center justify-between", className)}>{children}</div>
    )
}

export const CardCTA = ({
    className,
    children,
    ...rest
}:{
    className?: string,
    children: React.ReactNode
})=>{
    return (
        <div className={cn('size-5 md:size-10 rounded-full border border-neutral-300 active:scale-95 shrink-0 dark:border-neutral-800 flex items-center justify-center transition duration-200')} {...rest}>{children}</div>
    )
}   

export const CardTitle = ({
    className,
    children
}:{
    className?: string,
    children: React.ReactNode
})=>{
    return (
        <h3 className={cn("text-lg font-bold font-display md:text-2xl", className)}>{children}</h3>
    ) 
}


export const CardSkeleton = ({
    className,
    children
}:{
    className?: string,
    children? : React.ReactNode
}) => {
    return (
        <div className={cn('relative h-72  md:h-80 overflow-hidden perspective-distant',className) }>
            {/* <div className="absolute inset-0 h-full w-full z-40 bg-white"></div> */}
            {children}
        </div>
    )
}