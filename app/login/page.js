import React from 'react';
import directus from '@/app/_utils/directus';

function LoginPage() {
    return (
        <div className="bg-cover bg-center h-screen " style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/assets/9093faa4-ddac-42d9-a8f9-ca4d46b06df6')` }}>
            <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
                <div className="bg-white bg-opacity-75 p-8 rounded-lg shadow-lg max-w-lg w-full">
                    <h2 className="text-3xl font-bold text-center mb-8 text-gray-900">Sign in to online banking</h2>
                    <form>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="username"
                                type="text"
                                placeholder="Case sensitive username"
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Case sensitive password"
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                                type="button"
                            >
                                LOGIN
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-red-500 hover:text-red-800" href="#">
                                Forgot Username / Password?
                            </a>
                        </div>
                    </form>
                    <div className="mt-8 flex justify-between text-sm text-gray-700">
                        <a href="#" className="hover:text-gray-900">FAQs</a>
                        <a href="#" className="hover:text-gray-900">Contact us</a>
                    </div>
                </div>
            </div>
            <div className="text-center py-8 bg-black text-white ">
                <p className="text-sm">Nullam vehicula ipsum a arcu cursus vitae congue mauris. Nunc sed velit dignissim sodales ut eu. Sit amet consectetur adipiscing elit.</p>
                <div className="mt-4">
                    <a href="#" className="inline-block mx-2">
                        <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/0d470abd-f670-47b7-a623-e46ab0978828`} alt="Google Play" />
                    </a>
                    <a href="#" className="inline-block mx-2">
                        <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/2db045dc-c192-472b-a474-a78125ebffc3`} alt="App Store" />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
