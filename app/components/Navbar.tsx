"use client"
import { title } from 'process'
import React from 'react'
import Logo from './Logo'
import Container from './Container'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import LayoutSidebarRightIcon from '@/components/ui/layout-sidebar-right-icon'
import { XIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { init } from 'next/dist/compiled/webpack/webpack'

const links = [
    { title: 'Features', href: '/features' },
    { title: 'Product', href: '/product' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Socials', href: '/socials' },
]


const Navbar = () => {

    return (
        <div className='border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950'>
            <DesktopNavbar />
            <MobileNavbar />

        </div>
    )
}

export default Navbar

export const MobileNavbar = () => {
    const [open, setOpen] = React.useState(false);
    return (
        <div className='flex md:hidden px-4 py-2 justify-between '>
            <Logo />
            <button onClick={() => setOpen(!open)}><LayoutSidebarRightIcon size={20} /></button>
            <AnimatePresence>
                {open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, backdropFilter: "blur(10px)" }} exit={{ opacity: 0, backdropFilter: "blur(0px)" }} transition={{ duration: 0.2 }} className='fixed inset-0 h-full w-full bg-transparent backdrop-blur-lg z-50 px-4 py-2'>
                    <div className='flex justify-between gap-4'>
                        <Logo/>
                        <XIcon onClick={() => setOpen(false)} className='absolute right-2 top-2' size={20} />
                    </div>

                    <div className='flex flex-col items-center justify-center gap-6 mt-8'>
                    {links.map((link, i) => (
                          <motion.div key={i+link.title} initial={{opacity:0,y:-20}} animate={{opacity:1,y:0}} transition={{delay:i*0.1 + 0.2}  }>
                              <Link key={i} href={link.href} className="text- xl text-neutral-600 font-medium dark:text-neutral-400">{link.title}</Link>
                        </motion.div>
                    ))}
                    </div>
                </motion.div>}
            </AnimatePresence>
        </div>
    )
}



export const DesktopNavbar = () => {

    return (
        <Container className='items-center justify-between py-4 hidden lg:flex'>
            <Logo />
            <div className='flex items-center gap-4'>
                {links.map((link, i) => (
                    <Link key={i} href={link.href} className="text-sm text-neutral-600 font-medium dark:text-neutral-400">{link.title}</Link>
                ))}
            </div>
            <div className='flex items-center gap-4'>
                <Link href={"/login"} className='text-sm font-medium text-neutral-600 dark:text-neutral-400'>Login</Link>
                {/* <Link href={"/register"} className='text-sm font-medium text-neutral-600 dark:text-neutral-400'><Button variant="outline" className='text-sm font-medium'>Sign Up</Button></Link> */}
                <Link href={"/register"} className='text-sm font-medium text-neutral-600 dark:text-neutral-400 cursor-pointer'><Button>Sign Up</Button></Link>
            </div>
        </Container>

    )

}