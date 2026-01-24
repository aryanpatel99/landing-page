import { cn } from '@/lib/utils';
import React from 'react'

type HeadingProps = {
    children: React.ReactNode;
    className?: string;
    as?: 'h1' | 'h2' 
}& React.HTMLAttributes<HTMLHeadingElement>;

const Heading = ({
    children,
    className ,
    as = 'h2',
    ...props
}: HeadingProps) => {
    const Tag = as;
  return (
    <Tag className={cn("text-2xl md:text-4xl lg:text-6xl tracking-tight font-bold font-display", className)} {...props}>{children}</Tag>
  )
}

export default Heading