import Image from 'next/image'
import Header from '../components/header'
import Footer from '../components/footer'
import AboutMe from '../components/aboutMe'
import ContactUs from '../components/contactUs'
import ServiceInfo from '../components/serviceInfo'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 font-mono">
      <Header/>
      <div className="container mx-auto font-mono">
        <AboutMe/>
      </div>
      <Footer/>
    </main>
  )
}
