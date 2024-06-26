"use client"

import { Inter } from 'next/font/google'
import './globals.css'
import Header from "./components/Header"
import Footer from "./components/Footer"
import Subscribe from "./components/Subscribe"


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
      <body className='overflow-x-hidden' >
         <Header/> 
        {children}
        <Subscribe />
        <Footer/>
        
        </body>
    </html>
  )
}