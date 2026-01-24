import React from 'react'
import Container from '../Container'
import Heading from '../Heading'
import SubHeading from '../Subheading'
import { Card, CardContent, CardCTA, CardSkeleton, CardTitle } from './card'
import { IconPlus } from '@tabler/icons-react'

const Features = () => {
    return (
        <Container className='py-10 md:py-20 lg:py-32'>
            <div className="flex items-baseline-last justify-between">
            <Heading as='h1'>Built for Fast Moving <br />
                Teams That Need Control.</Heading>
            <SubHeading>
                Agents work inside your existing tools, with built-in approvals, brand and policy guardrails, and full traceability. Every action is auditable, every outcome accountable.
            </SubHeading>

        </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 md:my-20">
                 <Card className='rounded-bl-3xl rounded-tl-3xl'>
                    <CardSkeleton/>
                    <CardContent>
                    <CardTitle>Prebuilt Agents, Tuned to Your Workflows</CardTitle>
                    <CardCTA>
                        <IconPlus size={20} /> 
                    </CardCTA>
                    </CardContent>
                 </Card>
                 <Card>
                    <CardSkeleton/>
                    <CardContent>
                    <CardTitle>Automate Handoffs, Reduce Ops Friction</CardTitle>
                    <CardCTA>
                        <IconPlus size={20} /> 
                    </CardCTA>
                    </CardContent>
                 </Card>
                <Card className='rounded-br-3xl rounded-tr-3xl'>
                    <CardSkeleton/>
                    <CardContent>
                    <CardTitle>Approvals, Guardrails, and Full Auditability</CardTitle>
                    <CardCTA>
                        <IconPlus size={20} /> 
                    </CardCTA>

                    </CardContent>
                 </Card>
            </div>
        </Container>
    )
}

export default Features