// import { cn } from '@/lib/utils';
// import Link from 'next/link';

// import React from 'react'

// interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
//   variant?: 'primary' | 'secondary',
//   children: React.ReactNode;
//   className?: string;
// }

// const Button = ({
//     children,
//     className = "",
//     variant = "primary",
//     ...props
// }: ButtonProps) => {
//     const variantStyles = {
//         primary: 'bg-blue-600 text-white hover:bg-blue-700',
//         secondary: 'bg-gray-600 text-white hover:bg-gray-700',
//     }
//   return (
//     <Link                       
//       className={cn("px-4 py-3 rounded-sm",variantStyles[variant], className)}
//       {...props}
//     >
//         {children}
//     </Link>
//   )
// }

// export default Button