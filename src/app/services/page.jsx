import services from "../(messages)/services.json";

export const metadata = {
    title: 'Services of Business',
    description: 'Services Offered by Business Name',
}


const ServiceInfo = () => {
    const messages = services;

    return (
        <div className="container mx-auto pl-5 pr-5">
            <div className="bg-stone-300/25 rounded-lg box-border p-5 mb-4">
                <h1 className="font-bold text-2xl pb-2">
                    {messages.page}
                </h1>
                <p className="">{messages.description}</p>
            </div>
        </div>
    );
}

export default ServiceInfo;