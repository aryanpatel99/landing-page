import React from 'react'
import Container from './Container'
import Heading from './Heading'
import SubHeading from './Subheading'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { cn } from '@/lib/utils'
import LandingImages from './LandingImages'

const Hero = () => {
  return (
    <section className='pt-10 md:pt-20 lg:pt-30 px-2 xl:px-0'>
        <Container>
            <Heading as='h1' className='mb-4'>Agents that do the work<br />Approvals that keep you safe.</Heading>
            <SubHeading className='py-5'>Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.</SubHeading>
            <div className='flex items-center gap-6 flex-wrap-reverse'>   
                <Button className='shadow-brand '>Start your free trial</Button>
                <Button variant={'outline'}>View role based demos</Button>
            </div>

            <LandingImages/>
        </Container>
    </section>
  )
}

export default Hero 