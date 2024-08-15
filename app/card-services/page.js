function CardServices({ params }) {
    // console.log(params)
    return (
        <div>
            <div class="bg-gray-300 text-gray-800 py-12">
                <main class="">

                    <section class="my-24 container">
                        <div class="flex flex-col lg:flex-row items-center">
                            <div class="lg:w-1/2 mb-8 lg:mb-0 flex-col items-end">
                                <h2 class="text-7xl font-bold mb-4 text-justify">READY FOR
                                    A CARD TODAY?</h2>
                                <p class="text-justify text-lg mb-4 w-2/3">At GTI Bank we provide straightforward, reliable card services to meet all your banking needs.</p>
                                <a href="/personal-banking" class="px-6 py-3 bg-gray-900 text-gray-200 rounded-full">Get Started</a>

                            </div>
                            <div class="lg:w-1/2 flex justify-center items-center">
                                <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/7f157ab6-c070-4168-86a2-e738e745c865`} alt="Easy Banking Possibility" class="" />
                            </div>
                        </div>
                    </section>

                    <section class="text-center bg-gray-900 text-white w-screen p-10">
                        <div class="container my-10">
                            <h2 class="text-4xl font-bold mb-4">CARD SERVICES</h2>
                            <p class="text-center text-lg mb-12">
                                At GTI Bank, we offer a comprehensive suite of card services designed to meet the diverse needs of our customers. Our range of credit, debit, Visa, MasterCard, and premium cards provide unparalleled convenience, security, and benefits.
                            </p>

                            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                                <div class="flex flex-col items-center">
                                    <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/a1b8f136-22e2-42e0-b3ba-a32ef83dd57d`} alt="Debit Card" class="mb-4" />
                                    <h3 class="text-lg font-semibold">DEBIT CARD</h3>
                                </div>

                                <div class="flex flex-col items-center">
                                    <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/a1b8f136-22e2-42e0-b3ba-a32ef83dd57d`} alt="Prepaid Card" class="mb-4" />
                                    <h3 class="text-lg font-semibold">PREPAID CARD</h3>
                                </div>

                                <div class="flex flex-col items-center">
                                    <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/a1b8f136-22e2-42e0-b3ba-a32ef83dd57d`} alt="Credit Card" class="mb-4" />
                                    <h3 class="text-lg font-semibold">CREDIT CARD</h3>
                                </div>

                                <div class="flex flex-col items-center">
                                    <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/a1b8f136-22e2-42e0-b3ba-a32ef83dd57d`} alt="Master Card" class="mb-4" />
                                    <h3 class="text-lg font-semibold">MASTER CARD</h3>
                                </div>

                                <div class="flex flex-col items-center">
                                    <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/a1b8f136-22e2-42e0-b3ba-a32ef83dd57d`} alt="Premium Card" class="mb-4" />
                                    <h3 class="text-lg font-semibold">PREMIUM CARD</h3>
                                </div>

                                <div class="flex flex-col items-center">
                                    <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/a1b8f136-22e2-42e0-b3ba-a32ef83dd57d`} alt="Prepaid Card" class="mb-4" />
                                    <h3 class="text-lg font-semibold">PREPAID CARD</h3>
                                </div>

                                <div class="flex flex-col items-center">
                                    <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/a1b8f136-22e2-42e0-b3ba-a32ef83dd57d`} alt="Credit Card" class="mb-4" />
                                    <h3 class="text-lg font-semibold">CREDIT CARD</h3>
                                </div>


                                <div class="flex flex-col items-center">
                                    <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/a1b8f136-22e2-42e0-b3ba-a32ef83dd57d`} alt="Master Card" class="mb-4" />
                                    <h3 class="text-lg font-semibold">MASTER CARD</h3>
                                </div>
                            </div></div>
                    </section>





                    <section class="my-24">
                        <div class="flex flex-col lg:flex-row items-center container">
                            <div class="lg:w-1/2 mb-8 lg:mb-0  lg:ml-[10%]">
                                <h2 class="text-5xl font-bold mb-4">VISA CARD</h2>
                                <p class="text-justify text-lg mb-4">Our Visa card brings you global acceptance and unmatched benefits. Whether you're traveling abroad or shopping online, enjoy the convenience, security, and rewards that come with a card recognized and trusted worldwide.</p>

                            </div>
                            <div class="lg:w-1/2  flex justify-center">
                                <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/d9945d1b-6ce2-4af9-88c2-c5de5de38a8e`} alt="Growth is Possibly" />
                            </div>
                        </div>
                    </section>

                    <section class="mb-24 con">
                        <div class="flex flex-col lg:flex-row items-center container">
                            <div class="lg:w-1/2 mb-8 lg:mb-0 flex justify-center">
                                <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/f830ed8a-799a-43b4-8094-45444f0299d8`} alt="Let's Save Together" />
                            </div>
                            <div class="lg:w-1/2 text-center lg:text-left  lg:mr-[10%]">
                                <h2 class="text-5xl font-bold mb-4">MASTER CARD</h2>
                                <p class="text-justify text-lg mb-4">The MasterCard offers you worldwide acceptance, valuable rewards, and top-tier security. From everyday purchases to major expenses, our MasterCard is designed to provide flexibility and tranquillity, no matter where you are.</p>
                            </div>
                        </div>
                    </section>


                    <section class="mb-24">
                        <div class="flex flex-col lg:flex-row items-center container">
                            <div class="lg:w-1/2 mb-8 lg:mb-0  lg:ml-[10%]">
                                <h2 class="text-5xl font-bold mb-4">CREDIT CARD</h2>
                                <p class="text-justify text-lg mb-4">Our credit card offers unparalleled convenience and flexibility, designed to meet your everyday spending needs and larger financial goals. With competitive interest rates, generous rewards programs, and comprehensive security features, our credit card is your perfect financial companion.</p>

                            </div>
                            <div class="lg:w-1/2  flex justify-center">
                                <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/8d9c399b-6acb-4ff4-9dbb-c8a06217eae9`} alt="Growth is Possibly" class="rounded-lg shadow-lg" />
                            </div>
                        </div>
                    </section>

                    <section class="mb-24">
                        <div class="flex flex-col lg:flex-row items-center">
                            <div class="lg:w-1/2 order-last lg:order-first mb-8 lg:mb-0  flex justify-center">
                                <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/77761e30-9fc2-4a07-bcfb-d153ab83ad3c`} alt="Smart & Convenience" />
                            </div>
                            <div class="lg:w-1/2 text-center lg:text-left  lg:mr-[10%]">
                                <h2 class="text-5xl font-bold mb-4">DEBIT CARD</h2>
                                <p class="text-justify text-lg mb-4">Experience easy access to your funds with our debit card, which provides a secure and convenient way to manage your money. Enjoy instant transactions, easy ATM withdrawals, and fraud protection, ensuring your peace of mind with every purchase.</p>

                            </div>
                        </div>
                    </section>
                </main>
            </div>
            <section class="mb-24 block text-white">
                <div class="relative">
                    <div class="">
                        <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/36cdd42b-af83-4c2c-a2cb-9b239d0e2dec`} alt="Just Pay on the Go" class="w-screen h-[50vh] object-cover" />
                    </div>

                </div>
            </section>
            <div class="bg-white text-gray-800 py-12 px-6">
                <section class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center bg-black text-white rounded-lg overflow-hidden shadow-lg">
                    <div class="lg:w-1/2 p-8">
                        <h2 class="text-4xl font-bold mb-4">PREMIUM CARDS</h2>
                        <p class="text-justify text-lg mb-4">
                            Elevate your banking experience with our premium card, offering exclusive benefits such as higher credit limits, premium rewards, concierge services, and access to exclusive events. Enjoy unparalleled service and luxury tailored to your elite lifestyle.
                        </p>
                    </div>
                    <div class="lg:w-1/2">
                        <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/2ba99e88-df2f-45b4-a8b1-20d7c8bb217b`} alt="Premium Cards" class="object-cover w-full h-full" />
                    </div>
                </section>
            </div>
            <section class="text-center py-12 px-6">
                <h1 class="text-4xl font-bold mb-4">CARD SERVICES HUB</h1>
                <p class=" text-lg mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container">

                    <div class="bg-blue-100 p-6 rounded-lg shadow-lg">
                        <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/7b6dce9d-8b2c-4dc1-9046-a3be5835ab52`} alt="Purchases" class="rounded-t-lg w-full h-48 object-cover mb-4" />
                        <h3 class="text-xl font-semibold mb-2">Purchases</h3>
                        <p class="text-justify p-2">Use your card for shopping online, in-store, and internationally. Our cards are accepted worldwide wherever major credit and debit cards are recognized.</p>
                    </div>


                    <div class="bg-blue-200 p-6 rounded-lg shadow-lg">
                        <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/6966034c-df0d-4a24-8f77-be1b7b73300a`} alt="Cash Access" class="rounded-t-lg w-full h-48 object-cover mb-4" />
                        <h3 class="text-xl font-semibold mb-2">Cash Access</h3>
                        <p class="text-justify p-2">Withdraw cash from ATMs globally. With our extensive network, you’re never far from your money.</p>
                    </div>


                    <div class="bg-purple-200 p-6 rounded-lg shadow-lg">
                        <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/bef1c046-0250-4384-bfbb-55607a09a8e7`} alt="Digital Integration" class="rounded-t-lg w-full h-48 object-cover mb-4" />
                        <h3 class="text-xl font-semibold mb-2">Digital Integration</h3>
                        <p class="text-justify p-2">Link your card to your digital wallet (Apple Pay, Google Pay, Samsung Pay) for even more convenience.</p>
                    </div>
                </div>
            </section>
            <div class="bg-gray-900 text-white py-12 px-6">
                <section class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
                    <div class="lg:w-1/2 p-8">
                        <h2 class="text-3xl font-bold mb-4">CARD <br /> PERSONALIZATION <br /> SERVICES</h2>
                        <p class="text-justify text-md mb-4">
                            Lorem ipsum dolor sit amet consectetur adipiscing elit.  <br />
                            Morbi tristique senectus et netus et.
                        </p>
                        <button class="mt-4 px-6 py-3 bg-white text-gray-900 rounded-full">Get more info.</button>
                    </div>
                    <div class="lg:w-1/2 relative ">
                        <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/28373f7d-d0e7-4c61-936d-c3cd67ac3b21`} alt="Card Personalization" class="absolute -top-32 -right-1/3" />
                    </div>
                </section>
            </div>
        </div>
    );
}

export default CardServices;
