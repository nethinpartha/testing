// components/Footer.js
"use client";
import { usePathname } from 'next/navigation';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import directus from '../_utils/directus';
// import directus from '@/app/directus';

export default function Footer() {
    const pathname = usePathname();
    const isLoginPath = pathname === '/login';
    return (
        <div className=' bg-gray-900 text-gray-200 border-t-4 border-red-500'>
            {!isLoginPath && <footer className=" py-12 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div>
                        <h2 className="text-xl font-light mb-6">Digital Banking</h2>
                        <ul>
                            <li className="mb-2"><a href="/digital-banking" className="hover:text-white text-xs">Digital Platforms</a></li>
                            <li className="mb-2"><a href="/digital-banking" className="hover:text-white text-xs">POS</a></li>
                            <li className="mb-2"><a href="/card-services" className="hover:text-white text-xs">Card Personalization</a></li>
                            {/* <li className="mb-2"><a href="#" className="hover:text-white text-xs">Security Center</a></li> */}
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-light mb-6">Quick Links</h2>
                        <ul>
                            <li className="mb-2"><a href="/personal-banking" className="hover:text-white text-xs">Personal Banking</a></li>
                            <li className="mb-2"><a href="/corporate-banking" className="hover:text-white text-xs">Corporate Banking</a></li>
                            <li className="mb-2"><a href="/locate-atm" className="hover:text-white text-xs">Locate ATMs</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-light mb-6">About GTI Bank</h2>
                        <ul>
                            <li className="mb-2"><a href="/corporate-profile" className="hover:text-white text-xs">Corporate Profile</a></li>
                            <li className="mb-2"><a href="/about" className="hover:text-white text-xs">Mission, Vision & Values</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white text-xs">FAQs</a></li>
                            <li className="mb-2"><a href="#" className="hover:text-white text-xs">Contact Us</a></li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-xl font-light mb-6">Get in Touch</h2>
                        <address className="not-italic">
                            <p className="mb-2  text-xs">Rua da Guiné, São Tomé, C.P. 54</p>
                            <p className="mb-2  text-xs">+2399073561</p>
                            <p className="mb-2  text-xs">+233 552 529659</p>
                            <p className="mb-2  text-xs"><a href="mailto:info@gtibank.com" className="hover:text-white text-xs">info@gtibank.com</a></p>
                        </address>
                    </div>

                    <div className=" flex flex-col items-center lg:items-center border-l">
                        <div className="mb-4">
                            <a href="#"><img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/2db045dc-c192-472b-a474-a78125ebffc3`} alt="Download on the App Store" className="mb-4" /></a>
                            <a href="#"><img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/0d470abd-f670-47b7-a623-e46ab0978828`} alt="Get it on Google Play" /></a>
                        </div>
                        <div className="flex space-x-5 mt-6">
                            <a href="#" className="hover:text-white text-xs"><FaFacebookF /></a>
                            <a href="#" className="hover:text-white text-xs"><FaInstagram /></a>
                            <a href="#" className="hover:text-white text-xs"><FaTwitter /></a>
                            <a href="#" className="hover:text-white text-xs"><FaLinkedinIn /></a>
                            <a href="#" className="hover:text-white text-xs"><FaYoutube /></a>
                            <a href="#" className="hover:text-white text-xs"><FaTiktok /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-left text-gray-500 container  text-xs">
                    &copy; 2024 GTI BANK
                </div>
            </footer>}
        </div>
    );
}