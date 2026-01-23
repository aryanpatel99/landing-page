"use client"
import { MoonIcon, SunIcon } from 'lucide-react'
import { useTheme } from 'next-themes'
import React, { useEffect, useState } from 'react'

const ModeToggle = () => {
  const { theme, setTheme } = useTheme()
  const [systemTheme, setSystemTheme] = useState<"light" | "dark">("light")
  const [mounted, setMounted] = useState(false)

  useEffect(()=>{

    setMounted(true)
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')

    const handleChange = (e: MediaQueryListEvent) =>{
      setSystemTheme(e.matches ? "dark" : "light")
    }

    mediaQuery.addEventListener("change", handleChange)

    return ()=> mediaQuery.removeEventListener("change", handleChange)

  },[])

  if(!mounted) return null

  const SWITCH = () => {
    switch (theme) {
      case "light":
        setTheme("dark")
        break;
      case "dark":
        setTheme("light")
        break
      case "system":
        setTheme(systemTheme === "light" ? "dark" : "light")
        break
      default:
        setTheme("light")
        break
    }
  }

  return (
    <button onClick={SWITCH} className='flex items-center justify-center relative'>
      <SunIcon size="24" className='absolute inset-0 rotate-0 scale-100 dark:rotate-90 dark:scale-0 transition-all duration-200' />
      <MoonIcon size="24" className='absolute inset-0 rotate-90 scale-0 dark:rotate-0 dark:scale-100 transition-all duration-200' />
    </button>
  )
}

export default ModeToggle