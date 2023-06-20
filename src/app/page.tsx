import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import AboutMe from '../components/aboutMe'
import ContactUs from '../components/contactUs'
import ServiceInfo from '../components/serviceInfo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Header/>
      </div>
      <div className="container mx-auto font-mono">
        <AboutMe/>
        <ContactUs/>
        <ServiceInfo/>
      </div>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Footer/>
      </div>
    </main>
  )
}
