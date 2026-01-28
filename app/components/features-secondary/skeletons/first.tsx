"use client"

import { FileIcon, HubspotIcon, SalesForceIcon, SettingsIcon, SheetIcon } from "@/icons"
import { motion } from "motion/react"

export const SkeletonOne = () => {
    const items = [
        { title: "Connect Data", topIcon: <FileIcon className="size-4 text-white" />, desc: "Link CRMs, helpdesks, and APIs to give agents secure, role-based access.", tags: [{ text: 'SalesForce', icon: <SalesForceIcon className="size-3" /> }, { text: 'Hubspot', icon: <HubspotIcon className="size-3" /> }, { text: 'Sheet', icon: <SheetIcon className="size-3" /> }] },
        { title: "Connect Data", topIcon: <SettingsIcon className="size-4" />, desc: "Create workflows, decision points, and conditional actions for each task.", tags: [{ text: 'SalesForce', icon: <SalesForceIcon className="size-3" /> }, { text: 'Hubspot', icon: <HubspotIcon className="size-3" /> }, { text: 'Sheet', icon: <SheetIcon className="size-3" /> }] },
        { title: "Human-in-the-Loop", topIcon: <FileIcon className="size-4 text-white" />, desc: "Add reviews, approvals and escalations without slowing work.", tags: [{ text: 'SalesForce', icon: <SalesForceIcon className="size-3" /> }, { text: 'Hubspot', icon: <HubspotIcon className="size-3" /> }, { text: 'Sheet', icon: <SheetIcon className="size-3" /> }] },

    ]
    return (
        <div className='flex-1 rounded-t-3xl bg-neutral-100 dark:bg-neutral-900 dark:border-neutral-700 border space-y-2 border-neutral-200 max-w-sm mx-auto w-full h-full absolute inset-x-0 p-2'>
            {items.map((item,idx)=>(
                <Card key={idx} topIcon={item.topIcon} title={item.title} desc={item.desc} tags={item.tags}/>
            ))}
        </div>
    )
}

export const Card = ({ topIcon, title, desc, tags }: {
    topIcon: React.ReactNode,
    title: string,
    desc: string,
    tags: { text: string, icon: React.ReactNode }[]
}) => {

    const randomColorVars = ['--color-blue-500', '--color-green-500', '--color-red-500', '--color-yellow-500'];

    return (
        <motion.div 
        initial={{ opacity: 0,y:-10 ,scale:0.8 }}
        animate={{ opacity: 1,y:0,scale:1 }}
        transition={{ duration: 0.3 , ease: 'easeOut' }}
        className="p-4 shadow-black/10 border border-transparent rounded-[15px] bg-white dark:bg-neutral-800 flex items-start  gap-4 ring-1 ring-black/10">
            <div
                style={{ backgroundColor: `var(${randomColorVars[Math.floor(Math.random() * randomColorVars.length)]})` }}

                className="size-6 shrink-0 rounded-full bg-blue-500 mt-1 flex items-center justify-center">
                {/* <FileIcon className="size-4"/> */}
                {topIcon}
            </div>
            <div>
                <p className="text-lg font-bold text-neutral-800 dark:text-neutral-100">{title}</p>
                <p className="text-base text-neutral-500 dark:text-neutral-400">{desc}</p>
                <div className="mt-2 flex flex-row flex-wrap gap-2">

                    {tags.map((tag, idx) => (
                        <Tag key={idx} text={tag.text} icon={tag.icon} />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}


export const Tag = ({ text, icon }: {
    text: string,
    icon: React.ReactNode
}) => {
    return (
        <div className="flex items-center gap-1 px-1 py-0.5 border border-neutral-200 dark:border-neutral-600 rounded-sm text-sm">
            {icon}
            <p className="text-xs text-neutral-500 dark:text-neutral-400">{text}</p>
        </div>
    )
}