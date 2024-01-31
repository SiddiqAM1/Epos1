import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ReactComponentElement } from 'react'
import Navbar from "@/components/navbar/Navbar"
import  Footer  from '@/components/footer/Footer'
import Contact from "@/components/contact/Contact"
import Whatsapp from "@/components/whatsapp/Whatsapp-Chat"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Epos Realty',
  description: 'Welcome to Epos Realty, where over 11 years of real estate expertise meet your property journey. With us, every property tells a unique story, and we're here to help you find yours. Explore homes with character and investments with potential. Get ready for seasoned advice, market insights, and a personalized approach to real estate. Because at Epos Realty, where every story begins here. For personalized consultations and property details, contact us at:',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body >
        <Navbar/>
        <Whatsapp/>
        {children}
        <Contact/>
        <Footer/>
        </body>
    </html>
  )
}
