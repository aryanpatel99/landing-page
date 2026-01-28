import React from 'react'
import Container from './Container'
import Logo from './Logo'
import SubHeading from './Subheading'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { IconSend } from '@tabler/icons-react'
import ModeToggle from './mode-toggle'

const Footer = () => {

    const links = [
        {
            title: "Agent Simulator",
            href: "#"
        },
        {
            title: "AI Workflows",
            href: "#"
        },
        {
            title: "Agent Builder",
            href: "#"
        },
        {
            title: "Analytics Dashboard",
            href: "#"
        },
        {
            title: "API Integration",
            href: "#"
        },
        {
            title: "Enterprise Solutions",
            href: "#"
        },
    ]

    const companyLinks = [
        {
            title: "About Us",
            href: "#"
        },
        {
            title: "Careers",
            href: "#"
        },
        {
            title: "Press",
            href: "#"
        },
        {
            title: "Contact",
            href: "#"
        },
        {
            title: "Blog",
            href: "#"
        },
    ]


    return (
        <footer className=' perspective-distant overflow-hidden border-t border-neutral-200 dark:border-neutral-800 py-10 md:py-20 lg:py-32 px-3 xl:px-0'>
            <Container className='grid grid-cols-2 md:grid-cols-5 gap-10 relative z-20'>
                <div className='col-span-2 flex flex-col gap-4 items-start'>
                    <Logo />
                    <SubHeading>Safe, observable, outcome-driven AI</SubHeading>
                    <Button className=''>Start a 30-day trial</Button>
                </div>
                <div className='flex flex-col gap-2'>
                    <h4 className='text-base font-bold text-neutral-400 dark:text-neutral-100 font-display mb-4'>Products</h4>
                    <ul className='flex flex-col gap-2 list-none'>
                        {links.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} className='text-neutral-700 text-sm font-display dark:text-neutral-400 hover:text-black dark:hover:text-neutral-100 transition-colors duration-200 ease-in-out'>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='flex flex-col gap-2'>
                    <h4 className='text-base font-bold text-neutral-400 dark:text-neutral-100 font-display mb-4'>Company</h4>
                    <ul className='flex flex-col gap-2 list-none'>
                        {companyLinks.map((link, index) => (
                            <li key={index}>
                                <Link href={link.href} className='text-neutral-700 text-sm font-display dark:text-neutral-400 hover:text-black dark:hover:text-neutral-100 transition-colors duration-200 ease-in-out'>{link.title}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='col-span-2 md:col-span-1 flex flex-col gap-4 px-2'>
                    <h4 className='text-base font-bold text-neutral-400 dark:text-neutral-100 font-display'>Newsletter</h4>
                    <div className='border border-neutral-100 p-px bg-neutral-100  rounded-md flex items-center justify-center '>
                        <input autoComplete='email' type="text" placeholder='Your email' className='min-w-0 flex-1 bg-transparent outline-none px-2 py-2 text-neutral-700 dark:text-neutral-400 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 font-display text-sm' />
                        <Button className='shrink-0 h-9 w-9 p-0 rounded-sm active:scale-95 dark:bg-neutral-800 dark:hover:bg-neutral-700 transition-all duration-200 ease-in-out'><IconSend className='text-white' size={20} /></Button>
                    </div>
                    <p className='text-sm text-neutral-600 dark:text-neutral-400 font-display'>Get the latest product news and behind the scenes updates.</p>
                </div>

            </Container>

            <Container className='flex flex-col sm:flex-row items-center justify-between mt-10 relative z-20'>
                <p className='text-sm text-neutral-600 dark:text-neutral-400 font-display'>&copy; {new Date().getFullYear()} Agenforce AI. All rights reserved.</p>
                <div className='flex items-center flex-col gap-4'>
                    <div className="flex items-center gap-2">
                    <Link href="#" className='text-neutral-700 text-sm font-display dark:text-neutral-400 hover:text-black dark:hover:text-neutral-100 transition-colors duration-200 ease-in-out'>Privacy Policy</Link>
                    <Link href="#" className='text-neutral-700 text-sm font-display dark:text-neutral-400 hover:text-black dark:hover:text-neutral-100 transition-colors duration-200 ease-in-out'>Terms of Service</Link>
                    </div>
                <div className="flex">
                    <ModeToggle/>
                </div>
                </div>
            </Container>

            <div className="flex items-center justify-center gap-20 h-[200%] absolute -inset-x-[150%] -inset-y-40 bg-size-[40px_40px] bg-[linear-gradient(to_right,var(--color-neutral-100)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-100)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,var(--color-neutral-900)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-neutral-900)_1px,transparent_1px)] mask-radial-from-50%" style={{ transform: "rotateX(60deg)" }}></div>

        </footer>
    )
}

export default Footer