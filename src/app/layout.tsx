import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../components/header'
import Footer from '../components/footer'

const inter = Inter({ subsets: ['latin'] })

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
      <div className="flex min-h-screen flex-col items-center justify-between p-24 font-mono">
        <body className={inter.className}>
          <Header/>
          {children}
          <Footer/>
        </body>
      </div>
    </html>
  )
}
