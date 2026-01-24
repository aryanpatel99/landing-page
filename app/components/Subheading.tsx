import { cn } from '@/lib/utils';
import React from 'react'
import Heading from './Heading';

type SubHeadingProps = {
    children: React.ReactNode;
    className?: string;
    as?: 'h1' | 'h2' | "p"
}& React.HTMLAttributes<HTMLHeadingElement>;

const SubHeading = ({
    children,
    className ,
    as = 'p',
    ...props
}: SubHeadingProps) => {
    const Tag = as;
  return (
    <Tag className={cn("text-base md:text-lg text-neutral-400 dark:text-neutral-600 max-w-xl font-inter", className)} {...props}>{children}</Tag>
  )
}

export default SubHeading 