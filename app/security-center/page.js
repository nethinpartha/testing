"use client";

import React, { useState } from 'react';

function SecurityCenter() {
    const [activeTab, setActiveTab] = useState('Secure Banking Tips');

    const renderContent = () => {
        switch (activeTab) {
            case 'Secure Banking Tips':
                return (
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Tips for Secure Banking</h3>
                        <ul className="list-disc list-inside text-lg">
                            <li>Always use a strong password and PIN for all accounts.</li>
                            <li>Don't use your name or the name of your close relatives or friends as a password.</li>
                            <li>Do not use your phone number or date of birth either.</li>
                            <li>Do not use sequential numbers such as 1234 or 2468 as these are very easy to guess.</li>
                            <li>Always use a longer password (8 characters at least), a sentence is even better.</li>
                            <li>Use a mixture of uppercase, lowercase, numbers, and special characters.</li>
                            <li>Change your password and PIN as frequently as possible.</li>
                            <li>Do not share your password or PIN with anyone.</li>
                            <li>Do not write your password or PIN down.</li>
                            <li>Always make sure that there is no one looking over your shoulder when you are entering your PIN or password.</li>
                            <li>Never give your OTP (login code) to anyone over text or call.</li>
                            <li>Never give any personal banking details to anyone who calls claiming to be from your bank (PIN, password, OTP).</li>
                            <li>Always log out of banking portals whenever you are done with a transaction.</li>
                            <li>Enable your notifications to be able to receive alerts on any transaction that takes place on your account.</li>
                            <li>Be cautious of any SMS or text or email or call that creates a sense of urgency or panic.</li>
                            <li>Be cautious when using public Wi-Fi.</li>
                            <li>Do not use public devices when accessing your banking portals.</li>
                        </ul>
                    </div>
                );
            case 'General Security Tips':
                return (
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">General Security Tips</h3>
                        <p className="text-lg">
                            General tips to ensure your personal and financial safety across all online activities, including banking.
                        </p>
                        {/* Add more general security tips as needed */}
                    </div>
                );
            case 'Fraud Awareness':
                return (
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Fraud Awareness</h3>
                        <p className="text-lg">
                            Be aware of common fraud schemes and how to protect yourself against them.
                        </p>
                        {/* Add more fraud awareness tips as needed */}
                    </div>
                );
            case 'Report a Scam':
                return (
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Report a Scam</h3>
                        <p className="text-lg">
                            If you suspect a scam or have been a victim of fraud, follow these steps to report it.
                        </p>
                        {/* Add more information on reporting a scam */}
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-white text-gray-900">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-64" style={{ backgroundImage: `url('https://via.placeholder.com/2048x714')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white">SECURITY CENTER</h1>
                    </div>
                </div>
            </section>

            {/* Introduction Section */}
            <section className="max-w-7xl mx-auto py-12 px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">YOUR TRUST, OUR PRIORITY</h2>
                <p className="text-lg">
                    At GTI Bank, we understand that the security of your financial information is crucial. We have implemented robust security measures to ensure your banking experience is safe and secure. We begin with multi-factor authentication (MFA) to strengthen the verification process. By requiring multiple forms of identification, such as passwords and OTPs, we add an extra layer of protection to your accounts. Our strong password policies mandate the use of complex passwords and frequent updates, further reducing the risk of unauthorized access.
                </p>
            </section>

            {/* Features Section */}
            <section className="max-w-7xl mx-auto py-12 px-6 lg:flex lg:space-x-8">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <img src="https://via.placeholder.com/400x400" alt="Advanced Banking Security" className="rounded-lg shadow-lg" />
                </div>
                <div className="lg:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">ADVANCED BANKING SECURITY</h3>
                    <p className="text-lg">
                        In today’s digital age, the security of our bank’s online services is paramount to protecting sensitive financial information and maintaining customer trust. We are committed to providing a secure banking environment that safeguards our customers’ data and transactions.
                    </p>
                </div>
            </section>

            <section className="max-w-7xl mx-auto py-12 px-6 lg:flex lg:flex-row-reverse lg:space-x-reverse lg:space-x-8">
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <img src="https://via.placeholder.com/400x400" alt="Safeguarding Your Wealth" className="rounded-lg shadow-lg" />
                </div>
                <div className="lg:w-1/2">
                    <h3 className="text-2xl font-bold mb-4">SAFEGUARDING YOUR WEALTH</h3>
                    <p className="text-lg">
                        Network security is another critical focus area. We employ firewalls to monitor and control network traffic coupled with intrusion detection and prevention systems (IDPS) that help us identify and block malicious activities. Regular penetration testing and vulnerability scanning are conducted to ensure our systems are resilient against emerging threats.
                    </p>
                </div>
            </section>

            {/* Tabs Section */}
            <section className="max-w-7xl mx-auto py-12 px-6">
                <div className="flex justify-around mb-8">
                    <button
                        className={`p-4 text-center ${activeTab === 'Secure Banking Tips' ? 'text-red-500 border-b-4 border-red-500' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('Secure Banking Tips')}
                    >
                        Secure Banking Tips
                    </button>
                    <button
                        className={`p-4 text-center ${activeTab === 'General Security Tips' ? 'text-red-500 border-b-4 border-red-500' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('General Security Tips')}
                    >
                        General Security Tips
                    </button>
                    <button
                        className={`p-4 text-center ${activeTab === 'Fraud Awareness' ? 'text-red-500 border-b-4 border-red-500' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('Fraud Awareness')}
                    >
                        Fraud Awareness
                    </button>
                    <button
                        className={`p-4 text-center ${activeTab === 'Report a Scam' ? 'text-red-500 border-b-4 border-red-500' : 'text-gray-600'}`}
                        onClick={() => setActiveTab('Report a Scam')}
                    >
                        Report a Scam
                    </button>
                </div>

                {/* Tab Content */}
                <div className="mt-8">
                    {renderContent()}
                </div>
            </section>
        </div>
    );
}

export default SecurityCenter;
