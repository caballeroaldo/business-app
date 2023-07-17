import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/header'
import Footer from '../components/footer'


export const metadata = {
  title: 'Business Web App',
  description: 'Template for Business WebPages',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <div className="flex items-center justify-between p-24">
        <body className="h-screen bg-gradient-to-b from-green-200 to-amber-400">
          <Header/>
          {children}
          <Footer/>
        </body>
      </div>
    </html>
  )
}
