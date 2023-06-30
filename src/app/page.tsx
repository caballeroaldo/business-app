import Image from 'next/image'

export default function Home() {
  return (
      <div className="container mx-auto">
        
        <div className="grid grid-cols-2">
          <div className ="rounded box-border bg-slate-500 p-5 m-1">
            <h1 className="font-semibold mb-2">
              1. Home Page, We will put some basic stuff here
            </h1>
          </div>
          <div className="rounded box-border bg-slate-500 p-5 m-1">
            <h1 className="font-semibold mb-2">
            2. Home Page, We will put some basic stuff here
            </h1>
          </div>

        </div>
      </div>
  )
}
