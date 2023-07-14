import Image from 'next/image'
import home from '../app/(messages)/home.json'

const messages = home;

export default function Home() {
  return (
      <div className="container mx-auto">
        
        <div className="rounded box-border bg-yellow-600 p-5 m-1">
          <h1 className="font-semibold mb-2 text-center text-xl">
              Announcements
          </h1>
          <p>
            {messages.annoucements.p1}
          </p>
          <p>
            {messages.annoucements.p2}
          </p>
        </div>

        <div className="grid grid-cols-1">
          <div className="rounded box-border bg-yellow-500 p-5 m-1">
            <h1 className="font-semibold mb-2 text-center text-xl">
            Services | Photos of Office
            </h1>
            <div className="grid grid-cols-2">
              <div className="font-bold">
                <p>
                  {messages.offeredServices.firstSer}
                </p>
                <p>
                  {messages.offeredServices.secondSer}
                </p>
                <p>
                  {messages.offeredServices.thirdSer}
                </p>
                <p>
                  {messages.offeredServices.fourthSer}
                </p>
              </div>
              <div className="rounded box-border hover:bg-slate-50 pl-5">
                <Image src='/mail.svg' width={300} height={300} alt="Email"/>
              </div>
            </div>  
          </div>

        </div>
      </div>
  )
}
