// import React from 'react';
// import directus from '@/app/_utils/directus';

function PersonalAccountForm({ params, directus }) {
    console.log(params)
    return (
        <div className="mt-10">
            <div className="h-[40vh] w-full relative">
                <div className='absolute top-[70%] left-[10%]'>
                    {/* <h1>{slide.title}</h1> */}
                    <div className="uppercase z-20 font-extrabold text-3xl text-white">{`Open Account`}</div>

                </div>
                <img className='h-full object-cover object-left-top w-full brightness-30' src={`${process.env.NEXT_PUBLIC_API_URL}/assets/${params['account-type'] === 'corporate' ? 'd134a0e3-28bb-4f4c-9131-aae8cfd916d0' : '43fa4ad6-d3e6-4d48-88b3-db0130ef19e0'}`} />

            </div>
            <section className="max-w-4xl mx-auto bg-white p-8 my-8 rounded-lg shadow-lg">
                {/* <h2 className="text-3xl font-bold mb-8"></h2> */}
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="surname">
                            Surname*
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="surname"
                            type="text"
                            placeholder="Surname"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="middleName">
                            Middle name*
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="middleName"
                            type="text"
                            placeholder="First name"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                            Last name*
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lastName"
                            type="text"
                            placeholder="a.k.a"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="dob">
                            Date of Birth*
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="dob"
                            type="date"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Gender
                        </label>
                        <div>
                            <label className="inline-flex items-center">
                                <input type="radio" className="form-radio" name="gender" value="male" />
                                <span className="ml-2">Male</span>
                            </label>
                            <label className="inline-flex items-center ml-6">
                                <input type="radio" className="form-radio" name="gender" value="female" />
                                <span className="ml-2">Female</span>
                            </label>
                        </div>
                    </div>
                    {params['account-type'] === 'corporate' && <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="business-name">
                            Business Name*
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="business-name"
                            type="text"
                            placeholder="Business Name"
                        />
                    </div>}

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="telephone">
                            Telephone number*
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="telephone"
                            type="text"
                            placeholder="Number"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="altTelephone">
                            Telephone number (Alternative)
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="altTelephone"
                            type="text"
                            placeholder="Number"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email address*
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="email"
                            type="email"
                            placeholder="Email"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="region">
                            Region of residence*
                        </label>
                        <select
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="region"
                        >
                            <option>-Select-</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address1">
                            Address Line 1*
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="address1"
                            type="text"
                            placeholder="Address 1"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="address2">
                            Address Line 2*
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="address2"
                            type="text"
                            placeholder="Address 2"
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="passport">
                            Passport Photo
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="passport"
                            type="file"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-black text-white py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default PersonalAccountForm;
