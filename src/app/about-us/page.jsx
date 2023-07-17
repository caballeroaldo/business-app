import aboutUs from "../(messages)/about-us.json";

export const metadata = {
    title: 'Business About Us',
    description: 'Learn More about Business Name',
}

const AboutMe = () => {
    const messages = aboutUs;

    return (
        <div className="container mx-auto">
            <div className="pr-5 pl-5">
                <div className="bg-stone-400/50 rounded-lg box-border pt-6 pb-8 pl-5 mb-4">
                    <h1 className="font-bold text-2xl text-center">
                            {messages["mission-statement"].title}
                    </h1>            
                
                    <div className="grid grid-cols-2">
                        <div className="">
                            <h1 className="font-semibold text-xl pt-2 pb-2">
                                {messages.page}
                            </h1>
                            <p>
                                {messages["mission-statement"].description}
                            </p>
                        </div>
                        <div className="rounded-full box-border hover:bg-white duration-500 m-2">
                            <p className="p-2"> Image of Business Owner Goes Here</p>
                        </div>
                    </div>
                </div>
                <div className="rounded-lg box-border bg-stone-300/50 pt-6 pb-8 pl-5 mb-2">
                    <h1 className="font-bold text-2xl text-center">
                        History of Business Owner
                    </h1>
                    <p className="p-4">
                        {messages.history["p-1"]}
                    </p>
                    <p className="p-4">
                        {messages.history["p-2"]}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;