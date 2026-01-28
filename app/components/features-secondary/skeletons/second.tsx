"use client"

import { ChatGpt, FileIcon, GoogleSheet2, HubspotIcon, InstagramIcon, MetaIcon, SalesForceIcon, SettingsIcon, SheetIcon } from "@/icons"
import { cn } from "@/lib/utils"
import { motion } from "motion/react"
import { LogoIcon } from "../../Logo"


export const SkeletonTwo = () => {
    return (
        <div
            style={{
                transform: "rotateY(20deg) rotateX(20deg) rotateZ(-20deg)",
            }}
            className='flex-1 rounded-t-3xl flex items-center justify-center gap-2 w-full h-full absolute inset-x-0 p-2'>
            <CircleSkeleton className="flex items-center justify-center border-neutral-200 dark:bg-neutral-800 shadow-sm">
                <LogoIcon className="size-10 text-neutral-400" />
                {/* <div className="absolute  flex items-center justify-center bg-white border border-transparent ring-1 ring-black/10 rounded-sm animate-orbit [--translate-position:120px] [--orbit-duration:10s]"> */}
                <RevolvingCard >
                    <ChatGpt className="size-9 dark:text-white" />
                </RevolvingCard>
                {/* <div className="absolute  flex items-center justify-center bg-white border border-transparent ring-1 ring-black/10 rounded-sm animate-orbit [--translate-position:160px] [--orbit-duration:20s]"> */}
                <RevolvingCard className="[--translate-position:160px] [--orbit-duration:10s]">
                    <MetaIcon className="size-9 text-blue-500" />
                </RevolvingCard>
                {/* <div className="absolute  flex items-center justify-center bg-white border border-transparent ring-1 ring-black/10 rounded-sm animate-orbit [--translate-position:200px] [--orbit-duration:30s]"> */}
                <RevolvingCard className="[--translate-position:200px] [--orbit-duration:15s]">
                    <InstagramIcon className="size-9 text-red-500" />
                </RevolvingCard>
                <RevolvingCard className="[--translate-position:160px] [--orbit-duration:15s]">
                    <GoogleSheet2 className="size-9" />
                </RevolvingCard>
            </CircleSkeleton>
            <CircleSkeleton className=" shadow-sm border-neutral-100 dark:border-neutral-700 size-60 z-9 bg-neutral-100/80 dark:bg-neutral-800/80 relative">

            </CircleSkeleton>
            <CircleSkeleton className=" shadow-sm border-neutral-100 dark:border-neutral-700 size-80 z-8 bg-neutral-100/60 dark:bg-neutral-800/60" />
            <CircleSkeleton className=" shadow-sm border-neutral-100 dark:border-neutral-700 size-100 z-7 bg-neutral-100/40 dark:bg-neutral-800/40" />
            <CircleSkeleton className=" shadow-sm border-neutral-100 dark:border-neutral-700 size-120 z-6 bg-neutral-100/20 dark:bg-neutral-800/20" />
        </div>
    )
}


export const RevolvingCard = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
    return (
        <div className={cn("absolute flex items-center justify-center bg-white border border-transparent ring-1 ring-black/10 rounded-sm animate-orbit [--translate-position:120px] [--orbit-duration:6s] dark:bg-neutral-900 ", className)}>{children}</div>
    )
}


export const CircleSkeleton = ({ className, children }: { className?: string, children?: React.ReactNode }) => {
    return (
        <div className={cn("size-40 absolute z-10 rounded-full bg-white border border-transparent dark:border-neutral-700", className)}>{children}</div>
    )
}