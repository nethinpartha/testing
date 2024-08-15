'use client'
import React from 'react';
import directus from '@/app/_utils/directus';
import { ArrowLeftEndOnRectangleIcon } from '@heroicons/react/20/solid';
import { FaAngleDown, FaAngleLeft } from 'react-icons/fa';

const Map_list_item = ({ location }) => {
    const [open, setOpen] = React.useState(false);
    return (
        <li className="bg-gray-200 p-4 rounded-lg flex-col hover:bg-gray-300">
            <div className='flex justify-between items-center cursor-pointer'><span>{location.name}</span>
                <button onClick={() => setOpen(!open)} className=''>
                    {!open ? <FaAngleLeft className='w-5 h-5' /> : <FaAngleDown className='w-5 h-5' />} </button>
                {/* <FaAngleLeft className='w-5 h-5' /> */}
            </div>
            {open && <div className='mt-4'>
                {location.address}
            </div>}
        </li>
    )

}
function LocateATM() {
    const locations = [{ name: 'Santa Margarida', address: '' }, { name: 'Micondo', address: '' }, { name: 'Uba Budo', address: '' }, { name: 'Bombom', address: '' }, { name: 'Monte Carmo', address: '' }]
    return (
        <div className="bg-white text-gray-900">
            {/* Hero Section */}
            <section className="relative bg-cover bg-center h-64" style={{ backgroundImage: `url('${process.env.NEXT_PUBLIC_API_URL}/assets/6ea5671f-632d-4a5e-ba72-a227ace93fba')` }}>
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <div className="text-center">
                        <h1 className="text-4xl font-bold text-white">LOCATE ATM</h1>
                    </div>
                </div>
            </section>

            {/* Breadcrumb */}
            <nav className="bg-gray-100 py-3 px-5">
                <ol className="list-reset flex">
                    <li><a href="#" className="text-blue-600">GTI Bank</a></li>
                    <li><span className="mx-2">/</span></li>
                    <li className="text-gray-500">Locate ATM</li>
                </ol>
            </nav>

            {/* Content Section */}
            <section className="max-w-7xl mx-auto py-12 px-6">
                <div className="lg:flex lg:space-x-8 justify-center items-center">
                    {/* Locations List */}
                    <div className="lg:w-1/3 mb-8 lg:mb-0">
                        <h2 className="text-xl font-semibold mb-4">Below are the list of the locations of all our ATMs. Click to get directions from the map.</h2>
                        <ul className="space-y-4">
                            {locations.map((location, index) => (
                                <Map_list_item key={index} location={location} />))}
                        </ul>
                    </div>

                    {/* Map Section */}
                    <div className="lg:w-2/3">
                        <img src={`${process.env.NEXT_PUBLIC_API_URL}/assets/4522d08c-8fc2-4114-afd3-a3a0a220e888`} alt="ATM Locations Map" className="rounded-lg shadow-lg" />
                    </div>
                </div>
            </section>


        </div>
    );
}

export default LocateATM;
