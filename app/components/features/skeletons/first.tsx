import { cn } from '@/lib/utils'
import { IconCircleDashedCheck, IconClock, IconExclamationCircle, IconPrison, IconRipple } from '@tabler/icons-react'
import React from 'react'

export const SkeletonOne = () => {
    return (
        <div style={{
            transform: "rotateY(-20deg) rotateX(30deg) rotateZ(15deg) scale(1.2)"
        }} className='h-full w-full perspective-distant -translate-y-10 mask-radial-from-50% mask-r-from-50%'>
            <SkeletonCard
                className="absolute bottom-0 left-12 z-30 max-w-[90%]"
                icon={<IconCircleDashedCheck className='size-4' />}
                title="Campaign Planner"
                desc="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
                badge={<Badge
                    variant='danger'
                    text='120s' />} />
            <SkeletonCard
                className="absolute bottom-8 left-8 z-20"
                icon={<IconExclamationCircle className='size-4' />}
                title="Issue Tracker"
                desc="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
                badge={<Badge
                    variant='success'
                    text='10s' />} />
            <SkeletonCard
                className="absolute bottom-20 left-4 max-w-[80%] "
                icon={<IconPrison className='size-4' />}
                title="Risk Analysis"
                desc="Creates clear, ready-to-use campaign briefs using product info, audience data, and past results."
                badge={<Badge
                    variant='warning'
                    text='40s' />} />
        </div>
    )
}




// export const SkeletonCard = ({icons, title,desc,badge}:{
//     icons?: React.ReactNode,
//     title?: string,
//     desc?: string,
//     badge?: React.ReactNode 
// })=>{
//     return (<div className='max-w-[90%] bg-neutral-100 mx-auto w-full p-3 rounded-lg border border-neutral-300 dark:border-neutral-7 00'>
//         <div className="flex gap-3 items-center ">
//             <IconCircleDashedCheck className='size-4'/>
//             <p className='text-sm font-bold'>Campaign Planner</p>
//         <Badge variant='danger' text='New'/>
//         </div>
//         <p className='text-sm text-neutral-500 dark:text-neutral-400 font-medium mt-3'>Creates clear, ready-to-use campaign briefs using product info, audience data, and past results.</p>
//         <div className="flex items-center gap-2 mt-3">
//             <Tag text='Google Ads'/>
//             <Tag text='SaaS'/>
//             <Tag text='Content'/>
//         </div>
//     </div>
//     )
// }

export const Tag = ({ text }: {
    text: string
}) => {
    return (<div className='px-2 py-1 text-xs rounded-sm  bg-neutral-200 dark:bg-neutral-700 w-fit'>
        <span className='text-xs font-bold'>{text}</span>
    </div>)
}

export const SkeletonCard = ({ icon, title, desc, badge, className }: {
    icon: React.ReactNode,
    title: string,
    desc: string,
    badge: React.ReactNode,
    className: string
}) => {
    return (<div className={cn('max-w-[85%] h-fit my-auto bg-neutral-100 mx-auto w-full p-3 rounded-xl border border-neutral-300 dark:border-neutral-700 shadow-2xl ', className)}>
        <div className="flex gap-3 items-center ">
            {icon}
            <p className='text-sm font-normal'>{title}</p>
            {badge}
        </div>
        <p className='text-sm text-neutral-400 dark:text-neutral-400 font-medium mt-3'>{desc}</p>
        <div className="flex items-center gap-2 mt-3">
            <Tag text='Google Ads' />
            <Tag text='SaaS' />
            <Tag text='Content' />
        </div>
    </div>
    )
}

export const Badge = ({ variant, text }: {
    variant?: 'danger' | 'success' | 'warning',
    text: string
}) => {
    return (<div className={cn('px-1 py-1 rounded-full flex items-center gap-1 w-fit',
        variant === 'danger' && 'bg-red-100 text-red-800 border   border-red-300 dark:border-red-800',
        variant === 'success' && 'bg-green-100 text-green-800 border border-green-300 dark:border-green-800',
        variant === 'warning' && 'bg-yellow-100 text-yellow-800 border border-yellow-300 dark:border-yellow-800',
    )}>
        <IconClock className={cn('size-4')} />
        <IconRipple className={cn('size-4')} />
        <span className='text-xs font-bold'>{text}</span>
    </div>)
}