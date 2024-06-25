"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import Header from "./components/Header"
import Footer from "./components/Footer"


const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  
  children,
}: {
  children: React.ReactNode
}) {
  

  return (
    <html lang="en">
      <head>
        <title>TechNew</title>
        <meta name="description" content="TechNew" />
      </head>
      <body className="" >
        <Header/>
        {children}
        <Footer/>
        
        </body>
    </html>
  )
}