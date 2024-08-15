import React from 'react';

function CorporateProfile() {
    return (
        <div className="bg-white text-gray-900">
            <section className="relative bg-cover bg-center h-screen" style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/assets/04c5c5ad-393c-4c5e-847b-279c32ec8835` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-left">
                    <div className="text-left  ml-[10%]">
                        <h1 className="text-5xl font-bold text-white">CORPORATE PROFILE</h1>
                        <p className="mt-4 text-lg text-white max-w-xl mx-auto">
                            GTI Bank is a premier financial institution committed to delivering exceptional banking services and solutions to individuals, businesses, and communities. With a strong foundation built on trust, integrity, and innovation, we have established ourselves as a reliable partner in financial growth and stability. Our comprehensive range of products and services is designed to meet the diverse needs of our customers, ensuring their financial well-being and success.
                        </p>
                    </div>
                </div>
            </section>

            <section className="max-w-7xl mx-auto py-16 px-6">
                <div className="lg:flex lg:items-center">
                    <div className="lg:w-1/2  mr-[10%]">
                        <h2 className="text-3xl font-bold mb-4">OUR COMMITMENT</h2>
                        <p className="text-lg mb-4 text-justify">
                            We are committed to creating a banking environment that prioritizes the financial well-being of our customers. Our focus is on providing personalized, efficient, and secure services that cater to the unique needs of our clients. We believe in building long-lasting relationships based on trust, transparency, and mutual respect.
                        </p>
                        <p className="text-lg text-justify">
                            At GTI Bank, our heritage is defined not by our years in existence, but by the strength of our commitment to our customers and our unwavering dedication to integrity and excellence. We are excited to build a legacy of trust and innovation as we grow and serve our community.
                        </p>
                    </div>
                    <div className="lg:w-1/2 mt-8 lg:mt-0">
                        <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/01d3fb0e-d50c-4a7b-9779-3055ddf476b3`} alt="Our Commitment" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>

            <section className="bg-pink-100 py-16 px-6">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">YOUR FINANCIAL OPPORTUNITIES WITH DEVELOPMENT AND INTEGRITY</h2>
                    <p className="text-lg mb-4  text-justify">
                        Founded on the principles of trust, integrity, and customer-centricity, GTI is here to grow from a local bank into a leading financial institution. As a newly established financial institution, GTI Bank was founded with a vision to redefine the banking experience in the modern age. Although we are new, we are built on the core principles of trust, integrity, and customer-centricity. We have assembled a team of experienced banking professionals who bring a wealth of knowledge and expertise to our institution.
                    </p>
                    <p className="text-lg  text-justify ">
                        Our journey began with the belief that banking should be more than just transactions; it should be about building relationships and empowering our customers to achieve their financial goals. We are committed to innovation and excellence, continuously striving to offer excellent financial solutions to the evolving needs of our customers. Our fresh perspective allows us to embrace new technologies and agile methodologies, ensuring we stay ahead in the fast-paced financial landscape.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default CorporateProfile;
