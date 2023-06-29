import services from "../(messages)/services.json";

export const metadata = {
    title: 'Services of Business',
    description: 'Services Offered by Business Name',
}


const ServiceInfo = () => {
    const messages = services;

    return (
        <div className="container mx-auto">
            <div className="bg-red-500 rounded box-border hover:bg-red-700 duration-500 pt-8 pb-8 pl-5 mb-4">
                <h1 className="font-bold text-2xl pb-2">
                    {messages.page}
                </h1>
                <p className="font-mono">{messages.description}</p>
            </div>
        </div>
    );
}

export default ServiceInfo;