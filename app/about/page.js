import React from 'react';
import directus from '@/app/_utils/directus';

function MissionVisionValues() {
    return (
        <div className="bg-white text-gray-900">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-[40vh]" style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/assets/9fc7bc22-f7c4-4151-aa88-e593c2c1fcf0')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-end justify-left">
                    <div className="text-center mb-10 ml-[10%]">
                        <h1 className="text-5xl font-bold text-white">MISSION, VISION & VALUES</h1>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto py-16 px-6">
                {/* Mission */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-4">MISSION</h2>
                    <p className="text-justify text-lg">
                        At GTI Bank our mission is to inspire our customers through inventive, secure, and accessible financial services. We are dedicated to establishing long-term relationships and fostering trust by putting security first, providing exceptional customer service, and evolving constantly to meet the financial needs of our diverse community.
                    </p>
                    <p className="text-justify text-lg mt-4">
                        We strive to enhance financial well-being and support the desires of our customers, employees, and stakeholders through integrity and hard work.
                    </p>
                </div>

                {/* Vision */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-4">VISION</h2>
                    <p className="text-justify text-lg">
                        Our vision at GTI Bank is to be the leading financial institution, renowned for our superior financial products and services, inventiveness, and security. By utilizing technology and promoting an inclusive and trustworthy culture, we hope to completely alter the banking industry.
                    </p>
                    <p className="text-justify text-lg mt-4">
                        Our goal is to enable people and companies to realize their financial potential while making a constructive impact on the communities we serve. We envision a future where our customers experience simple and secure banking products that fit to their needs and improve their financial stability as they expand.
                    </p>
                </div>

                {/* Values */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold mb-4">VALUES</h2>
                    <p className="text-justify text-lg">
                        At GTI Bank, our values define who we are and guide everything we do. These core principles reflect our commitment to excellence, integrity, and the well-being of our customers, employees, and the communities we serve. Our values are the foundation of our mission and vision, and they drive us to achieve our goals with a steadfast commitment to ethical conduct and social responsibility.
                    </p>
                    <ul className="list-disc list-inside text-lg mt-4">
                        <li>Integrity</li>
                        <li>Customer-Centricity</li>
                        <li>Excellence</li>
                        <li>Security</li>
                        <li>Inclusion</li>
                        <li>Responsibility</li>
                        <li>Professional Development</li>
                        <li>Community Engagement</li>
                    </ul>
                    <p className="text-justify text-lg mt-4">
                        By living these values every day, GTI Bank strives to create a positive, lasting impact on our customers, employees, and society as a whole. These values guide our decisions and actions, ensuring that we remain a trusted and respected financial institution dedicated to excellence and social responsibility.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default MissionVisionValues;
