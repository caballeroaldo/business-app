import Image from 'next/image'
import Link from 'next/link'
import home from '../app/(messages)/home.json'

const messages = home;

export default function Home() {
  return (
      <div className="container mx-auto">
        
        <div className="rounded-lg box-border bg-transparent pl-5 pr-5 pb-5 m-4">
          <h1 className="font-semibold mb-2 pb-4 text-center text-4xl">
              Welcome To MG Protax Services!
          </h1>
          <p className="text-xl text-center font-light">
            {messages.welcomeMessage.p1}
          </p>
          <p className="text-xl text-center font-light">
            {messages.welcomeMessage.p2}
          </p>
        </div>

        <div className="md:rounded-full rounded-xl box-border bg-yellow-300 p-5 m-4">
          <h1 className="font-bold mb-2 text-center text-2xl">
              Announcements
          </h1>
          <p className="text-center">
            {messages.announcements.p1}
          </p>
          <p className='text-center'>
            {messages.announcements.p2}
          </p>
        </div>

        <div className="pr-5 pl-5">
          <div className="rounded-lg box-border m-1">
            <h1 className="font-semibold mb-2 text-center text-4xl pb-4">
            Let's Get Started
            </h1>
            <div className="grid md:grid-cols-2">
              <div className="font-bold">
                <p className="font-bold text-center text-3xl pb-3">
                  We Offer a Variety of Services
                </p>
                <p className="font-normal text-xl pb-2">
                  We Offer a Vast Selection of Services, tailored to your needs.
                </p>
                <p className="font-normal text-xl pb-2">                  
                As simple as a <strong className="font-bold">Single Tax Filing</strong>, <strong className="font-bold">ITIN Renewals</strong> to <strong className="font-bold">Bookkeeping</strong>, and now offering <strong className="font-bold">Public Notary</strong> 
                </p>
                <p className="font-bold text-center text-3xl md:pb-2 pt-5">
                  Ready to Get Started? 
                </p>
                <p className="font-normal text-xl">
                  Prepare for a great 2023 and beyond! Check out our <Link className="font-bold underline" href="/contact">Contact Page</Link> to Schedule an Appointment with Us
                </p>
              </div>
              <div className="rounded-md box-border md:pl-5 pt-3">
                <Image className="rounded" src='/front-page-image.jpg' width={400} height={400} alt="Due Diligence"/>
              </div>
            </div>  
          </div>

        </div>
      </div>
  )
}
