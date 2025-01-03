'use client'
import { ThemeProvider } from "next-themes"
export default function Providers({children}) {
  return (
    <ThemeProvider defaultTheme="system" attribute={"class"}  >
        <div className="min-h-screen select-none transition-colors duration-500">
            {children}
        </div>
    </ThemeProvider>
  )
}
