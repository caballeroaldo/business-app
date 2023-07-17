import contactUs from "../(messages)/contact-us.json";
import Image from 'next/image'


export const metadata = {
    title: 'Contact Us',
    description: 'Contact Information for Business Name',
  }

const ContactUs = () => {
    const messages = contactUs;

    return (
        <div className="container mx-auto">
            <div className="rounded box-border pr-5 pl-5">
                <h1 className="font-bold text-3xl text-center">
                    {messages["page-header"]}
                </h1>
                <h2 className="text-2xl text-center">
                    {messages["page-header2"]} {messages.address}
                </h2>
                <div className="grid md:grid-cols-2 md:gap-4">
                
                    <div className="md:mt-4 md:mb-4 mt-4 mb-2 box-border rounded-lg bg-amber-300">
                        <p className="p-3">
                            <div className="font-bold text-2xl text-center">Hours of Operation*</div> 
                            <div className="pt-2 font-semibold text-center text-xl">Monday Through Friday</div> 
                            <div className="text-center text-xl">{messages["hours-of-operation"]["mon-fri"]}</div> 

                            <div className="pt-2 font-semibold text-center text-xl">Saturday</div> 
                            <div className="text-center text-xl">{messages["hours-of-operation"]["saturday"]}</div>

                            <div className="pt-2 font-semibold text-center text-xl">Sunday</div> 
                            <div className="text-center text-xl">{messages["hours-of-operation"]["sunday"]}</div> 
                            
                            <div className="text-center text-lg">* {messages["hours-of-operation"]["exception"]}</div>
                        </p>
                    </div>

                    <div className="md:mt-4 md:mb-4 mt-2 box-border rounded-lg bg-stone-600/50">
                        <div className="p-4">
                            <div className="font-bold text-2xl text-center">Contact Us</div>
                            <h2 className="text-xl text-center">
                                {messages["page-header3"]}
                            </h2>
                            <div className="pb-2 flex gap-1">
                                <Image src='/mail.svg' width={20} height={20} alt="Email"/> 
                                <p className="font-semibold">{messages["contact-info"].email}</p>
                            </div>
                            <div className="pb-2 flex gap-1">
                                <Image src='/phone-call.svg' width={20} height={20} alt="Phone Call"/> 
                                <p className="font-semibold">{messages["contact-info"]["phone-call"]}</p>
                            </div>
                            <div className="flex gap-1">
                                <Image src='/phone-text.svg' width={20} height={20} alt="Phone Text"/>
                                <p className="font-semibold">{messages["contact-info"]["phone-text"]}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;