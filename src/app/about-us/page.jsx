import aboutUs from "../(messages)/about-us.json";

export const metadata = {
    title: 'Business About Us',
    description: 'Learn More about Business Name',
}

const AboutMe = () => {
    const messages = aboutUs;

    return (
        <div className="container mx-auto">
        
            <div className="bg-green-500 rounded box-border hover:bg-green-700 duration-500 pt-6 pb-8 pl-5 mb-4">
                <h1 className="font-bold text-2xl">
                    {messages["mission-statement"].title}
                </h1>
                <h1 className="font-semibold text-xl pt-2 pb-2">
                    {messages.page}
                </h1>
                <p>
                    {messages["mission-statement"].description}
                </p>
                <p>
                    {messages["mission-statement"].description}
                </p>
                <p>
                    {messages["mission-statement"].description}
                </p>
            </div>
        </div>
    );
}

export default AboutMe;