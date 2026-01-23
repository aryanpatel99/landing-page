import { title } from 'process'
import React from 'react'
import Logo from './Logo'
import Container from './Container'
import Link from 'next/link'
import { Button } from '@/components/ui/button'


const Navbar = () => {
    const links = [
        { title: 'Features', href: '/features' },
        { title: 'Product', href: '/product' },
        { title: 'Pricing', href: '/pricing' },
        { title: 'Socials', href: '/socials' },
    ]
  return (
    <div className='border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950'>
        <Container className='flex items-center justify-between py-4'>
            <Logo/>
            <div className='flex items-center gap-4'>
                {links.map((link,i)=>(
                     <Link key={i} href={link.href} className="text-sm text-neutral-600 font-medium dark:text-neutral-400">{link.title}</Link>
                ))}
            </div>
            <div className='flex items-center gap-4'>
                <Link href={"/login"} className='text-sm font-medium text-neutral-600 dark:text-neutral-400'>Login</Link>
                <Link href={"/register"} className='text-sm font-medium text-neutral-600 dark:text-neutral-400'><Button variant="outline" className='text-sm font-medium'>Sign Up</Button></Link>
            </div>

        </Container>

    </div>
  )
}

export default Navbar