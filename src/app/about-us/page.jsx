import Image from 'next/image'
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
                <div className=" rounded-lg box-border pb-8 mb-4">
                    <div className="pb-4"> 
                        <h1 className="font-bold text-4xl text-center">
                            {messages["mission-statement"].title}
                        </h1> 
                    </div>

                    <div className='p-5 pt-0'>
                        <p className="text-3xl text-center font-light">
                            "At MG Protax Services, our mission is to alleviate the stress and complexity of tax preparation for individuals and small businesses."
                        </p>
                    </div>                              
                
                    <div className="grid md:grid-cols-2">
                        <div className="rounded-lg box-border bg-green-400/50">
                            <h1 className="font-semibold text-center text-3xl pt-2 pb-2 m-2">
                                {messages.page}
                            </h1>
                            <p className="p-5 pt-0">
                                At MG Protax Services, our mission is to alleviate the stress and complexity of tax preparation for individuals and small businesses. We are dedicated to providing comprehensive and accurate tax solutions that empower our clients with financial confidence. Through our expert knowledge of tax codes, regulations, and strategies, we aim to optimize tax outcomes while ensuring compliance.
                            </p>
                            <p className="p-5 pt-1">
                                We believe that everyone deserves access to reliable and efficient tax services tailored to their unique financial situations. Our team of experienced professionals is committed to delivering personalized guidance, transparent communication, and top-notch customer service. We strive to foster long-lasting relationships with our clients, built on trust, integrity, and the consistent delivery of exceptional results.
                            </p>
                            <p className="p-5 pt-1">
                                With a deep understanding of the ever-evolving tax landscape, we stay ahead of industry trends and changes, constantly refining our methods to provide the best possible outcomes for our clients. Our mission is to help individuals and small businesses navigate the complexities of taxation, minimize liabilities, and maximize their financial well-being.
                            </p>
                        </div>
                        <div className="content-center m-3">
                            <Image className="rounded-lg" src="/office-image.jpg" width={600} height={600} alt="Office Image"></Image>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;