/* eslint-disable react/prop-types */
import image from '../assests/man.png';

const services = [
    {
        icon: '⚖️',
        title: 'Talk to Lawyer',
        description: 'Provide legal advice, draft contracts, handle litigation, and offer legal representation.',
    },
    {
        icon: '🧮',
        title: 'Talk to Chartered accountant',
        description: 'Provide financial auditing, taxation advice, and financial planning services.',
    },
    {
        icon: '@',
        title: 'Talk to Company secretary',
        description: 'Advisory on corporate governance, regulatory compliance, and secretarial services for businesses and enterprises.',
    },
    {
        icon: '🏛️',
        title: 'Talk to Intellectual Property Lawyer',
        description: 'Assist with trademarks, copyrights, patents, and intellectual property rights.',
    },
];

function ServiceCard({ icon, title, description }) {
    return (
        <button className="w-full rounded-lg shadow-md p-4 bg-[#9ea6ff] mb-4 hover:bg-[#7b84f0] focus:outline-none focus:ring-2 focus:ring-[#7b84f0] focus:ring-opacity-50">
            <div className="flex items-center mb-4">
                <span className="text-4xl font-bold mr-2 overflow-hidden">{icon}</span>
                <h2 className="text-lg font-semibold truncate">{title}</h2>
            </div>
            <p className="text-gray-700">{description}</p>
        </button>
    );
}

function App() {
    return (
        <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 mb-8 md:mb-0">
                <img src={image} alt="Illustration" className="rounded-lg " />
            </div>
            <div className="w-full md:w-2/3 md:ml-8">
                <h1 className="text-3xl font-bold mb-6 overflow-hidden">Our Services</h1>
                <div className="grid grid-cols-1 gap-4">
                    {services.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
