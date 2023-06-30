import contactUs from "../(messages)/contact-us.json";

export const metadata = {
    title: 'Contact Us',
    description: 'Contact Information for Business Name',
  }

const ContactUs = () => {
    const messages = contactUs;

    return (
        <div className="container mx-auto">
            <div className="bg-blue-500 rounded box-border hover:bg-blue-700 duration-500 pt-6 pb-8 pl-5 mb-4">
                <h1 className="font-bold text-2xl text-center">
                    {messages.page}
                </h1>
                <h2 className="text-md font-semibold">
                    Find Us in {messages.address}
                </h2>
                <div className="pt-4">
                    <p className="text-sm">
                        <div className="font-semibold">Hours of Operation</div> 
                        {messages["hours-of-operation"]}
                    </p>
                </div>

                <div className="pt-4">
                    <p className="text-sm">
                        <div className="font-semibold">Contact Us</div> 
                        <div className="pb-2">
                            Email: {messages["contact-info"].email} 
                        </div>
                        <div className="pb-2">
                            Call: {messages["contact-info"]["phone-call"]}
                        </div>
                        <div>
                            Text: {messages["contact-info"]["phone-text"]}
                        </div>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;