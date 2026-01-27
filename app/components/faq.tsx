"use client"
import React from 'react'
import Container from './Container'
import { UserChatIcon } from '@/illustrations/general'
import Heading from './Heading'
import { IconMinus, IconPlus } from '@tabler/icons-react'
import { motion } from "motion/react"
import { cn } from '@/lib/utils'

export const FAQS = () => {
    const questions = [
        {
            question: "What is Agenforce AI?",
            answer: "Agenforce AI is a platform for building and managing AI agents."
        }, {
            question: "Who is Agenforce AI built for?",
            answer: "Agenforce AI is a platform for building and managing AI agents."
        }, {
            question: "How does Agenforce AI work?",
            answer: "Agenforce AI is a platform for building and managing AI agents."
        }, {
            question: "What are the benefits of using Agenforce AI?",
            answer: "Agenforce AI is a platform for building and managing AI agents."
        }, {
            question: "Is there a free tier available?",
            answer: "Agenforce AI is a platform for building and managing AI agents."
        }, {
            question: "Is Agenforce AI secure?",
            answer: "Agenforce AI is a platform for building and managing AI agents."
        }
    ]
    return (
        <section className='py-10 md:py-20 lg:py-32 relative overflow-hidden px-3 xl:px-0'>
            <Container>
                <UserChatIcon />
                <Heading className='my-10 md:my-15'>
                    Frequently Asked Questions
                </Heading>

                <div className="flex flex-col gap-4">
                    {questions.map((question, index) => (
                        <Question key={index} question={question.question} answer={question.answer} />
                    ))}
                </div>
            </Container>

        </section>
    )
}



export const Question = ({ question, answer }: { question: string, answer: string }) => {
    const [open, setOpen] = React.useState(false)
    return (
        <button onClick={() => setOpen(!open)} className='w-full rounded-3xl overflow-hidden bg-neutral-100 p-4 md:p-8'>
            <div className='flex items-center justify-between '>
                <h3 className='text-lg md:text-2xl font-bold font-display'>{question}</h3>
                <div className='relative size-6 rounded-full bg-black flex items-center justify-center'>
                    <IconMinus className={cn('size-6 text-white absolute inset-0 transition-all duration-200 ease-in-out', open && "scale-90 rotate-90 ease-in-out")} />
                    <IconPlus className={cn('size-6 text-white absolute inset-0 scale-0 -rotate-90 transition-all duration-200 ease-in-out', open && "scale-100 rotate-0 ease-in-out")} />
                </div>
            </div>
            {open && <motion.p
                key={String(open)}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
                style={{ height: open ? "auto" : 0 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                    duration: 0.2,
                    ease: "easeInOut"
                }}
                className='text-start mt-4 text-neutral-600 dark:text-neutral-400 '>{answer}</motion.p>}

        </button>

    )
}
