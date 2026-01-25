import React from 'react'
import Container from './Container'
import Heading from './Heading'
import SubHeading from './Subheading'
import { Button } from '@/components/ui/button'
import LandingImages from './LandingImages'

const Speed = () => {
  return (
    <Container className='py-10 md:py-20 lg:py-10'>
        
        <Heading as='h2' className='mb-4'>Built for Speed<br />Designed for Scale</Heading>
            <SubHeading className='py-5'>Deploy AI agents that plan, act through your tools, and report outcomes—without changing how your teams work.</SubHeading>
            <LandingImages/>
    </Container>
  )
}

export default Speed