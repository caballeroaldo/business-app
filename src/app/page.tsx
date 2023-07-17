import Image from 'next/image'
import home from '../app/(messages)/home.json'

const messages = home;

export default function Home() {
  return (
      <div className="container mx-auto">
        
        <div className="rounded-full box-border bg-yellow-300 p-5 m-4">
          <h1 className="font-semibold mb-2 text-center text-xl">
              Announcements
          </h1>
          <p className="text-center">
            {messages.annoucements.p1}
          </p>
          <p className='text-center'>
            {messages.annoucements.p2}
          </p>
        </div>

        <div className="pr-5 pl-5">
          <div className="rounded-lg box-border bg-stone-500/50 p-5 m-1">
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
              <div className="rounded-md box-border pl-5">
                <Image src='/mail.svg' width={100} height={100} alt="Email"/>
              </div>
            </div>  
          </div>

        </div>
      </div>
  )
}
